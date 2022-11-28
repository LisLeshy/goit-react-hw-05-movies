import { useEffect, useState } from "react"
import { getTrendingFilms } from "servises/api"
import { MoviesList } from "components/moviesList/MoviesList"
import { Main, H1 } from "./Home.styled";

 const Home = () => {
 const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingFilms().then(setMovies)
    }, []);

    return(
        <Main>
            <H1>Trending today</H1>
        <MoviesList movies={movies}/>
        </Main>
    )
};
export default Home