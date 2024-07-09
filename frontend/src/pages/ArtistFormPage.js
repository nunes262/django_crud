import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const ArtistFormPage = () => {
    const { id } = useParams();
    const [artist, setArtist] = useState({
        name: "",
        type: "Solo",
        email: "",
        document: "",
        document_type: "CPF",
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchArtist();
        }
    }, [id]);

    const fetchArtist = () => {
        axios
            .get(`http://127.0.0.1:8000/api/artists/${id}/`)
            .then((response) => {
                setArtist(response.data);
            })
            .catch((error) => console.error(error));
    };

    const handleInputChange = (e) => {
        setArtist({ ...artist, [e.target.name]: e.target.value });
    };

    const handleSaveArtist = () => {
        if (id) {
            axios
                .put(`http://127.0.0.1:8000/api/artists/${id}/`, artist)
                .then((response) => {
                    navigate("/");
                })
                .catch((error) => console.error(error));
        } else {
            axios
                .post("http://127.0.0.1:8000/api/artists/", artist)
                .then((response) => {
                    navigate("/");
                })
                .catch((error) => console.error(error));
        }
    };

    return (
        <div className="form-container">
            <div className="form-inputs">
                <h1>{id ? "Edição de Artista" : "Adição de Artista"}</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={artist.name}
                    onChange={handleInputChange}
                />
                <select
                    name="type"
                    value={artist.type}
                    onChange={handleInputChange}
                >
                    <option value="Solo">Solo</option>
                    <option value="Banda">Banda</option>
                </select>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={artist.email}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="document"
                    placeholder="Document"
                    value={artist.document}
                    onChange={handleInputChange}
                />
                <select
                    name="document_type"
                    value={artist.document_type}
                    onChange={handleInputChange}
                >
                    <option value="CPF">CPF</option>
                    <option value="RG">RG</option>
                </select>
                <div className="form-buttons">
                    <button
                        onClick={() => navigate("/")}
                        className="cancel-button"
                    >
                        Cancelar
                    </button>
                    <button onClick={handleSaveArtist} className="add-button">
                        {id ? "Atualizar" : "Adicionar"}
                    </button>
                </div>
            </div>
        </div>
    );
};
