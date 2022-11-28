import { useEffect, useState } from "react"
import { getFilmsByQuery } from "servises/api";
import { useSearchParams } from "react-router-dom";
import { MoviesList } from "components/moviesList/MoviesList";
import { Input, Container, Form, Button } from "./movies,styled";

 const Movies = () => {
   const [movie, setMovie] = useState([]);
    const [query, setQuery] = useState('');
    const [params, setParams] = useSearchParams();

    useEffect(() => {
        const movieName = params.get('query')
        if(!movieName) return;
        getFilmsByQuery(movieName).then(setMovie)
    }, [params]);

    const onInputChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setParams({query})
    }

    return(
        <Container>
        <Form onSubmit={onSubmit}>
            <Input onChange={onInputChange} type="text" />
            <Button type="submit">Search</Button>
        </Form>
        <MoviesList movies={movie}/>
        </Container>
    )
};
export default Movies