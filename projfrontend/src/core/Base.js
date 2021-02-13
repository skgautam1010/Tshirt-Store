import React from 'react'

const Base = ({
    title="My Title",
    description="My description",
    className="bg-dark text-white p-4",
    children
}) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-4">
                        {title}
                    </h2>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="bg-dark mt-auto p-3">
                <div className="container-fluid bg-success text-white text-center p-3">
                    <h4>If any Questions Or Queries,Reach Me Out At Instagram</h4>
                    <button className="btn btn-warning btn-lg">Contact Us</button>
                    <div className="container">
                        <span className="text-dark">
                            Django-React Full Stack Application
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Base;