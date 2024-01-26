import React from 'react'

const PrimaryButton = ({buttonText}) => {
  return (
    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            {buttonText}
          </button>
  )
}

export default PrimaryButton
