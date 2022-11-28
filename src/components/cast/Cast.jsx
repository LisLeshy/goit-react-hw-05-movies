import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG, Ul, Li } from "./Cast.styled";
import { getMovieCredits } from "servises/api";

 const Cast = () => {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      <h2>Cast</h2>
      <Ul>
        {cast.map((actor) => (
          <Li key={actor.id}>
            {actor.profile_path ? <IMG src={BASE_IMG_URL + actor.profile_path} alt={actor.name} /> : <p>No actor image</p>}
            <h4>{actor.name}</h4>
            <p>Character: {actor.character}</p>
          </Li>
        ))}
      </Ul>
    </>
  );
};
export default Cast