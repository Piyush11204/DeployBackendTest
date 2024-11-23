import { useEffect, useState } from 'react';
import { Loader2, RefreshCw, ThumbsUp, Share2, MessageCircle } from "lucide-react";

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likes, setLikes] = useState({});

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/jokes");
      const data = await response.json();
      setJokes(data);
      setError(null);
    } catch (err) {
      setError("Failed to load jokes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleLike = (jokeId) => {
    setLikes(prev => ({
      ...prev,
      [jokeId]: (prev[jokeId] || 0) + 1
    }));
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Life's Little Laughs
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            A collection of {jokes.length} jokes to brighten your day
          </p>
          <button
            onClick={fetchJokes}
            className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Jokes
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
          </div>
        ) : (
          <div className="grid gap-6">
            {jokes.map((joke) => (
              <div 
                key={joke.id} 
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    Joke #{joke.id}
                  </span>
                  <button
                    onClick={() => handleLike(joke.id)}
                    className="inline-flex items-center space-x-1 text-purple-600 hover:text-purple-800"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>{likes[joke.id] || 0}</span>
                  </button>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {joke.joke}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex space-x-4">
                    <button className="inline-flex items-center text-gray-500 hover:text-purple-600 transition-colors">
                      <MessageCircle className="h-5 w-5 mr-1" />
                      <span className="text-sm">Comment</span>
                    </button>
                    <button className="inline-flex items-center text-gray-500 hover:text-purple-600 transition-colors">
                      <Share2 className="h-5 w-5 mr-1" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                  <span className="text-sm text-gray-400">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;