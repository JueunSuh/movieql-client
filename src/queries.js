import gql from "graphql-tag";
//query to gql syntex
 
export const HOME_PAGE =gql`
  {
    movies(limit:50, rating:7) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;
export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
      movie(id: $movieId){
        medium_cover_image
        title
        rating
        description_intro
        language
        genre
      }
      suggestions(id: $movieId){
        id
        title
        rating
        medium_cover_image
      }
    }
  `;