// Write your code here
import {useState} from 'react'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

const Login = props => {
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorShow, setError] = useState(false)

  const onChangepassword = event => {
    setPassword(event.target.value)
  }

  const onChangeUser = event => {
    setUsername(event.target.value)
  }

  const submitForm = event => {
    event.preventDefault()
    if (userName === 'rahul' && password === 'rahul@2021') {
      console.log('welcom')
      setError(false)
      const {history} = props
      history.replace('/')
    } else {
      console.log('invalid user')
      setError(true)
    }
  }

  return (
    <div className=" main-bg">
      <div>
        <div>
          <div className="col-12 col-md-6">
            <div className="login-details d-flex flex-column justify-content-center align-items-center">
              <form onSubmit={submitForm} className="form-style">
                <input
                  type="text"
                  onChange={onChangeUser}
                  placeholder="enter username"
                />
                {errorShow && <p>Check username</p>}

                <br />
                <br />

                <input
                  type="password"
                  onChange={onChangepassword}
                  placeholder="enter password"
                />
                {errorShow && <p>Check password</p>}
                <br />

                <br />
                <Button className="btn-primary" type="submit">
                  Login
                </Button>
              </form>
              <div className="additional-info mt-4">
                <p>username:rahul</p>
                <p>password:rahul@2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
