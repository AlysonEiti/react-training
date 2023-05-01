import styles from './Textarea.module.css';

export default function Textarea( {description, name, placeholder, data, updateFieldHandler} ) {
  return (
    <div className={styles['form-control']}>
        <label htmlFor={name}>{description}</label>
        <textarea 
          id={name} 
          name={name}  
          placeholder={placeholder}  
          value={data[`${name}`] || ""}
          onChange={(e) => updateFieldHandler(`${name}`, e.target.value)} 
          required></textarea>
      </div>
  )
}
