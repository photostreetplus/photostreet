import React from 'react'
import './HomeFooter.css'

function HomeFooter() {
  return (
    <>
        <footer className="App-footer" style={{ display: 'flex',  justifyContent: 'flex-end' }}>
            <div style={{ marginRight:'20px' }} >0.1423ms</div>
            <div style={{ marginRight:'20px' }} >updates:23/sec</div>
            <div style={{ marginRight:'20px' }}>v0.1.23</div>
        </footer>
    </>
  )
}

export default HomeFooter

