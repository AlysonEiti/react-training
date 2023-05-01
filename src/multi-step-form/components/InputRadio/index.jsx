import styles from './InputRadio.module.css';

export default function InputRadio( {name, value, data, updateFieldHandler, children} ) {

  return (    
    <div className={`${styles["form-control"]} ${styles["score-container"]}`}>
        <label className={styles["radio-container"]}>
          <input 
              type='radio' 
              name={name}
              value={value} 
              checked={data[`${name}`] === {value}}
              onChange={(e) => updateFieldHandler(`${name}`, e.target.value)} 
              required />
          {children} 
        </label>
    </div>
  )
}
