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
        <div className="app-container">
            {artist ? (
                <div className="artist-info">
                    <h1>Informações do artista</h1>
                    <p>
                        <b>Nome:</b> {artist.name}
                    </p>
                    <p>
                        <b>Tipo de artista:</b> {artist.type}
                    </p>
                    <p>
                        <b>Email:</b> {artist.email}
                    </p>
                    <p>
                        <b>Document:</b> {artist.document}
                    </p>
                    <p>
                        <b>Tipo de documento:</b> {artist.document_type}
                    </p>
                    <button
                        onClick={() => navigate("/")}
                        className="cancel-button"
                    >
                        Voltar
                    </button>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};
