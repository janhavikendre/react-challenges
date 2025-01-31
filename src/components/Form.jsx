import React from 'react'
import { useState } from 'react'

const initialState = {
    userName: '',
    fullName: '',
    age: ''
};


export default function Form() {

    const [form, setValues] = useState(initialState)
    const [display, setDisplay] = useState(false)

    
    const handleSubmit = (e) => {
        e.preventDefault()
        setDisplay(true)
        if (userName === '' || fullName === '' || age === '') {
            alert('Please fill all the fields')
        } else {
            alert(`Name: ${userName}, Full Name: ${fullName}, Age: ${age}`)
        }
        
    }

    const updateField = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        })
    }
 


  return (
    <div>
        <form onSubmit={handleSubmit}
         className=''>
            <input 
            name='userName'
            value={form.userName || ''}
            onChange={updateField}
            placeholder='Enter your name'
            className='border border-gray-300 rounded-lg p-2 w-full'
            />
            <input
            type='text'
            name='fullName'
            value={form.fullName || ''}
            onChange={updateField}
            placeholder='Enter your full name'
            className='border border-gray-300 rounded-lg p-2 w-full'
            />
            <input
            type='number'
            name='age'
            onChange={updateField}
            value={form.age || ''}
            placeholder='Enter your age'
            className='border border-gray-300 rounded-lg p-2 w-full'
            />
            <button>Submit</button>
      {display && (
        <>
          <h4>Request Sent to DB with below request data</h4>
          <ul>
            <li>UserName: {form.userName.toUpperCase()}</li>
            <li>FullName: {form.fullName.toUpperCase()}</li>
            <li>Age: {form.age}</li>
          </ul>
        </>
      )}  

</form>
        
    </div>
  )
}
