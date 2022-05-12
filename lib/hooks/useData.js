import {useState, useEffect} from 'react';
import {getGame, getGamePC, getGameTotal} from '../api/api';

export default function useData() {
  const [games, setGames] = useState([]);
  const [gamesPC, setGamesPC] = useState([]);
  const [gamesShooter, setGamesShooter] = useState([]);
  const [gamesmmr, setGamesmmr] = useState([]);
  const [gamesPvp, setGamesPvp] = useState([]);

  const getData = async () => {
    const data = await getGameTotal();
    setGames(data);
  };

  const getDataPC = async () => {
    const data = await getGamePC();
    setGamesPC(data);
  };

  const getDataShooter = async () => {
    const data = await getGame('shooter');
    setGamesShooter(data);
  };

  const getDataMmorpg = async () => {
    const data = await getGame('mmorpg');
    setGamesmmr(data);
  };

  const getDataPvp = async () => {
    const data = await getGame('pvp');
    setGamesPvp(data);
  };

  useEffect(() => {
    getData();
    getDataPC();
    getDataShooter();
    getDataPvp();
    getDataMmorpg();
  }, []);

  return {
    games,
    gamesPC,
    gamesShooter,
    gamesmmr,
    gamesPvp,
  };
}
