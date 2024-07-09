import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

export const ViewArtistPage = () => {
    const { id } = useParams();
    const [artist, setArtist] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchArtist();
    }, []);

    const fetchArtist = () => {
        axios
            .get(`http://127.0.0.1:8000/api/artists/${id}/`)
            .then((response) => {
                setArtist(response.data);
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="view-container">
            {artist ? (
                <div>
                    <h1>{artist.name}</h1>
                    <p>Type: {artist.type}</p>
                    <p>Email: {artist.email}</p>
                    <p>Document: {artist.document}</p>
                    <p>Document Type: {artist.document_type}</p>
                    <button
                        onClick={() => navigate("/")}
                        className="back-button"
                    >
                        Back
                    </button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
