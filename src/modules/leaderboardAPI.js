import createListItem from './createListItem';

const leaderBoard_Api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const gameID = 'Qw8j3WCLdmwL43ssOlqr';

export const createGame = async () => {
  const response = await fetch(leaderBoard_Api, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Desorgui',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  const idgame = data.result;
  return idgame;
};

const addScoreToApi = async (username, scorescore) => {
  const newScore = await fetch(`${leaderBoard_Api}/${gameID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ user: username, score: scorescore }),
  });
  return newScore;
};

const getScores = async () => {
  const getData = await fetch(`${leaderBoard_Api}/${gameID}/scores/`);
  const score = getData.json();
  return score;
};

const scoreList = () => {
  const leaderboardData = getScores();
  leaderboardData.then((value) => {
    if (value.result) {
      value.result.forEach((element) => {
        createListItem(element.user, element.score);
      });
    }
  });
};

export { addScoreToApi, scoreList };