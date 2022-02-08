import { useState, useEffect } from 'react';
import { FeedList } from '../cmps/FeedList';
import { commentService } from '../services/comment.service.js';

export const Feed = () => {
  const [comment, setComment] = useState({});

  const handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    setComment({ ...comment, [field]: value });
  };

  const submitForm = (ev) => {
    ev.preventDefault();
    commentService.add(comment);
  };

  return (
    <section className='feed'>
      <div className='feed-form'>
        <form onSubmit={submitForm}>
          <textarea
            name='comment'
            placeholder='Add a comment'
            onChange={handleChange}
          ></textarea>
          <input
            name='email'
            placeholder='Enter an email'
            onChange={handleChange}
            type='email'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>

      <FeedList />
    </section>
  );
};
