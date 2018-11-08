import React from 'react';
import Comment from './CommentContainer';

//mapowanie tablicy
const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;