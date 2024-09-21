import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const fetchBooks = async () => {
    try {
      const res = await axios.get(
        `https://openlibrary.org/search.json?q=${query || "javascript"}`
      );
      setBooks(res.data.docs.slice(0, 12)); // Limiting to 12 books for the display
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [query]);

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <Link to="/">Library Catalog</Link>
        </div>
        
      </header>

      {/* Search Area */}
      <div className="search-area">
        <input
          type="text"
          placeholder="Search for books by title and author"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Books Grid */}
      <div className="book-grid">
        {books.map((book, index) => (
          <Link to={`/book/${book.key}`} key={index}>
            <div className="book-card">
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
              <h5>{book.title}</h5>
              <p>Author: {book.author_name && book.author_name[0]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Books;
