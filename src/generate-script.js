const BookRepository = require('./book.repository');
const db = require('./db')

const repository = new BookRepository(db);

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

Array(10000).fill().forEach((_, i) => {
    repository.save({
        id : i,
        name: Math.random().toString(36).substring(7),
        price: Math.round(Math.random() * 1000) / 100,
        added_at: randomDate(new Date('2016-01-01'), new Date('2019-01-01')),
    });
});