import styles from './Input.module.css';

export default function Input( {type, label, name, placeholder, data, updateFieldHandler} ) {
  return (
    <div className={styles['form-control']}>
        <label htmlFor={name}>{label}:</label>
        <input 
            type={type}  
            name={name} 
            id={name}
            placeholder={placeholder}
            value={data[`${name}`] || ""} 
            onChange={(e) => updateFieldHandler(`${name}`, e.target.value)} 
            required />
    </div>
  )
}
