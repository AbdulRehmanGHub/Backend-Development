const booksData = [
  {
    title: "The Great Gatsby",
    description:
      "A classic novel by F. Scott Fitzgerald, exploring themes of wealth, love, and the American Dream.",
    image: "https://example.com/great-gatsby.jpg",
    author: "F. Scott Fitzgerald",
    language: "English",
    price: 499,
  },
  {
    title: "To Kill a Mockingbird",
    description:
      "A powerful novel that tackles racial injustice in the Deep South.",
    image: "https://example.com/to-kill-a-mockingbird.jpg",
    author: "Harper Lee",
    language: "English",
    price: 499,
  },
  {
    title: "1984",
    description:
      "A dystopian novel about a totalitarian regime and constant surveillance.",
    image: "https://example.com/1984.jpg",
    author: "George Orwell",
    language: "English",
    price: 499,
  },
  {
    title: "Moby-Dick",
    description: "An epic tale of obsession and revenge on the high seas.",
    image: "https://example.com/moby-dick.jpg",
    author: "Herman Melville",
    language: "English",
    price: 499,
  },
  {
    title: "Pride and Prejudice",
    description:
      "A romantic novel about love, social status, and misunderstandings.",
    image: "https://example.com/pride-and-prejudice.jpg",
    author: "Jane Austen",
    language: "English",
    price: 499,
  },
  {
    title: "The Catcher in the Rye",
    description:
      "A coming-of-age story following the struggles of Holden Caulfield.",
    image: "https://example.com/catcher-in-the-rye.jpg",
    author: "J.D. Salinger",
    language: "English",
    price: 499,
  },
  {
    title: "The Hobbit",
    description:
      "A fantasy adventure about Bilbo Baggins and his journey to reclaim a lost treasure.",
    image: "https://example.com/the-hobbit.jpg",
    author: "J.R.R. Tolkien",
    language: "English",
    price: 499,
  },
  {
    title: "War and Peace",
    description:
      "A historical novel covering the Napoleonic Wars and Russian society.",
    image: "https://example.com/war-and-peace.jpg",
    author: "Leo Tolstoy",
    language: "Russian",
    price: 499,
  },
  {
    title: "Crime and Punishment",
    description:
      "A psychological thriller about guilt, redemption, and morality.",
    image: "https://example.com/crime-and-punishment.jpg",
    author: "Fyodor Dostoevsky",
    language: "Russian",
    price: 499,
  },
  {
    title: "The Alchemist",
    description: "A philosophical novel about following one's dreams.",
    image: "https://example.com/the-alchemist.jpg",
    author: "Paulo Coelho",
    language: "Portuguese",
    price: 499,
  },
  {
    title: "The Little Prince",
    description: "A timeless story about childhood, imagination, and love.",
    image: "https://example.com/the-little-prince.jpg",
    author: "Antoine de Saint-Exupéry",
    language: "French",
    price: 499,
  },
  {
    title: "Brave New World",
    description:
      "A dystopian novel exploring a futuristic society and its implications.",
    image: "https://example.com/brave-new-world.jpg",
    author: "Aldous Huxley",
    language: "English",
    price: 499,
  },
  {
    title: "Don Quixote",
    description: "A comedic tale of a delusional knight on a grand adventure.",
    image: "https://example.com/don-quixote.jpg",
    author: "Miguel de Cervantes",
    language: "Spanish",
    price: 499,
  },
  {
    title: "Frankenstein",
    description:
      "A gothic horror novel about science, creation, and responsibility.",
    image: "https://example.com/frankenstein.jpg",
    author: "Mary Shelley",
    language: "English",
    price: 499,
  },
  {
    title: "Les Misérables",
    description:
      "A story of struggle, redemption, and revolution in 19th-century France.",
    image: "https://example.com/les-miserables.jpg",
    author: "Victor Hugo",
    language: "French",
    price: 499,
  },
  {
    title: "The Divine Comedy",
    description:
      "An epic poem depicting Dante’s journey through Hell, Purgatory, and Paradise.",
    image: "https://example.com/divine-comedy.jpg",
    author: "Dante Alighieri",
    language: "Italian",
    price: 499,
  },
  {
    title: "Anna Karenina",
    description: "A tragic romance novel set in Imperial Russia.",
    image: "https://example.com/anna-karenina.jpg",
    author: "Leo Tolstoy",
    language: "Russian",
    price: 499,
  },
  {
    title: "Wuthering Heights",
    description:
      "A passionate tale of love and revenge on the Yorkshire moors.",
    image: "https://example.com/wuthering-heights.jpg",
    author: "Emily Brontë",
    language: "English",
    price: 499,
  },
  {
    title: "Dracula",
    description:
      "A gothic horror novel that introduced the legend of Count Dracula.",
    image: "https://example.com/dracula.jpg",
    author: "Bram Stoker",
    language: "English",
    price: 499,
  },
  {
    title: "The Brothers Karamazov",
    description: "A philosophical novel about family, faith, and free will.",
    image: "https://example.com/brothers-karamazov.jpg",
    author: "Fyodor Dostoevsky",
    language: "Russian",
    price: 499,
  },
  {
    title: "Ulysses",
    description:
      "A complex novel following a day in the life of Leopold Bloom.",
    image: "https://example.com/ulysses.jpg",
    author: "James Joyce",
    language: "English",
    price: 499,
  },
  {
    title: "The Picture of Dorian Gray",
    description:
      "A novel about vanity, morality, and the consequences of one's actions.",
    image: "https://example.com/dorian-gray.jpg",
    author: "Oscar Wilde",
    language: "English",
    price: 499,
  },
  {
    title: "One Hundred Years of Solitude",
    description:
      "A magical realist novel about the Buendía family over several generations.",
    image: "https://example.com/one-hundred-years.jpg",
    author: "Gabriel García Márquez",
    language: "Spanish",
    price: 499,
  },
  {
    title: "Fahrenheit 451",
    description: "A dystopian novel about censorship and the power of books.",
    image: "https://example.com/fahrenheit-451.jpg",
    author: "Ray Bradbury",
    language: "English",
    price: 499,
  },
  {
    title: "The Odyssey",
    description: "An epic poem recounting the adventures of Odysseus.",
    image: "https://example.com/odyssey.jpg",
    author: "Homer",
    language: "Greek",
    price: 499,
  },
  {
    title: "The Stranger",
    description: "A philosophical novel about existentialism and absurdity.",
    image: "https://example.com/the-stranger.jpg",
    author: "Albert Camus",
    language: "French",
    price: 499,
  },
  {
    title: "Jane Eyre",
    description:
      "A novel about love, independence, and social norms in Victorian England.",
    image: "https://example.com/jane-eyre.jpg",
    author: "Charlotte Brontë",
    language: "English",
    price: 499,
  },
];

module.exports = { data: booksData };
