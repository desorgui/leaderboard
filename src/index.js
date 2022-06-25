import './style.css';
import { addScoreToApi, scoreList } from './modules/leaderboardAPI';
import createListItem from './modules/createListItem';

const refresh = document.getElementById('refresh');
const username = document.getElementById('name');
const score = document.getElementById('score');
const addScore = document.getElementById('addScore');
const listItem = document.getElementsByClassName('item');
const errormsg = document.getElementById('error-message');

refresh.addEventListener('click', () => {
  if (!listItem.length) {
    scoreList();
  }
});

addScore.addEventListener('click', () => {
  const newItemIndex = listItem.length;
  if(username.value && score.value && score.value <= 9999999){
    addScoreToApi(username.value, score.value);
    createListItem(username.value, score.value, newItemIndex);
    username.value = null;
    score.value = null;
  } else {
    errormsg.innerHTML = `Check if you have met all these requirements:
    <li>You should fill the name field</li>
    <li>You should fill the score field</li>
    <li>Your score cannot be higher than 9999999</li>
    `;
  }
});