import React from 'react';
import styles from './ReviewForm.module.css';
import { 
  BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill 
} from 'react-icons/bs';

export default function ReviewForm({ data, updateFieldHandler }) {
  return (
    <>
      <div className={styles["review-form"]}>
        <div className={`form-control ${styles["score-container"]}`}>
          <label className={styles["radio-container"]}>
            <input 
              type='radio' 
              name='review' 
              value='unsatisfied' 
              checked={data.review === "unsatisfied"}
              onChange={(e) => updateFieldHandler('review', e.target.value)} 
              required />
            <BsFillEmojiFrownFill />
            <p>Unsatisfied</p> 
          </label>
        </div>
        <div className={`form-control ${styles["score-container"]}`}>
          <label className={styles["radio-container"]}>
            <input 
              type='radio' 
              name='review' 
              value='neutral' 
              checked={data.review === "neutral"}
              onChange={(e) => updateFieldHandler('review', e.target.value)} 
              required />
            <BsFillEmojiNeutralFill />
            <p>It could be better</p> 
          </label>
        </div>
        <div className={`form-control ${styles["score-container"]}`}>
          <label className={styles["radio-container"]}>
            <input 
              type='radio' 
              name='review' 
              value='satisfied' 
              checked={data.review === "satisfied"}
              onChange={(e) => updateFieldHandler('review', e.target.value)} 
              required />
            <BsFillEmojiSmileFill />
            <p>Satisfied</p> 
          </label>
        </div>
        <div className={`form-control ${styles["score-container"]}`}>
          <label className={styles["radio-container"]}>
            <input 
              type='radio' 
              name='review' 
              value='very_satisfied' 
              checked={data.review === "very_satisfied"}
              onChange={(e) => updateFieldHandler('review', e.target.value)} 
              required />
            <BsFillEmojiHeartEyesFill />
            <p>Very satisfied</p> 
          </label>
        </div>
      </div>

      <div className='form-control'>
        <label htmlFor='comment'>Commentary</label>
        <textarea 
          id='comment' 
          name='comment' 
          placeholder='Tell us how was your experience with the product...' 
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler('comment', e.target.value)} 
          required></textarea>
      </div>
    
    </>
  )
}
