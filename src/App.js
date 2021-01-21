import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  SciFic: [
    { name: "The Hitchhiker's Guide to the Galaxy", rating: "4.2/5" },
    { name: "The Hobbit, or There and Back Again", rating: "4.2/5" },
    { name: "	Harry Potter and the Sorcerer's Stone", rating: "4.4/5" },
    { name: "2001: A Space Odyssey", rating: "4.1/5" },
    { name: "The Shadow Keepers", rating: "4.3/5" }
  ],
  Horror_and_Disturbing: [
    { name: "American Psycho", rating: "3.8/5" },
    { name: "1984", rating: "4.1/5" },
    { name: "Lord of the Flies", rating: "3.7/5" },
    { name: "Holy Bible: King James Version", rating: "4.4/5" },
    { name: "IT", rating: "4.2/5" }
  ],
  Javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],

  Fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    },
    {
      name: "The Alchemist",
      rating: "3.9/5"
    }
  ],
  Personality_Developement: [
    {
      name: "The 7 Habits of Highly Effective People",
      rating: "4.1/5"
    },
    {
      name: "Think and Grow Rich",
      rating: "4.2/5"
    },
    {
      name: "The Monk Who Sold His Ferrari: The 7 Stages of Self-Awakening",
      rating: "3.9/5"
    }
  ],
  Business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    },
    {
      name: "The Lean Startup",
      rating: "4.1/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("SciFic");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> 📚 Good Reads </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Here's a list of Amazing Books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: "white"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
