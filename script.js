function addCard() {
    const cardName = document.getElementById('name').value;
    const cardCategory = document.getElementById('category').value;
    const cardNote = document.getElementById('note').value;
    const cardList = document.createElement('li');
        cardList.innerHTML = `
        <h3>${cardName}</h3>
        <p>${cardCategory}</p>
        <p>${cardNote}</p>
    `;
    document.getElementById('list').appendChild(cardList);
}
