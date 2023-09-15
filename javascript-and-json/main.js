const bookArray = [
  {
    isbn: '9780593099322',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    isbn: '9780451450630',
    title: '2001 A Space Odyssey',
    author: 'Arthur C. Clarke',
  },
  {
    isbn: '9780517223628',
    title: 'Alice in Wonderland',
    author: 'Lewis Carroll',
  },
];
console.log('bookArray:', bookArray, 'typeOf bookArray:', typeof bookArray);

const jsonBook = JSON.stringify(bookArray);
console.log('JSON:', jsonBook, 'typeOf JSON:', typeof jsonBook);

const student = '{"id":4444,"name":"Daniel"}';
console.log('studentJSON:', student, 'typeofStudentJSON:', typeof student);

const obj = JSON.parse(student);
console.log('JSON obj:', obj, 'typeof JSON obj:', typeof obj);
