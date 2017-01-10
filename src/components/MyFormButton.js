import React from 'react'

function FormButton(props) {
    return (
        <button type={props.type}>{props.text}</button>
    )
}

export default FormButton
