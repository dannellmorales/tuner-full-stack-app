import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function SongNewForm() {
  let navigate = useNavigate();

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(() => {
        navigate(`/songs`);
      },
        (error) => console.error(error))
      .catch((c) => console.warn("catch", c));
  };

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };
  return (
      <div className="Edit">
          <form onSubmit={handleSubmit}>
              <label htmlFor="name">Song Name:</label>
              <input
                  id="name"
                  value={song.name}
                  type="text"
                  onChange={handleTextChange}
                  placeholder="Type Song Name"
                  required
              />
              <label htmlFor="artist">Artist</label>
              <input
                  id="artist"
                  type="text"
                  value={song.artist}
                  placeholder="artist"
                  onChange={handleTextChange}
                  required
              />
              <label htmlFor="album">Album:</label>
              <input
                  id="album"
                  type="text"
                  name="album"
                  value={song.category}
                  placeholder="Album"
                  onChange={handleTextChange}
              />
              <label htmlFor="time">Time:</label>
              <input
                  id="time"
                  type="text"
                  name="time"
                  value={song.category}
                  placeholder="Time"
                  onChange={handleTextChange}
              />
              <label htmlFor="is_favorite">Favorite:</label>
              <input
                  id="is_favorite"
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  checked={song.is_favorite}
              />
              <br />
              <input type="submit" />
          </form>
      </div>
  );
}


