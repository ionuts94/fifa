import { useState, useEffect } from 'react';
import './History.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Table from '../../components/Table/Table';
import { BlueButton } from '../../components/Buttons/Buttons';
import { TbTournament } from "react-icons/tb";
import NewTournament from '../NewTournament/NewTournament';

function History() {
  const [showTournamentModal, setShowTournamentModal] = useState(false);

  function onCloseTM() {
    setShowTournamentModal(false);
  }

  function openTM() {
    setShowTournamentModal(true);
  }

  return (
    <PageWrapper>
      <PageHeader text="History" />

      <div className='buttons-container'>
        <BlueButton
          text='New tournament'
          icon={<TbTournament />}
          onClick={openTM}
        />
      </div>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Header>Date</Table.Header>
            <Table.Header>Players</Table.Header>
          </Table.Row>
        </Table.Head>
      </Table>

      {showTournamentModal &&
        <NewTournament
          onClose={onCloseTM}
        />
      }
    </PageWrapper>
  )
}

export default History