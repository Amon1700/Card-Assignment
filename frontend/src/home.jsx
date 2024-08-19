import React, { useEffect, useState } from "react";
import Card from "./card";

const HomePage = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch("http://localhost:4000/card");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (response.ok && !data.length) {
          throw new Error("Add few card first");
        }

        setCards(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCardData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (searchQuery) {
      // Redirect to Google with the search query
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`,
        "_blank"
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-xl">My App</h1>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Abstract
            </a>
            <a href="#" className="hover:underline">
              Help Center
            </a>
            <a href="#" className="hover:underline">
              Submit a Request
            </a>
          </div>
        </div>
      </nav>

      <div className="h-[20vh] flex items-center justify-center bg-gray-200 mt-16">
        <div className="w-full max-w-md text-center">
          <h2 className="text-lg font-bold">How can I help you?</h2>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
              className="w-full p-3 rounded-md border border-gray-300"
            />
          </form>
        </div>
      </div>

      <div className="flex-grow container mx-auto p-4">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cards.map((card) => (
              <Card
                key={card._id}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        )}
      </div>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-bold">Abstract</h3>
              <p>This is a brief abstract about the application or website.</p>
            </div>
            <div>
              <h3 className="font-bold">Resources</h3>
              <ul>
                <li>
                  <a href="#" className="text-blue-400 hover:underline">
                    Resource 1
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:underline">
                    Resource 2
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:underline">
                    Resource 3
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Community</h3>
              <ul>
                <li>
                  <a href="#" className="text-blue-400 hover:underline">
                    Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:underline">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:underline">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Company</h3>
              <ul>
                <li>
                  <a href="#" className="text-blue-400 hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
