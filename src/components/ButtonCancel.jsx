import React from 'react'

export default function ButtonCancel(props) {
    return (
        <button onClick={props.onCancelButtonClick} className="btn btn-link">Cancel</button>
    )
}