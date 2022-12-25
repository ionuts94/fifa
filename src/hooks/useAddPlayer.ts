import { useState } from "react";
import { db } from "../logic/initFirebase";
import { query, where, collection, getDocs, addDoc } from "firebase/firestore";
import { useSelector, useDispatch } from 'react-redux';
import { setPlayersData } from "../redux/app";
import { RootState } from "../redux/store";

function useAddPlayer() {
  const dispatch = useDispatch();
  const currentPlayers = useSelector((state: RootState) => state.app.players.data);

  const [addPlayerLoading, setAddPlayerLoading] = useState(false);
  const [didAddPlayer, setDidAddPlayer] = useState<null | boolean>(null);
  const [error, setError] = useState<any>(false);

  async function doInsertPlayer(name: string) {
    setAddPlayerLoading(true);
    try {
      const addedPlayer = await AddPlayer(name);
      if (addedPlayer) {
        const currentPlayersCopy = [...currentPlayers];
        currentPlayersCopy.push(addedPlayer);

        const sortedPlayers = currentPlayersCopy.sort(
          (prev, next) => prev.name > next.name ? 1 : -1
        );

        dispatch(setPlayersData({ data: sortedPlayers }))
        setDidAddPlayer(true);
      } else {
        setDidAddPlayer(false);
      }
    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setAddPlayerLoading(false)
    }
  }

  function resetInsertPlayer() {
    setAddPlayerLoading(false);
    setDidAddPlayer(null);
    setError(false);
  }

  return {
    addPlayerLoading,
    didAddPlayer,
    error,
    doInsertPlayer,
    resetInsertPlayer
  };
}

export default useAddPlayer;


async function AddPlayer(name: string) {
  const lowerCaseName = name.toLowerCase();
  const playerInDatabase = await CheckPlayerInDatabase(lowerCaseName);

  if (playerInDatabase) {
    throw new Error(`Player is already in database`);
  }

  try {
    const newPlayer = await InsertPlayerInDatabse(name);
    return newPlayer;
  } catch (err) {
    throw new Error(`${err}`);
  }
}

async function CheckPlayerInDatabase(name: string) {
  try {
    const qry = query(collection(db, "players"), where("name", "==", name));
    const docSnaps = await getDocs(qry);
    console.log(docSnaps);

    if (docSnaps.empty) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    throw new Error(`Unable to query database with player name: ${name}`);
  }
}

async function InsertPlayerInDatabse(name: string) {
  try {
    const nextPlayerId = await GetNextPlayerId();
    const newPlayerObj = {
      name: name.toLowerCase(),
      win: 0,
      lost: 0,
      id: nextPlayerId
    }

    await addDoc(collection(db, "players"), newPlayerObj);
    return newPlayerObj;

  } catch (err) {
    throw new Error(`Unable to insert player '${name}' in databse. Error: ${err}`);
  }
}

async function GetNextPlayerId() {
  const qry = query(collection(db, "players"));
  const playersQuerySnap = await getDocs(qry);
  return playersQuerySnap.size + 1;
}