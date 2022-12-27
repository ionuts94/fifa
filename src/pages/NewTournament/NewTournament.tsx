import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MdOutlineAddCircle } from "react-icons/md";
import './NewTournament.scss';
// Types
import type { RootState } from '../../redux/store';
import type { Player } from '../../redux/app';

function NewTournament({ show, onClose }: { show?: boolean, onClose: () => void }) {
  const todayDate = new Date();
  const playersData = useSelector((state: RootState) => state.app.players.data);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [showPlayersPickBox, setShowPlayersPickBox] = useState(false);
  const [availableAddPlayers, setAvailableAddPlayers] = useState<Player[]>([]);

  console.log(playersData);

  function doShowPlayersPickBox(e: React.MouseEvent) {
    e.stopPropagation();
    setShowPlayersPickBox(true);
  }

  function handleMainLayerClick(e: React.MouseEvent) {
    e.stopPropagation();
    setShowPlayersPickBox(false);
  }

  function addSelectedPlayer(e: React.MouseEvent, player: Player) {
    e.stopPropagation();

    // Remove selected players from the list
    const newAvailableAddPlayers = availableAddPlayers.filter((p: Player) => p.id !== player.id);
    setAvailableAddPlayers(newAvailableAddPlayers);

    // Add selected player to the box
    const selectedPlayersCopy = [...selectedPlayers];
    selectedPlayersCopy.push(player);
    setSelectedPlayers(selectedPlayersCopy);
  }

  function removeSelectedPlayer(e: React.MouseEvent, player: Player) {
    e.stopPropagation();

    // Remove selected players from the box
    const newSelectedPlayers = selectedPlayers.filter((p: Player) => p.id !== player.id);
    setSelectedPlayers(newSelectedPlayers);

    // Add selected player to the list
    const availablePlayersCopy = [...availableAddPlayers];
    availablePlayersCopy.push(player);
    setAvailableAddPlayers(availablePlayersCopy);
  }

  useEffect(function () {
    setAvailableAddPlayers(playersData);
  }, [playersData])

  return (
    <div
      onClick={onClose}
      className='new-tournament-page'
    >
      <div
        onClick={handleMainLayerClick}
        className='new-tournament-container'
      >
        <h1 style={{ color: 'white' }}>Date: {todayDate.toLocaleDateString()}</h1>
        <div className='tm-players-container'>
          <h1 style={{ color: 'white' }}>Players: { }</h1>
          <div className='tm-players-box'>
            {selectedPlayers.map((player: Player) => (
              <div
                key={player.id}
                className='player-label-container'
                onClick={(e) => removeSelectedPlayer(e, player)}
              >
                <p>{player.name}</p>
              </div>
            ))}


            {showPlayersPickBox &&
              <div className='tm-players-pick'>
                {availableAddPlayers.map((player: Player) => (
                  <h1
                    key={player.id}
                    onClick={(e) => addSelectedPlayer(e, player)}
                  >
                    {player.name}
                  </h1>
                ))}
              </div>
            }

            <MdOutlineAddCircle
              onClick={doShowPlayersPickBox}
              className='fa-add-button'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewTournament