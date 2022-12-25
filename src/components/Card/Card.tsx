import { useNavigate } from 'react-router-dom';
import './Card.scss';

interface CardProps {
  cardTitle: string,
  redirectTo: string,
  animationDelay?: number,
  image?: any
}

function Card({ cardTitle, animationDelay, redirectTo, image }: CardProps) {
  const navigate = useNavigate();

  function goToPlayers() {
    navigate(redirectTo);
  }

  return (
    <div className='card-container' onClick={goToPlayers}>
      <div className='card-title-container'>
        <h1>{cardTitle || "Card title"}</h1>
      </div>

      <div
        className='card-image-container'
        style={{ animationDelay: `${animationDelay || 0}s` }}
      >
        <div className='card-image'>
        </div>
      </div>
    </div>
  )
}

export default Card