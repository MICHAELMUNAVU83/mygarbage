import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ExtraShit({ movieData }) {
  const params = useParams();
  console.log(params);
  const [likeCount, setLikeCount] = useState("");
  const handleLike = () => {
    fetch(
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sRNeqEQkYHuUZM7BXv4b/likes/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item_id: params.movieId,
        }),
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      });
    fetch(
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sRNeqEQkYHuUZM7BXv4b/likes/"
    )
      .then((res) => res.json())
      .then((data) => {
        data.map((like) =>
          like.item_id === params.movieId ? setLikeCount(like.likes) : null
        );
      });
  };
  useEffect(() => {
    fetch(
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sRNeqEQkYHuUZM7BXv4b/likes/"
    )
      .then((res) => res.json())
      .then((data) => {
        data.map((like) =>
          like.item_id === params.movieId ? setLikeCount(like.likes) : null
        );
      });
  }, []);

  return (
    <div>
      {movieData.map(
        (movie) =>
          movie.id === Number(params.movieId) && (
            <div>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <button onClick={handleLike}>like</button>

              <p>{likeCount}</p>
            </div>
          )
      )}
    </div>
  );
}

export default ExtraShit;
