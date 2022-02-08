import { useState } from 'react';
import { FeedList } from '../cmps/FeedList';

export const Feed = () => {
  const [comment, setComment] = useState({});

  const handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    setComment({ ...comment, [field]: value });
  };
  const submitForm = () => {};
  return (
    <section>
      <form>
        <textarea name='comment' onChange={handleChange}></textarea>
        <input name='email' onChange={handleChange} type='email' />
        <button type='submit'>Submit</button>
      </form>

      <FeedList />
    </section>
  );
};
