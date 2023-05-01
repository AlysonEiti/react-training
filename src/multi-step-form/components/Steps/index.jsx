import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import styles from './Steps.module.css';

export default function Steps({ currentStep }) {
  const ratingStyle = (currentStep >= 1) ? styles.active : '';
  const sendStyle = (currentStep >= 2) ? styles.active : '';
  
  return (
    <div className={styles.steps}>
      <div className={`${styles.step} ${styles.active}`}>
        <AiOutlineUser />
        <p>Authentication</p>
      </div>
      <div className={` ${styles.step} ${ratingStyle} `}>
        <AiOutlineStar />
        <p>Rating</p>
      </div>
      <div className={` ${styles.step} ${sendStyle} `}>
        <FiSend />
        <p>Send</p>
      </div>
    </div>
  )
}
