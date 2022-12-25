import { useState } from 'react';
import { IoIosPersonAdd } from "react-icons/io";

import useAddPlayer from '../../hooks/useAddPlayer';

import { BlueButton } from '../Buttons/Buttons';
import Loading from '../Loading/Loading';

import './AddPlayerModal.scss';

function AddPlayerModal() {
  const [inputData, setInputData] = useState('');

  const {
    addPlayerLoading,
    didAddPlayer,
    error,
    doInsertPlayer,
    resetInsertPlayer
  } = useAddPlayer();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputData(event.target.value);
  }

  if (addPlayerLoading) {
    return <Loading />
  }

  if (didAddPlayer || error) {
    setTimeout(resetInsertPlayer, 3000);

    return (
      <div className="add-player-modal">
        <div className='modal-fields-icon'>
          <IoIosPersonAdd />
        </div>

        {didAddPlayer && <h1>
          Player {inputData} was successfully added!
        </h1>}

        {error && <h1>
          Could not add player {inputData} to database.
          Check logs for more information
        </h1>}
      </div>
    )
  }

  return (
    <div className="add-player-modal">
      <div className='modal-fields-icon'>
        <IoIosPersonAdd />
      </div>

      <input onChange={handleInputChange} className='modal-fields-input' type="text" />

      <div className='modal-fields-button'>
        <BlueButton
          text='Add player'
          isDisabled={false}
          onClick={() => doInsertPlayer(inputData)}
        />
      </div>
    </div>
  )
}

export default AddPlayerModal