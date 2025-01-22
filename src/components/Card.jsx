import React from 'react'

function Card({ children, className }) {
  return (
    <div className={'bg-gradient-to-br from-primary-800 to-primary-900 text-primary-50 p-5 rounded-lg shadow-md shadow-secondary-800 ' + className}>{children}</div>
  )
}

export default Card