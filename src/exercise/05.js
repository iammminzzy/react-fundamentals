// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const smallBox = (
  <div
    className="box box--small"
    style={{marginTop: 20, backgroundColor: 'lightblue'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{marginTop: 20, backgroundColor: 'pink'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{marginTop: 20, backgroundColor: 'orange'}}
  >
    large orange box
  </div>
)

/* 1. 💯 Create a custom component */
function Box({className = '', style, ...otherProps}) {
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

/* 2. 💯 accept a size prop to encapsulate styling */
function SizeBox({className = '', size, style, ...otherProps}) {
  const boxSizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${boxSizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <SizeBox size="large" style={{backgroundColor: 'green'}}>
        small lightblue SizeBox
      </SizeBox>
    </div>
  )
}

export default App
