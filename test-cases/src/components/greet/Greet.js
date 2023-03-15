import React, {useEffect, useState} from 'react'

const Greet = ({name}) => {
  const [isHide, setIsHide] = useState(true)
  const skills = ['HTML', 'CSS', 'JavaScript']
  const [time, setTime] = useState(false)
  const handleClick =()=> {
    setIsHide(false)
    return 'Ok'
  }
  useEffect(()=> {
    setTimeout(()=> {
      setTime(true)
    }, 1200)
  })
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={handleClick}>Clicked</button>
      {
        isHide && <h2 id ='demo'>Dismiss</h2>
      }
      <input type='text' name='Location'/>
      <ul>
        {
          skills.map(skill => <li>{skill}</li>)
        }
      </ul>
       <img src='' alt='image' />
        {
          time && <h3>Timeout Check</h3>
        } 
    </div>
  )
}

export default Greet
