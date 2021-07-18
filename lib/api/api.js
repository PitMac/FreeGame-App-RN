export const getGameTotal = async () => {
  try {
    const resp = await fetch('https://www.freetogame.com/api/games');
    const json = await resp.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
};

export const getGamePC = async () => {
  try {
    const resp = await fetch(
      'https://www.freetogame.com/api/games?platform=browser',
    );
    const json = await resp.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
};
export const getGameShooter = async () => {
  try {
    const resp = await fetch(
      'https://www.freetogame.com/api/games?category=shooter',
    );
    const json = await resp.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
};
export const getGamePvP = async () => {
  try {
    const resp = await fetch(
      'https://www.freetogame.com/api/games?category=pvp',
    );
    const json = await resp.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
};
export const getGameMMORPG = async () => {
  try {
    const resp = await fetch(
      'https://www.freetogame.com/api/games?category=mmorpg',
    );
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
