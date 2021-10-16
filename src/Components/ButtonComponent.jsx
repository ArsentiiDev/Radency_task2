import { Button } from '@mui/material'
import React from 'react'

export default function ButtonComponent(props) {

    const {text,size,color,variant,onClick,...other} = props
    return (
        <Button
        variant ={variant || 'contained'}
        size ={size || 'large'}
        onClick = {onClick}
        {...other}
        >
        {text}

        </Button>
    )
}
