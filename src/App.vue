<template>
  <div class="container mt-3 mb-5">
    <h2 class="title">
      Movies App
    </h2>

    <SearchBox />

    <br/>
    <br/>

    <template v-if="loading">
      <p class="text-white text-center">loading, wait a moment please...</p>
    </template>
    <template v-else>
      <template v-if="movies.length">
        <MovieList :movies="movies" />
      </template>
      <template v-else>      
        <p class="text-white text-center">No results found!</p>
      </template>
    </template>  
    
    <br/>

    <Pagination />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useMoviesStore } from './store/movies';
import SearchBox from './components/SearchBox.vue';
import MovieList from './components/MovieList.vue';
import Pagination from './components/Pagination.vue';

export default {
  components: {
    SearchBox,
    MovieList,
    Pagination
  },
  computed: {
    ...mapState(useMoviesStore, ["loading", "movies"])
  },
  methods: {
    ...mapActions(useMoviesStore, ["fetchMovies"])
  },
  mounted() {
    this.fetchMovies();
  }
}
</script>