import { useEffect, useState, Suspense } from "react"
import { getFilmsById } from "servises/api"
import { useParams, useNavigate, useLocation, Outlet } from "react-router-dom"
import { Link, FlexBox, Box, Button, IMG, BorderBox, List, Container  } from "./MovieDetails.styled"

const BASE_IMG_URL= 'https://image.tmdb.org/t/p/w500/'

  const MovieDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const releaseDate = movie?.release_date.split("").splice(0, 4).join("");
  const userScore = Math.round(movie?.vote_average * 10);
  const genres = movie?.genres.map((elem) => elem.name).join(" ");

  useEffect(() => {
    getFilmsById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }
     const handleGoBack = () => {
      navigate(location?.state?.from ?? '/');
    // navigate(location.state.from);
  };
// console.log(handleGoBack );
  return (
    <Container>
      <Button onClick={handleGoBack} type="button">
        Go back
      </Button>
      <BorderBox>
        <FlexBox>
          <IMG src={movie.poster_path ?
                            (BASE_IMG_URL + movie.poster_path):(
                 "https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"
              )} alt={movie.title} />
          <Box>
            <h2>
              {movie.title}({releaseDate})
            </h2>
            <p>User score: {userScore}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{genres}</p>
          </Box>
        </FlexBox>
      </BorderBox>
      <BorderBox>
        <p>Additional information</p>
        <List>
          <li>
                      <Link to="cast"
                          state={{ from: location.state.from }}
                      >
              Cast
            </Link>
          </li>
          <li>
                      <Link to="reviews"
                          state={{ from: location.state.from }}
                      >
              Reviews
            </Link>
          </li>
        </List>
      </BorderBox>
      <Suspense fallback={<p>Subpaje is loading...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default MovieDetails