import axios from "axios";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
    state() {
        return {
            movies: []
        }   
    },
    actions: {
        async fetchMovies() {
            try {
                const res = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-EU', {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmVlODNmOGMzZWM5NWJmODQ2MTFhOGJiYjJkN2IzMiIsIm5iZiI6MTczMjM4MTUxMC4yNzk3ODc4LCJzdWIiOiI2NzQyMDdmNmFjMjdmNTE2ZDlmMzRmYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6coTN4X5lb-UlvTmfZDRdVnGYkHB_M7G_FcdAcuBsfs'
                    }
                });    

                const { results = [] } = res.data;
     
                this.movies = results;
            } catch (err) {
                console.log(err.message);
            }
        }
    }
});