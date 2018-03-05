import React from 'react'

export default function ButtonDelete(props) {
    return (
        <button onClick={props.onDeleteButtonClick} className="btn btn-danger btn-sm">Delete</button>
    )
}