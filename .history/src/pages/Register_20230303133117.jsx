import React from 'react'

export const Register = () => {
  return (
    <div className='formContainer'>
         <div className='formWrapper'>
            <form>
                <input type="text" placeholder='dispaly name' />
                <input type="email" placeholder='dispaly email'/>
                <input type="password" placeholder='dispaly password'/>
                <input type="file" />
            </form>
         </div>
    </div>
  )
}
