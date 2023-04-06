import { Button } from '@mui/material'
import React from 'react'

const BlogNotCreated = () => {

    const blogNotCreatedStyle = {
        background: 'inherit',
        fontSize: '2rem',
        height: '85vh',
        width: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: '.9',
        fontFamily: 'Arial', 
        lineHeight: '2'
    }
    return (
        <div style={blogNotCreatedStyle}>
            <h1> You haven't created any blog yet </h1>
            <Button color="primary" variant="contained" href="/create-blog">Create Blog</Button>
        </div >
    )
}

export default BlogNotCreated   