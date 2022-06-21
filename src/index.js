import './style.css';
import scoreData from './modules/scoreData';


const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
    window.location.reload();
})
const listContainer = document.querySelector('#scoreList');
scoreData.forEach((el, index) => {
  const listItem =  document.createElement('li');
    listItem.className = 'item';
    listItem.innerHTML += `<span>${el.name} :</span><span> ${el.score}</span>`
    listContainer.appendChild(listItem);

} )