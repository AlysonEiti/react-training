import React from 'react'
import Input from '../Input'

export default function UserForm({ data, updateFieldHandler }) {
  return (
    <>
      <Input
        type="text"
        label="Name"
        name="name"
        placeholder="Inform your name"
        data={data}
        updateFieldHandler={updateFieldHandler} />

      <Input
        type="text"
        label="Email"
        name="email"
        placeholder="Inform your e-mail"
        data={data}
        updateFieldHandler={updateFieldHandler} />
    </>
  )
}
