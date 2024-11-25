<template>
  <Header />
  <div class="container-fluid my-3">
    <h1 class="title">Movies App</h1>
    <br/>
    <MovieList :movies="movies" />
  </div>
</template>

<script>
import MovieList from './components/MovieList.vue';
import Header from './components/Header.vue';

export default {
  components: {
    Header,
    MovieList,
  },
  data() {
    return {
      movies: []
    }    
  },
  async mounted() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmVlODNmOGMzZWM5NWJmODQ2MTFhOGJiYjJkN2IzMiIsIm5iZiI6MTczMjM4MTUxMC4yNzk3ODc4LCJzdWIiOiI2NzQyMDdmNmFjMjdmNTE2ZDlmMzRmYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6coTN4X5lb-UlvTmfZDRdVnGYkHB_M7G_FcdAcuBsfs'
      }
    };

    await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-EU', options)
      .then(res => res.json())
      .then(res => {
        // this.movies = res;
        const { results = [] } = res;

        console.log(results);

        this.movies = results;
      })
      .catch(err => console.error(err));
  }
}
</script>