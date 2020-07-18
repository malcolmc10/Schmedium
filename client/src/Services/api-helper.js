import api from './apiconfig'

// const baseUrl = process.env.NODE_ENV === 'production' ? `https://git.heroku.com/schmedium-api.git`
// : 'http://localhost:3000' 

// const api = axios.create({
//   baseURL: baseUrl
// })

export const getArticles = async () => {
  const response = await api.get(`movies/1/articles`)
  return response.data
}
export const getMovies = async (id) => {
  const response = await api.get(`/movies`)
  return response.data
}

export const createArticle = async (movie_id, articleData) => {
  const response = await api.post(`/movies/${movie_id}/articles`, { article: { article: articleData } })
  return response.data
}

//   export const add = async (id, articleInfo) => {
//     const response = await api.post(`/articles/${id}/movies`, { movie: movieInfo })
//     return response.data
//   }