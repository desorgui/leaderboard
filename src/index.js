import './style.css';
import { addScoreToApi, scoreList } from './modules/leaderboardAPI';
import createListItem from './modules/createListItem';

const refresh = document.getElementById('refresh');
const username = document.getElementById('name');
const score = document.getElementById('score');
const addScore = document.getElementById('addScore');
const listItem = document.getElementsByClassName('item');

refresh.addEventListener('click', () => {
  if (!listItem.length) {
    scoreList();
  }
});

addScore.addEventListener('click', () => {
  addScoreToApi(username.value, score.value);
  createListItem(username.value, score.value);
  username.value = null;
  score.value = null;
});