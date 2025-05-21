// const questions = [
//   {
//     question: 'What does HTML stand for?',
//     options: [
//       'Hyper Text Markup Language',
//       'Home Tool Markup Language',
//       'Hyperlinks and Text Markup Language',
//       'High-Level Text Modeling Language',
//     ],
//     answer: 'Hyper Text Markup Language',
//   },
//   {
//     question: 'Which language is used for styling web pages?',
//     options: ['HTML', 'JQuery', 'CSS', 'XML'],
//     answer: 'CSS',
//   },
//   {
//     question: 'Inside which HTML element do we put the JavaScript?',
//     options: ['<js>', '<script>', '<scripting>', '<javascript>'],
//     answer: '<script>',
//   },
// ];

// export default questions;





const questions = [
  {
    id: 1,
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
    answer: 'O(log n)',
  },
  {
    id: 2,
    question: 'Which data structure uses FIFO principle?',
    options: ['Stack', 'Queue', 'Tree', 'Graph'],
    answer: 'Queue',
  },
  {
    id: 3,
    question: 'What does "this" keyword refer to in JavaScript?',
    options: ['Global object', 'Current function', 'Current object', 'Undefined'],
    answer: 'Current object',
  },
  {
    id: 4,
    question: 'How do you create a new array from an existing array in JavaScript?',
    options: ['slice()', 'push()', 'pop()', 'shift()'],
    answer: 'slice()',
  },
  {
    id: 5,
    question: 'Which sorting algorithm is best for nearly sorted data?',
    options: ['Bubble Sort', 'Insertion Sort', 'Selection Sort', 'Merge Sort'],
    answer: 'Insertion Sort',
  },
  {
    id: 6,
    question: 'What is the output of `typeof null` in JavaScript?',
    options: ['object', 'null', 'undefined', 'boolean'],
    answer: 'object',
  },
  {
    id: 7,
    question: 'What is a closure in JavaScript?',
    options: [
      'A function bundled with its lexical scope',
      'A block of code',
      'An object',
      'A type of loop',
    ],
    answer: 'A function bundled with its lexical scope',
  },
  {
    id: 8,
    question: 'Which data structure uses LIFO principle?',
    options: ['Queue', 'Stack', 'Linked List', 'Graph'],
    answer: 'Stack',
  },
  {
    id: 9,
    question: 'What is the output of 2 + "2" in JavaScript?',
    options: ['4', '"22"', 'NaN', 'Error'],
    answer: '"22"',
  },
  {
    id: 10,
    question: 'Which of the following is NOT a primitive data type in JavaScript?',
    options: ['String', 'Boolean', 'Object', 'Number'],
    answer: 'Object',
  },
  {
    id: 11,
    question: 'Which method is used to add an element to the end of an array?',
    options: ['pop()', 'push()', 'shift()', 'unshift()'],
    answer: 'push()',
  },
  {
    id: 12,
    question: 'What will `console.log(0 == "0")` output?',
    options: ['true', 'false', 'undefined', 'Error'],
    answer: 'true',
  },
  {
    id: 13,
    question: 'What is the worst-case time complexity of quicksort?',
    options: ['O(n log n)', 'O(n^2)', 'O(n)', 'O(log n)'],
    answer: 'O(n^2)',
  },
  {
    id: 14,
    question: 'Which HTML tag is used to link external JavaScript files?',
    options: ['<script>', '<js>', '<link>', '<javascript>'],
    answer: '<script>',
  },
  {
    id: 15,
    question: 'What does CSS stand for?',
    options: [
      'Computer Style Sheets',
      'Creative Style Sheets',
      'Cascading Style Sheets',
      'Colorful Style Sheets',
    ],
    answer: 'Cascading Style Sheets',
  },
  {
    id: 16,
    question: 'Which company developed the JavaScript programming language?',
    options: ['Netscape', 'Microsoft', 'Sun Microsystems', 'Google'],
    answer: 'Netscape',
  },
  {
    id: 17,
    question: 'What is the use of the `map()` method in JavaScript arrays?',
    options: [
      'Create a new array by transforming each element',
      'Filter elements',
      'Sort elements',
      'Reduce array to single value',
    ],
    answer: 'Create a new array by transforming each element',
  },
  {
    id: 18,
    question: 'What is the difference between `==` and `===` in JavaScript?',
    options: [
      'No difference',
      '`==` compares value and type, `===` compares value only',
      '`==` compares value only, `===` compares value and type',
      'Both are strict equality operators',
    ],
    answer: '`==` compares value only, `===` compares value and type',
  },
  {
    id: 19,
    question: 'What is the output of `typeof NaN`?',
    options: ['number', 'NaN', 'undefined', 'object'],
    answer: 'number',
  },
  {
    id: 20,
    question: 'What does the `reduce()` method do in JavaScript?',
    options: [
      'Filters array elements',
      'Executes a reducer function on each array element, resulting in a single output',
      'Adds an element to the array',
      'Creates a new array',
    ],
    answer: 'Executes a reducer function on each array element, resulting in a single output',
  },
];

export default questions;
