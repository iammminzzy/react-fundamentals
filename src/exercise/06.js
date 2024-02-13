// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  /* 1. 💯 using refs */
  const usernameInputRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault()
    // const value = event.target.elements.userName.value
    const refValue = usernameInputRef.current.value
    onSubmitUsername(refValue + firstName)
  }

  /* 2. 💯 Validate lower-case */
  const [error, setError] = React.useState(false)

  function handleChange(event) {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
  }

  /* 3. 💯 Control the input value */
  const [firstName, setFirstName] = React.useState('')

  function handleInputChange(event) {
    const {value} = event.target
    setFirstName(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">UserName:</label>
        <input
          ref={usernameInputRef}
          id="userName"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="firstName">FirstName:</label>
        <input
          id="firstName"
          type="text"
          onChange={handleInputChange}
          value={firstName}
        />
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
