const book = {
    name: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher:{
        name: 'penguin'
    }
}

const {name, author} = book;
const {name:publishername = 'Self-Published'} = book.publisher;

console.log(`The book name is ${name}
            Author is ${author}
            Publisher is ${publishername}`);