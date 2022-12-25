import { useState, useEffect } from 'react'
import { db } from "../logic/initFirebase";
import { query, collection, getDocs } from "firebase/firestore";

interface PlayerDocData {
  id: number;
  name: string;
  win?: number;
  lost?: number;
}

function useFetchPlayers() {
  const [fetchPlayersLoading, setFetchPlayersLoading] = useState(false);
  const [playersData, setPlayersData] = useState<PlayerDocData[]>([]);
  const [fetchPlayersError, setFetchPlayersError] = useState<any>(false);

  useEffect(function () {
    doFetch();
  }, []);

  async function doFetch() {
    setFetchPlayersLoading(true);

    try {
      const qry = query(collection(db, "players"));
      const docSnaps = await getDocs(qry);
      const docsData: PlayerDocData[] = [];

      for (let docSnap of docSnaps.docs) {
        const { id = 99, name = 'unknown', win = -1, lost = -1 } = docSnap.data();
        docsData.push({ id, name, win, lost });
      }
      console.log(docsData.sort((previous, next) => previous.name > next.name ? 1 : -1));
      setPlayersData(docsData);
    } catch (err) {
      setFetchPlayersError(err);
      console.error(err);
    } finally {
      setFetchPlayersLoading(false)
    }
  }

  return {
    fetchPlayersLoading,
    playersData,
    fetchPlayersError
  }
}

export default useFetchPlayers