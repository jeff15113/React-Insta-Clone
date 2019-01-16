import React from 'react'

const AddComment = (props) => {
    return (
        <div className='addcomment'>
            {console.log(props)}
            <form onSubmit={props.addComment}>
                <input onChange={props.commentChange} type="text" value={props.comment} />
            </form>
        </div>
    )
}

export default AddComment