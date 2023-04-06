import React from 'react'

const Error = () => {

    let errorStyle = {
        background: 'inherit',
        fontSize: '5rem',
        height: '85vh',
        width: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden',
        opacity: '.6',
        fontFamily: 'Arial',
        color: 'red'
    }

    return (
        <>
            <div
                style={errorStyle}
            >
                404 Page not found!!
            </div>
        </>
    )
}

export default Error