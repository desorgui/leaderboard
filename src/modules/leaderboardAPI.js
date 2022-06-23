import createListItem from "./createListItem";

const leaderboard_api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const gameID = 'Qw8j3WCLdmwL43ssOlqr';

export const createGame = async () => {
  const response = await fetch(leaderboard_api, {
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
}

const addScoreToApi = async (user, score) => {
  const newScore = await fetch(`${leaderboard_api}/${gameID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ user: user, score: score }),
  });
  return newScore;
};

const getScores = async () => {
  const getData = await fetch(`${leaderboard_api}/${gameID}/scores/`);
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
    };
  });
};

export { addScoreToApi, scoreList };