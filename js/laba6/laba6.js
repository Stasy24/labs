const filterBy = (arr, type) => {
    return arr.filter(item => typeof item !== type);
};

const data = [null, null, '23', 5, true];
const filteredData = filterBy(data, 'boolean');
console.log(filteredData); // Виведе: [23, null]
