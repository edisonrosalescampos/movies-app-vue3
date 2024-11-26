<template>
    <div class="card movie-card">
        <div class="card-img-top-container">
            <img :src="getImage(image)" class="card-img-top" :alt="title">
        </div>        
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "MovieItem",
    props: {
        title: String,
        image: String,
        description: String,     
    },
    methods: {
        getImage(filename) {
            return filename ? `https://image.tmdb.org/t/p/original${filename}` : "";
        }
    },
}
</script>