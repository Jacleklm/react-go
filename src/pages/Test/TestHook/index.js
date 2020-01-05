import React, { useState, useEffect }  from 'react';

function TestHook() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('jacle')

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    setName('jacleklm')
  }, [count])

  return (
    <div>
      <h1>I am a Hook Test</h1>
      <button onClick={() => {
        setCount(count + 1)
      }}>add</button>
      <p>我已经点击了{count}次</p>
      <button onClick={() => {
        setName('jacleTZ')
        // setName(name + 1)
      }}>change name</button>
      <p>My name is {name}</p>
    </div>
  )
}

// function Children() {
//   return(
//     <div>22</div>
//   )
// }

export default TestHook;