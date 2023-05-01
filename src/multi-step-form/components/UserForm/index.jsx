import React from 'react'

export default function UserForm({ data, updateFieldHandler }) {
  return (
    <>
      <div className='form-control'>
        <label htmlFor='name'>Name:</label>
        <input 
          type='text' 
          name='name' 
          id='name' 
          placeholder='Inform your name' 
          value={data.name || ""}
          onChange={(e) => updateFieldHandler('name', e.target.value)} 
          required />
      </div>
      <div className='form-control'>
        <label htmlFor='email'>Email:</label>
        <input 
          type='text' 
          name='email' 
          id='email' 
          placeholder='Inform your e-mail' 
          value={data.email || ""} 
          onChange={(e) => updateFieldHandler('email', e.target.value)} 
          required />
      </div>
    </>
  )
}
