import { lazy } from "react";
import { Routes, Route } from "react-router-dom";



const SharedLayout = lazy(() => import ("./SharedLayout/SharedLayout"));
const Home = lazy(() => import("../pages/home/Home"));
const Movies = lazy(() => import("../pages/movies/Movies"));
const MovieDetails = lazy(() => import("./movieDetails/MovieDetails"));
const Cast = lazy(() => import("./cast/Cast"));
const Reviews = lazy(() => import("./reviews/Reviews"));




// import { SharedLayout } from "./SharedLayout";
// import { Home } from "pages/Home";
// import { MovieDetails } from "pages/MovieDetails";
// import { Movies } from "pages/Movies";
// import { Cast } from "./Cast";
// import { Reviews } from "./Reviews";
// import { Navigation } from "./Navigation";


export const App = () => {
 return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
