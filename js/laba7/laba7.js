const displayArrayAsList = (array) => {
    const listContainer = document.getElementById('list');

    const listItems = array.map(item => `<li>${item}</li>`);
    listContainer.innerHTML = listItems.join('');
};


const array1 = ['chel', 'chel2', 'chel3', 'chel4', 'chel5', 'chel6'];

displayArrayAsList(array1);
