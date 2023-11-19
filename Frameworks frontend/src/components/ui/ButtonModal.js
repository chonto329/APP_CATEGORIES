import React from 'react'

export const ButtonModal = ({ title = '' }) => {
  return (
    <div className='container'>
      <button
        type="button"
        className="btn btn-outline-primary m-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        {title}
      </button>
    </div>

  )
}
