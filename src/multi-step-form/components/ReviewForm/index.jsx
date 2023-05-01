import React from 'react';
import styles from './ReviewForm.module.css';
import { 
  BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill 
} from 'react-icons/bs';
import InputRadio from '../InputRadio';
import Textarea from '../Textarea';

export default function ReviewForm({ data, updateFieldHandler }) {
  return (
    <>
      <div className={styles["review-form"]}>

        <InputRadio 
          name='review' 
          value='unsatisfied' 
          data={data} 
          updateFieldHandler={updateFieldHandler} >
          <BsFillEmojiFrownFill />
          <p>Unsatisfied</p> 
        </InputRadio> 
        <InputRadio 
          name='review' 
          value='neutral' 
          data={data} 
          updateFieldHandler={updateFieldHandler} >
          <BsFillEmojiNeutralFill />
          <p>Neutral</p> 
        </InputRadio> 
        <InputRadio 
          name='review' 
          value='satisfied' 
          data={data} 
          updateFieldHandler={updateFieldHandler} >
          <BsFillEmojiSmileFill />
          <p>Satisfied</p> 
        </InputRadio> 
        <InputRadio 
          name='review' 
          value='very_satisfied' 
          data={data} 
          updateFieldHandler={updateFieldHandler} >
          <BsFillEmojiHeartEyesFill />
          <p>Very satisfied</p> 
        </InputRadio> 

      </div>

      <Textarea 
        description='Commentary'
        name='comment'
        placeholder='Tell us how was your experience with the product...'
        data={data}
        updateFieldHandler={updateFieldHandler}
      />
    
    </>
  )
}
