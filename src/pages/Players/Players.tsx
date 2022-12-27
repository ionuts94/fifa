import { IoIosPersonAdd } from "react-icons/io";

// Components
import AddPlayerModal from '../../components/AddPlayerModal/AddPlayerModal';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { BlueButton } from '../../components/Buttons/Buttons';
import Modal from '../../components/Modal/Modal';
import Table from "../../components/Table/Table";

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
    <PageWrapper>
      <PageHeader text="PLAYERS" />

      <div className='buttons-container'>
        <BlueButton
          text='Add player'
          icon={<IoIosPersonAdd />}
          onClick={handleAddPlayerClick}
        />
      </div>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Header>Name</Table.Header>
            <Table.Header>Wins</Table.Header>
            <Table.Header>Lost</Table.Header>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {playersData?.map(player => (
            <Table.Row key={player.name}>
              <Table.Data>{player.name}</Table.Data>
              <Table.Data>{player.win}</Table.Data>
              <Table.Data>{player.lost}</Table.Data>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Modal />
    </PageWrapper>
  )
}

export default Players