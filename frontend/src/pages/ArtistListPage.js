import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

export const ArtistListPage = () => {
    const [artists, setArtists] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchArtists();
    }, []);

    const fetchArtists = () => {
        axios
            .get("http://127.0.0.1:8000/api/artists/")
            .then((response) => {
                setArtists(response.data);
            })
            .catch((error) => console.error(error));
    };

    const handleDeleteArtist = (id) => {
        axios
            .delete(`http://127.0.0.1:8000/api/artists/${id}/`)
            .then((response) => {
                fetchArtists();
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="app-container">
            <h1>Gerenciamento de artistas</h1>
            <button onClick={() => navigate("/add")} className="add-button">
                Add New Artist
            </button>
            <ul className="artist-list">
                {artists.map((artist) => (
                    <li key={artist.id}>
                        <div>
                            <strong>
                                {artist.name} ({artist.type})
                            </strong>
                        </div>
                        <div className="actions">
                            <button
                                className="edit-button"
                                onClick={() => navigate(`/edit/${artist.id}`)}
                            >
                                Edit
                            </button>
                            <button
                                className="cancel-button"
                                onClick={() => handleDeleteArtist(artist.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
