<template>
    <div class="movies">        
        <MovieItem  
            v-for="(movie, index) in movies" 
            :key="movie.id"               
            :title="movie.title"
            :image="movie.poster_path"
            :description="movie.overview"
        />
    </div>
</template>

<script>
import MovieItem from './MovieItem.vue';

export default {
    name: "MovieList",
    components: {
        MovieItem
    },
    props: {
        movies: Array
    }
}
</script>