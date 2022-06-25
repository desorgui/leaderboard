import createListItem from './createListItem';

const leaderBoardApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const gameID = 'LndxQ1Dv6c7aRBYoVEhh';

export const createGame = async () => {
  const response = await fetch(leaderBoardApi, {
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
  const newScore = await fetch(`${leaderBoardApi}/${gameID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ user: username, score: scorescore }),
  });
  return newScore;
};

const getScores = async () => {
  const getData = await fetch(`${leaderBoardApi}/${gameID}/scores/`);
  const score = getData.json();
  return score;
};

const scoreList = () => {
  const leaderboardData = getScores();
  leaderboardData.then((value) => {
    if (value.result) {
      value.result.sort((a, b) => b.score - a.score);
      value.result.forEach((element, index) => {
        createListItem(element.user, element.score, index);
      });
    }
  });
};

export { addScoreToApi, scoreList };