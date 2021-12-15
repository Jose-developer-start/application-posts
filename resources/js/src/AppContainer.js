import React from 'react'

export default function AppContainer(props) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">{props.title}</div>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
