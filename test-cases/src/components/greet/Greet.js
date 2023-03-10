import React, {useState} from 'react'

const Greet = ({name}) => {
  const [isHide, setIsHide] = useState(true)
  const handleClick =()=> {
    setIsHide(false)
    return 'Ok'
  }
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={handleClick}>Clicked</button>
      {
        isHide && <h2 id ='demo'>Dismiss</h2>
      }
      
    </div>
  )
}

export default Greet
