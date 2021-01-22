from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt


import braintree

gateway = braintree.BraintreeGateway(
    braintree.Configuration(
        braintree.Environment.Sandbox,
        merchant_id="b9rndx54sk72p6sx",
        public_key="r5s5c4pkws63xm8m",
        private_key="647ae14a59466b76e20e1ba6739cdfbf"
    )
)


def validate_user_session(id,token):
    UserModel=get_user_model()

    try:
        user=UserModel.objects.get(pk=id)
        if user.session_token==token:
            return True
        return False
    except UserModel.DoesNotExist:
        return False


@csrf_exempt
def generate_token(request,id,token):
    if not validate_user_session(id,token):
        return JsonResponse({'error':'Invalid Session,Please Login Again!!'})
    return JsonResponse({'clientToken':gateway.client_token.generate(),'success':True})


@csrf_exempt
def process_payment(request,id,token):
    if not validate_user_session(id,token):
        return JsonResponse({'error':'Invalid Session,Please Login Again!!'})
    nonce_from_client=request.Post['paymentmethodnonce']
    amount_from_client=request.POST['amount']

    result=gateway.transaction.sale({
        'amount':amount_from_client,
        'payment_method_nonce':nonce_from_client,
        'options':{
            'submit_for_settlement':True
        }
    })


    if result.is_success:
        return JsonResponse({
            'success':result.is_success,
            'transaction':{
                'id':result.transaction.id,
                'amount':result.transaction.amount
            }
            })
    else:
        return JsonResponse({'error':True,'success':False})
        
