// React imports
import React, { useState } from 'react'

// Modal Functions
function Modal() {
  const [showModal, setShowModal] = useState(false)

  function hideModal() {
    setShowModal(false)
  }

  function goToBasket() {
    window.location.replace('../pages/Basket')
  }

// Checks if show modal is true, if it is then it will show the Modal Div and add the buttons.
  return (
    <>
      {showModal && (
        <div id="modal">
          <button id="continue-btn" onClick={hideModal}>Continue</button>
          <button id="basket-btn" onClick={goToBasket}>Recipes</button>
        </div>
      )}
    </>
  )
}

export default Modal