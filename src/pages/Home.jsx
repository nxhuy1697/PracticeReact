import React from 'react'
import Header from '../components/Header'


export default function Home() {
  return (<>
  <Header/>
  <div className='bg-red'>Home</div>
  <a href="/layout">Layout</a>
  </>
  )
}
