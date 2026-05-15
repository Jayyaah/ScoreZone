function addCard() {
    const cardName = document.getElementById('name').value;
    const cardCategory = document.getElementById('category').value;
    const cardNote = document.getElementById('note').value;

    if (cardName === '' && cardNote === '') {
        alert('Veuillez remplir les champs "Nom de la carte" et "Note".');
        return;
    }

    const cardList = document.createElement('li');
        cardList.innerHTML = `
        <h3>${cardName}</h3>
        <p>${cardCategory}</p>
        <p>Note : ${cardNote}/10</p>
        <button type="button" onclick="this.parentElement.remove()">Supprimer</button>
    `;
    document.getElementById('list').appendChild(cardList);

    document.getElementById('name').value = '';
    document.getElementById('note').value = '';
}
