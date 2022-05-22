import React from 'react'
import './modal.css'

const Modal = ({ setIsOpen, Header, Body, Footer }) => {
  return (
    <>
      <div className={'darkBG'} onClick={() => setIsOpen(false)} />
      <div className={'centered'}>
        <div className={'modal'}>
          <div className={'modalHeader'}>
            <Header />
          </div>
          <button className={'closeBtn'} onClick={() => setIsOpen(false)}>
            close
          </button>
          <div className={'modalContent'}>
            <Body />
          </div>
          <div className={'modalActions'}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
