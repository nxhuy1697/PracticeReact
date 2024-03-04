import React from 'react'
import Header from '../components/Header'
import AgeChecker from '../components/AgeChecker'

export default function Home() {
  return (<>
  <Header/>
  <div className='bg-red'>Home</div>
  <AgeChecker />

  </>
  )
}
