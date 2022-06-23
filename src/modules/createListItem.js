const listContainer = document.querySelector('#scoreList');
const createListItem = (user, score) => {
  const listItem = document.createElement('li');
  listItem.className = 'item';
  listItem.innerHTML += `<span>${user} :</span><span> ${score}</span>`;
  listContainer.appendChild(listItem);
};

export default createListItem;