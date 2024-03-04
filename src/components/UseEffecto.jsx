import React, { useState } from 'react'
import Content from './Content'

export default function UseEffecto() {
    const [show, setShow] = useState ()
  return (
    <div style={{padding: 30}}>
        <button onClick={() => setShow(!show)} > Toggle</button>
        {show && <Content />}
    </div>
  )
}
