import {useState, useEffect} from 'react';
import {
  getGameMMORPG,
  getGamePC,
  getGamePvP,
  getGameShooter,
  getGameTotal,
} from '../api/api';

export default function useData() {
  const [images, setImages] = useState([]);
  const [imagesPC, setImagesPC] = useState([]);
  const [imagesShooter, setImagesShooter] = useState([]);
  const [imagesmmr, setImagesmmr] = useState([]);
  const [imagesPvp, setImagesPvp] = useState([]);

  const getData = async () => {
    const data = await getGameTotal();
    setImages(data);
  };
  const getDataPC = async () => {
    const data = await getGamePC();
    setImagesPC(data);
  };
  const getDataShooter = async () => {
    const data = await getGameShooter();
    setImagesShooter(data);
  };
  const getDataMmorpg = async () => {
    const data = await getGameMMORPG();
    setImagesmmr(data);
  };
  const getDataPvp = async () => {
    const data = await getGamePvP();
    setImagesPvp(data);
  };
  useEffect(() => {
    getData();
    getDataPC();
    getDataShooter();
    getDataPvp();
    getDataMmorpg();
  }, []);

  return {
    images,
    imagesPC,
    imagesShooter,
    imagesmmr,
    imagesPvp,
  };
}
