import api from './api-helper'


export const Movies = async () => {
    const resp = await api.get('/movies');
    // debugger;
}