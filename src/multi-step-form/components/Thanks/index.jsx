import React from 'react';
import styles from './Thanks.module.css';
import { 
  BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill 
} from 'react-icons/bs';

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill /> 
}

export default function Thanks({ data }) {
  return (
    <div className={styles['thanks-container']}>
      <h2>Almost there...</h2>
      <p>
        Your opnion is important to us, soon you will get a 10% discount ticket for your next purchase.
      </p>
      <p>
        Para concluir sua avaliação, clique no botão de Enviar abaixo.
      </p>
      <h3>
        Here's your review {data.name}
      </h3>
      <p className={styles['review-data']}>
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className={styles['review-data']}>
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  )
}
