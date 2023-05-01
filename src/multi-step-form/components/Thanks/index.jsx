import React from 'react';
import styles from './Thanks.module.css';
import { 
  BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill 
} from 'react-icons/bs';

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiSmileFill />,
  satisfied: <BsFillEmojiFrownFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill /> 
}

export default function Thanks({ data }) {
  return (
    <div className={styles['thanks-container']}>
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra.
      </p>
      <p>
        Para concluir sua avaliação, clique no botão de Enviar abaixo.
      </p>
      <h3>
        Aqui está o resumo da sua avaliação {data.name}
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
