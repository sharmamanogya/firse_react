import React from 'react'

function Register() {
  return (
    <form>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Name' id='name' name='name'/>
        <label htmlFor="enrollmeent">Enrollment</label>
        <input type="text" placeholder='enrollment' id='enrollment' name = 'enrollment' />
        <label htmlFor="password">Password</label>
        <input type="text" placeholder='password' id='password' name='password'/>
        <label htmlFor="mark">Marks</label>
        <input type="text" placeholder='mark' />
        <button>submit</button>
    </form>
  )
}

export default Register
