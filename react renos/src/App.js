import './App.css'
import React, { useEffect, useState } from 'react'
import Modal from './component/modal/modal'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)
  })
  const headerComponent = () => {
    return (
      <div>
        <h6 className='heading'>Modal</h6>
      </div>
    )
  }
  const bodyComponent = () => {
    return (
      <div>
        <h6 className='heading'>Body dialog</h6>
      </div>
    )
  }
  const footerComponent = () => {
    return (
      <div>
        <button onClick={() => setIsOpen(false)}>close</button>
        <button onClick={() => setIsOpen(false)}>Ok</button>
      </div>
    )
  }
  const escFunction = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }
  return (
    <div className='App'>
      <button className='primaryBtn' onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen ? (
        <Modal
          setIsOpen={setIsOpen}
          Header={headerComponent}
          Body={bodyComponent}
          Footer={footerComponent}
        />
      ) : null}
    </div>
  )
}

export default App
