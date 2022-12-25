import React from 'react';
import './Buttons.scss';

interface BlueButtonInterface {
  text: string,
  icon?: any,
  isDisabled?: boolean,
  onClick: React.MouseEventHandler
}

export const BlueButton = ({ text, icon, isDisabled, onClick }: BlueButtonInterface) => {
  return (
    <button
      className='button-container'
      onClick={onClick}
      disabled={isDisabled}
    >
      <span className='button-text'>{text}</span>
      <span className='button-icon'>{icon}</span>
    </button>
  )
}
