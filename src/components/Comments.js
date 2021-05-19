import React, { useState } from 'react';
import Comment from './Comment';
import { v4 as uuidv4 } from 'uuid';
const Comments = () => {
  const [comment, setComment] = useState([]);
  const [user, setUser] = useState([]);
  const [comments, setComments] = useState([
    {
      comment: '',
      user: '',
      id: '',
    },
  ]);
  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };
  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, { comment: comment, user: user, id: uuidv4() }]);
    setComment('');
    setUser('');
  };

  const remove = (id) => {
    const updatedComments = comments.filter((comment) => {
      return comment.id !== id;
    });
    setComments(updatedComments);
  };

  return (
    <section className="section-center" id="comments">
      <div>
        <div className="comments__heading">
          <h2>Yorumlar</h2>
          <p>Siz de düşüncelerinizi paylaşmak ister misiniz?</p>
        </div>

        <form action="#" onSubmit={handleSubmit}>
          <div className="form-group">
            <textarea
              type="text"
              placeholder="Yorumunuz"
              className="form-control"
              value={comment}
              required
              onChange={handleChangeComment}
              style={{ border: '2px solid #f7f8fa' }}
            />
            <input
              type="text"
              placeholder="Adınız"
              className="form-control"
              onChange={handleChangeUser}
              value={user}
              required
              style={{ border: '2px solid #f7f8fa' }}
            />
            <button type="submit" className="submit-btn">
              Paylaş
            </button>
          </div>
        </form>
      </div>
      <div className="comments__area">
        <Comment comments={comments} remove={remove} />
      </div>
    </section>
  );
};

export default Comments;
