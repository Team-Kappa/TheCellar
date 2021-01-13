import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField'

function SignUp() {
  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  // handleSubmit(){}
  return (
    <div className="signup-container">
      <form id="signup_form" onSubmit={handleSubmit}>
        <TextField
          id="standard-full-width"
          label="Username"
          style={{margin: 8}}
          placeholder="Create username"
          helperText="Username is required!"
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
    </div>
  )
}

export default SignUp
