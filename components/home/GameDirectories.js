import Link from 'next/link'
import React from 'react'

function GameDirectories() {
  return (
    <div style={{backgroundColor: 'white', display: 'flex', width: '100%', height: '100%'}}>
        <Link href="/dog-race">Dog Racing</Link>
        <Link href="/keno">Keno</Link>
    </div>
  )
}

export default GameDirectories