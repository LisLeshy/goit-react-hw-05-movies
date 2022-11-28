import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "servises/api";
import {  Li } from "components/cast/Cast.styled";


  const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      <h2>Reviews</h2>
      {reviews.length ? <ul>
        {reviews.map((review) => (
          <Li key={review.id}>
            <h4>Autor: {review.author}</h4>
            <p>{review.content}</p>
          </Li>
        ))}
      </ul> : <p>We don't have any reviews for this movie.</p>}
    </>
  );
};
export default Reviews
