import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [authorBooks, setAuthorBooks] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  const fetchBookDetails = async () => {
    try {
      setLoading(true); // Start loading
      const res = await axios.get(`https://openlibrary.org${id}.json`);
      setBookDetails(res.data);

      // Fetch other books by the same author
      if (res.data.authors && res.data.authors[0]) {
        const authorKey = res.data.authors[0].key;
        const authorBooksRes = await axios.get(
          `https://openlibrary.org/authors/${authorKey}/works.json`
        );
        setAuthorBooks(authorBooksRes.data.entries);
      }
    } catch (error) {
      console.error("Error fetching book details", error);
      setError("Failed to fetch book details.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  return (
    <div className="book-details-page">
      {loading ? (
        <p>Loading book details...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        bookDetails && (
          <div className="book-details">
            <h1>{bookDetails.title}</h1>
            <p>
              <strong>Author:</strong>{" "}
              {bookDetails.authors && bookDetails.authors[0].name}
            </p>
            <p>
              <strong>Published:</strong> {bookDetails.publish_date}
            </p>
            <p>
              <strong>Summary:</strong>{" "}
              {bookDetails.description
                ? bookDetails.description.value
                : "No summary available"}
            </p>

            <h2>Other Books by the Same Author</h2>
            <div className="author-books-grid">
              {authorBooks.length > 0 ? (
                authorBooks.map((book, index) => (
                  <div className="author-book-card" key={index}>
                    <h5>{book.title}</h5>
                  </div>
                ))
              ) : (
                <p>No other books by this author available.</p>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default BookDetails;
