import React, { useState, useEffect } from "react"
import { Toast } from "react-bootstrap"

const ToastExample = ({ title, content, display, lock }) => {
  const onShow = display? Boolean(display) : false
  const onLock = lock? Boolean(lock) : false
  const [show, setShow] = useState(onShow && !onLock)

  const toggleShow = () => setShow(!show)

  useEffect(() => {
    setShow(onShow && !onLock)
  }, [onShow, onLock])

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'relative',
        minHeight: '200px',
        top: '106px',
        right: '50px',
        marginBottom: '-217px'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 10
        }}
      >
        <Toast show={show} onClose={toggleShow}>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">{title}</strong>
            {/* <small>2 seconds ago</small> */}
          </Toast.Header>
          <Toast.Body>{content}</Toast.Body>
        </Toast>
      </div>
    </div>
  )
}

// Toast will only appear on display={true} lock={false}
export default ToastExample