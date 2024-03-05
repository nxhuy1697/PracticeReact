import React, { useCallback, useState } from 'react'
import TextMemo from './TextMemo';

export default function UseCallback() {
    const [count, setCount] = useState (0);
    const handleIncrease = useCallback (() => {
        setCount(prevCount => prevCount +1)
    }, [])
  return (
    <div>
        <TextMemo onIncrease={handleIncrease} />
        <h1>{count}</h1>
    </div>
  )
}
