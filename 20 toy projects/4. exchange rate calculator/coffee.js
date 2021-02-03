// understand reduce method by removing duplication
const array = ['a', 'b', 'c', 'a', '1', '2', '3', '1']

array.reduce((unique, item) => {
    console.log('item: ', item, "unique: ", unique, "unique.includes(item): ", unique.includes(item), 'unique.includes(item) ? unique : [...unique, item]: ', unique.includes(item) ? unique : [...unique, item]);
    return unique.includes(item) ? unique : [...unique, item]
}, []);

console.log(array)