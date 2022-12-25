import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useFetchPlayers from './useFetchPlayers';
import { setPlayersData } from '../redux/app';

function useInitData() {
  const dispatch = useDispatch();
  const { fetchPlayersLoading, playersData, fetchPlayersError } = useFetchPlayers();

  useEffect(() => {
    if (playersData) {
      dispatch(setPlayersData({ data: playersData }))
    }
  }, [playersData])

  return (
    true
  )
}

export default useInitData