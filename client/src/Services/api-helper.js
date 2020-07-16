import api from './apiconfig'

export const getArticles = async () => {
    const response = await api.get('/articles')
    return response.data
}
export const getMovies = async (id) => {
    const response = await api.get(`/movies/${id}/articles`)
    return response.data
  }
  
//   export const add = async (id, articleInfo) => {
//     const response = await api.post(`/articles/${id}/movies`, { movie: movieInfo })
//     return response.data
//   }