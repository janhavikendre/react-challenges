import React from 'react'
import { useNavigate } from 'react-router-dom'

function SubmitForm() {
  const [formData, setFormData] = React.useState({})
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log(data)

    navigate('/results')
  }

  const handleInput = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <label className='flex flex-col'>
          <span>Your Name</span>
          <input
            name='yourName'
            onChange={handleInput}
            type='text'
            placeholder='Your Name'
          />
        </label>

        <label className='flex flex-col'>
          <span>Favourite Age</span>
          <input
            name='favouriteAge'
            onChange={handleInput}
            type='text'
            placeholder='Age'
          />
        </label>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SubmitForm
