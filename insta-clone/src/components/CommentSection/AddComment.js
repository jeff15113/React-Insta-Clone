import React from 'react'
const AddComment = (props) => {
    return (
        <div>
            {console.log(props)}
            <span>{props.comment}</span>
        </div>
    )
}

export default AddComment