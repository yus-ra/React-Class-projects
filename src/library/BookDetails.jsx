import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [authorBooks, setAuthorBooks] = useState([]);

  const fetchBookDetails = async () => {
    try {
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
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  return (
    <div>
      {bookDetails ? (
        <div>
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
          <div className="author-books">
            {authorBooks.map((book, index) => (
              <div key={index}>
                <h5>{book.title}</h5>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default BookDetails;
