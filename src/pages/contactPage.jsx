import React, {useState} from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [feedback, setFeedback] = useState(false);

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback(true);
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-10 max-w-96 mx-auto p-2'>
        <p className='lg:text-4xl md:text-3xl sm:text-xl '>Contact Us</p> 
        <p className='my-4'>We are here to help you. Please contact us </p>
        <form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
          <input type="text" name='name' value={ formData.name } onChange={handleChange} 
          className='border border-gray-400 p-2 rounded-lg' placeholder='Your name' required/>
          <input type="email" name='email' value={ formData.email } onChange={handleChange} className='border border-gray-400 p-2 rounded-lg' placeholder='Your name' required/>
          <textarea name='message' onChange={handleChange} rows={10} value={ formData.message }
          className='border border-gray-400 p-2 w-full rounded-lg' placeholder='Your message' required/>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 px-4 mx-auto py-2 max-w-max  text-white  rounded-lg'>Send Email</button>
        </form>
    </div>
    
      {
        feedback && 
        <div className='fixed flex inset-0 bg-black bg-opacity-50 justify-center items-center '>
          <div className='max-w-96 p-2'>
            <div className='flex flex-col w-full gap-4 bg-white p-4 rounded-md shadow-lg  justify-center items-center text-center'>
            <h1 className='lg:text-3xl md:text-2xl sm:text-xl '>Thank you for reaching out to us!</h1>
            <p>We will get back to you as soon as possible!</p>
            <button onClick={() => setFeedback(false)} className='bg-blue-500 hover:bg-blue-700 py-2 max-w-max text-white  rounded-md min-w-full '>Close</button>
          </div>
          </div>

        </div>
      }
    
    </div>
  )
}

export default ContactPage