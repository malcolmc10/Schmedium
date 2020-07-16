import api from './apiconfig'

export const getArticles = async () => {
    const response = await api.get(`movies/1/articles`)
    return response.data
}
export const getMovies = async (id) => {
    const response = await api.get(`/movies`)
    return response.data
  }

  export const createArticle = async (movie_id, articleData) => {
    const response = await api.post(`/movies/${movie_id}/articles`, {article:articleData})
    return response.data
  }
  
//   export const add = async (id, articleInfo) => {
//     const response = await api.post(`/articles/${id}/movies`, { movie: movieInfo })
//     return response.data
//   }