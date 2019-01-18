import React from 'react';
import Comment from './Comment'
import AddComment from './AddComment'
import './commentContainer.css'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: '',
            user: 'TempUser'
        };
    }

    handleCommentChange = (e) => {
        this.setState({ comment: e.target.value });
    }
    addComment = (e, i) => {
        e.preventDefault();
        let newComment = { text: this.state.comment, username: this.state.user }
        let comments = [...this.state.comments]
        comments.push(newComment);
        this.setState({ comments: comments, comment: '' });
    }
    render() {
        return (
            <div className='commentsSection'>
                {this.state.comments.map((comment, i) => <Comment comment={comment} />)}
                <AddComment comment={this.state.comment} user={this.state.user} addComment={this.addComment} commentChange={this.handleCommentChange} />
            </div>
        );
    }
}

export default CommentSection