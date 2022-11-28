import {  useLocation } from "react-router-dom"
import PropTypes from "prop-types";
import {  Container, Ul, Li, ListLink, ImgList} from "./MoviesList.styled";
// import plug from "../images/plug.png"


const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
// const noPoster = "https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"

export const MoviesList = ({ movies }) => {
    console.log(movies)
    const location = useLocation();
    
    return (
    <Container>
      <Ul>
        {movies.map((movie) => (
          <Li key={movie.id}>
            <ListLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <ImgList
                        src={movie.poster_path ?
                            (BASE_IMG_URL + movie.poster_path):(
                 "https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"
              )}
                        
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
            </ListLink>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
    
