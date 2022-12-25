import { IoIosPersonAdd } from "react-icons/io";

// Components
import AddPlayerModal from '../../components/AddPlayerModal/AddPlayerModal';
import PageHeader from '../../components/PageHeader/PageHeader';
import { BlueButton } from '../../components/Buttons/Buttons';
import Modal from '../../components/Modal/Modal';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../redux/app';

// Types
import type { RootState } from '../../redux/store';

// Styles
import './Players.scss';

function Players() {
  const dispatch = useDispatch();
  const playersData = useSelector((state: RootState) => state.app.players.data);


  function handleAddPlayerClick() {
    dispatch(setModal({
      isVisible: true,
      content: <AddPlayerModal />
    }))
  }

  return (
    <div className='players-page-container'>
      <PageHeader text="PLAYERS" />

      <div className='buttons-container'>
        <BlueButton
          text='Add player'
          icon={<IoIosPersonAdd />}
          onClick={handleAddPlayerClick}
        />
      </div>

      <div className='players-list'>
        <table className='players-table-list'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Wins</th>
              <th>Lost</th>
            </tr>
          </thead>
          <tbody>
            {playersData?.map(player => (
              <tr key={player.name}>
                <td>{player.name}</td>
                <td>{player.win}</td>
                <td>{player.lost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal />
    </div>
  )
}

export default Players