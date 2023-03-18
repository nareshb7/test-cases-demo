import React, {useEffect, useState} from 'react'
// import axios from 'axios'

const Greet = ({name}) => {
  const [isHide, setIsHide] = useState(true)
  const [count,setCount] = useState(0)
  const skills = ['HTML', 'CSS', 'JavaScript']
  const [time, setTime] = useState(false)
  // useEffect(()=> {
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(data => console.log(data, 'api data'))
  // },[])
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
      <button onClick={handleClick}>Clicked btn</button>
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
        <h3>Count {count}</h3>
        <button onClick={()=> setCount(10)}>SetCount</button>
    </div>
  )
}

export default Greet
