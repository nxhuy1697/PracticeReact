import React from 'react'
import Header from '../components/Header'
import AgeChecker from '../components/AgeChecker'
import UseMemo from '../components/UseMemo'
import UseRef from '../components/UseRef'

export default function Home() {
  return (<>
  <Header/>
  <div></div>
  <AgeChecker />

  <UseMemo />

    <UseRef />
  </>
  )
}
