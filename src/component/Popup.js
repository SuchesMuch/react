import React, { useEffect, useState } from 'react'
import Button from './Button'

const Content = ({ handleTogglePopup, getChildren, resetState }) => {
  const [isFadedIn, setIsFadedIn] = useState(false)

  let timer = null

  const handleToggleFadedIn = () => { setIsFadedIn(!isFadedIn) }

  const handleClosePopup = () => {
    handleToggleFadedIn()
    timer = setTimeout(() => {
      handleTogglePopup()
      if (resetState) {
        resetState()
      }
    }, 150)
  }
  useEffect(() => {
    setIsFadedIn(!isFadedIn)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (

    <div style={{ position: 'absolute', top: 'calc(0% + .5em', left: '50%', transform: 'translate(-50%, 0%)', opacity: `${isFadedIn ? "1" : '.5'}`, background: 'white', borderRadius: '3px', transition: '0.15s', backgroundColor: 'lightpink',zIndex:'1' }}>
      {getChildren(handleClosePopup)}
      <div style={{ position: 'absolute', top: '0% ', right: '0%', padding: '.5em' }}>
        <Button type="button" name="X" onClick={handleClosePopup} />
      </div>
    </div>
  )
}


const Popup = ({ name, getChildren, resetState }) => {

  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: "center", height: '100%'}}>

        <Button type="button" onClick={handleToggle} name={name} />
      </div>
      {isOpen &&
        <Content getChildren={getChildren} handleTogglePopup={handleToggle} resetState={resetState} />
      }
    </div>
  )
}

export default Popup
