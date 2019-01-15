import React from 'react';
import Comment from './Comment'
import AddComment from './AddComment'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }
    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment comment={comment} />)}
                <AddComment />
            </div>
        );
    }
}

export default CommentSection