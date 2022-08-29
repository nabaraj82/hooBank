import React from 'react'

const Button = ({styles}) => {
  return (
    <button type="button" className={`bg-blue-gradient font-poppins py-4 px-6 font-medium text-[18px] text-primary outline-none rounded-md ${styles}`}>
      Get Started
    </button>
  )
}

export default Button