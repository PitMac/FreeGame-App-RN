let API_URL = 'https://www.freetogame.com/api/games';

export const getGame = async categoryName => {
  try {
    const resp = await fetch(`${API_URL}?category=${categoryName}`);
    const json = await resp.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
};

export const getGameTotal = async () => {
  try {
    const resp = await fetch(API_URL);
    const json = await resp.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
};

export const getGamePC = async () => {
  try {
    const resp = await fetch(`${API_URL}?platform=browser`);
    const json = await resp.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
};

export const getDataGame = async $id => {
  try {
    const resp = await fetch('https://www.freetogame.com/api/game?id=' + $id);
    const json = await resp.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
};
