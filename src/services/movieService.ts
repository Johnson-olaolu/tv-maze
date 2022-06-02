import axios from "axios"

const getMovieSchedule = () => {
    return axios.get("https://api.tvmaze.com/schedule")
        .then(res => {
            return res.data
        })
        .catch(err => {
            Promise.reject(err)
        })
}

export const movieService = {
    getMovieSchedule
}