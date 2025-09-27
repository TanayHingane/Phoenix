// components/Bookshelf.tsx

import Image from "next/image";
import { BookHeart } from "lucide-react"; // Using a nice icon

// 1. DEFINE YOUR BOOK DATA STRUCTURE
interface Book {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  // link: string; // Optional link to Goodreads, Amazon, etc.
}

// 2. ADD YOUR READ BOOKS HERE
// Find image URLs from Goodreads or Amazon
const books: Book[] = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    imageUrl: "/books/atomic_habits.jpg",
    // link: "https://www.goodreads.com/book/show/40121378-atomic-habits",
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    imageUrl: "/books/psychology.webp",
    // link: "https://www.goodreads.com/book/show/41881472-the-psychology-of-money",
  },
  {
    id: 3,
    title: "Good Vibes, Good Life",
    author: "Vex King",
    imageUrl: "/books/good_vibes.jpg",
    // link: "https://www.goodreads.com/book/show/23692271-sapiens",
  },
  // {
  //   id: 4,
  //   title: "Don't Believe Everything You Think",
  //   author: "Joseph Nguyen",
  //   imageUrl: "/books/dont_believe.jpg",
  //   // link: "https://www.goodreads.com/book/show/54493401-project-hail-mary",
  // },
  {
    id: 5,
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    imageUrl: "/books/ikigai.jpg",
    // link: "https://www.goodreads.com/book/show/18290401-show-your-work",
  },
  {
    id: 6,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    imageUrl: "/books/rich_dad.png",
    // link: "https://www.goodreads.com/book/show/18290401-show-your-work",
  },
  // Add more books as you read them!
];

const Bookshelf = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-9 sm:py-24 md:-mt-28">
      <div className="mx-auto max-w-6xl px-7 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            <BookHeart className="mx-auto h-10 w-10 mb-2 text-blue-500" />
            My Bookshelf
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            A collection of books that shaped my thinking and perspective.
          </p>
        </div>

        {/* Responsive Grid of Books */}
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {books.map((book) => (
            <a
              key={book.id}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="aspect-[2/3] w-full overflow-hidden rounded-lg bg-gray-200 shadow-md">
                <Image
                  src={book.imageUrl}
                  alt={`Cover of ${book.title}`}
                  width={400}
                  height={600}
                  className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-md font-semibold text-gray-800 dark:text-gray-200 truncate">
                {book.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {book.author}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bookshelf;
