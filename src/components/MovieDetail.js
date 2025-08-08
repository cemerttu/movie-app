import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => String(m.id) === String(id));

  if (!movie) {
    return <p>Movie is not available</p>;
  }

  return (
    <div className="movie-detail">
      <button className="back-button" onClick={() => navigate("/")}>⬅ Back</button>

      <h1>{movie.title}</h1>
      <p>{movie.description}</p>

      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src={movie.trailerLink}
          title={movie.title}
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetail;
