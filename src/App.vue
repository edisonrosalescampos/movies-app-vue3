<template>
  <div class="container-fluid mt-3 mb-5">
    <h1 class="title">
      Movies App
    </h1>
    <br/>
    <MovieList :movies="movies" />
    <br/>
    <Pagination />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import MovieList from './components/MovieList.vue';
import Pagination from './components/Pagination.vue';
import { useMoviesStore } from './store/movies';

export default {
  components: {
    MovieList,
    Pagination
  },
  data() {
    return {}    
  },
  computed: {
    ...mapState(useMoviesStore, ["movies"])
  },
  methods: {
    ...mapActions(useMoviesStore, ["fetchMovies"])
  },
  mounted() {
    this.fetchMovies();
  }
}
</script>