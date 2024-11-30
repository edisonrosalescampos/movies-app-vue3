<template>
    <div class="search-box">
        <input v-model="search" class="form-control" type="text" placeholder="Search a movie" @keyup="setSearch(search)">
        <span class="search-addon" @click="setSearch(search)">
            <i class="fas fa-search"></i>
        </span>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useMoviesStore } from '../store/movies';

export default {
    name: "SearchBox",
    data: () => ({
        search: ""
    }),
    methods: {
        ...mapActions(useMoviesStore, ["setSearch"])
    }
}
</script>