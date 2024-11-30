import axios from "axios";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
    state() {
        return {
            loading: false,
            movies: [],
            page: 1,
            search: ""
        }   
    },
    actions: {
        async fetchMovies() {
            try {
                this.setLoading(true);

                const url = this.search 
                    ? `https://api.themoviedb.org/3/search/movie?language=en-EU&page=${this.page}&query=${this.search}`
                    : `https://api.themoviedb.org/3/trending/movie/day?language=en-EU&page=${this.page}`;
                    
                const res = await axios.get(url, {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmVlODNmOGMzZWM5NWJmODQ2MTFhOGJiYjJkN2IzMiIsIm5iZiI6MTczMjM4MTUxMC4yNzk3ODc4LCJzdWIiOiI2NzQyMDdmNmFjMjdmNTE2ZDlmMzRmYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6coTN4X5lb-UlvTmfZDRdVnGYkHB_M7G_FcdAcuBsfs'
                    }
                });    

                const { results = [] } = res.data;
     
                this.movies = results;
            } catch (err) {
                alert(err.message);
            }

            this.setLoading(false);
        },
        setPage(number) {
            this.page = number;
            this.fetchMovies();
        },
        setSearch(searchTerm) {
            this.page   = 1;
            this.search = searchTerm;
            this.fetchMovies();
        },
        setLoading(status) {
            this.loading = status;
        }
    }
});