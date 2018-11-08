import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT'
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT'

// kreator akcji:

function addComment(text) {
  return {
      type: ADD_COMMENT,
      text: text,
      id: uuid.v4()
  };
}

function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  }
}

function thumbDownComment(commentId) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentId
  }
}

export { addComment, thumbUpComment, thumbDownComment  };
export { ADD_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT}