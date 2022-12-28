import React from 'react';
import type { Player } from '../../redux/app';
import './PlayerLabel.scss';

interface PlayerLabelProps {
  player: Player;
  onClick: (e: React.MouseEvent, player: Player) => void;
}

function PlayerLabel({ player, onClick }: PlayerLabelProps) {
  return (
    <div
      className='player-label-container'
      onClick={(e) => onClick(e, player)}
    >
      <p>{player.name}</p>
    </div>
  )
}

export default PlayerLabel