import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import '../styles/comment.scss';
const Comment = (props) => {
  const comments = props.comments;
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="comment">
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
            {comment.id !== '' && (
              <div>
                <RiDeleteBinLine onClick={() => props.remove(comment.id)} />
                <hr />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
