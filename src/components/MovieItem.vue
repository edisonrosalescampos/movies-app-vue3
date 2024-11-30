<template>
    <div class="card movie-card">
        <div class="card-img-top-container">
            <img :src="imageURL" class="card-img-top" :alt="title">
        </div>        
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
        </div>
    </div>
</template>

<script>
import preloader from './../assets/preloader.gif'

export default {
    name: "MovieItem",
    props: {
        title: String,
        image: String,
        description: String,     
    },
    data: () => ({
        imageURL: ""
    }),
    methods: {
        getImageURL(filename) {
            return filename ? `https://image.tmdb.org/t/p/original${filename}` : preloader;
        }
    },  
    created() {
        this.imageURL = preloader;
    }, 
    mounted() {
        setTimeout(() => this.imageURL = this.getImageURL(this.image), 500);
    }
}
</script>