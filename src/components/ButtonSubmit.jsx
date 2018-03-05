import React from 'react'

export default function ButtonSubmit(props) {
    return (
        <input onClick={props.onSubmitButtonClick} className="btn btn-primary" type="submit" value={props.value} />
    )
}