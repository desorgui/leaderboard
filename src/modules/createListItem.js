const listContainer = document.querySelector('#scoreList');
const createListItem = (user, score, index) => {
  const listItem = document.createElement('li');
  listItem.className = 'item';
  listItem.id = `item${index}`;
  if (index === 0) {
    listItem.innerHTML += `<span>${user}</span><span> ${score}</span> <i class="fa-solid fa-crown award"></i>`;
  } else if (index === 1 || index === 2) {
    listItem.innerHTML += `<span>${user}</span><span> ${score}</span> <i class="fa-solid fa-medal award"></i>`;
  } else {
    listItem.innerHTML += `<span>${user}</span><span> ${score}</span> <i class="fa-solid fa-star award"></i>`;
  }
  listContainer.appendChild(listItem);
};

export default createListItem;