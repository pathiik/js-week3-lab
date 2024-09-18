// Creating objects
library = [
  {
    title: "JavaScript",
    author: "Pathik Bhattarai",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Python",
    author: "Pathik",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "React",
    author: "Bhattarai",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Setting the read status of each object to true
library.forEach((article) => (article.status.read = true));

// Getting the title of the first object
const { title: firstBook } = library[0];
console.log(firstBook);
