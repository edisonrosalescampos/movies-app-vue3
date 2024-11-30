<template>
    <div class="text-center">
        <div class="btn-group">
            <button class="btn btn-primary" @click="setPrevPage(page)" :disabled="page == 1">&laquo; previous</button>
            <button class="btn btn-primary" @click="setNextPage(page)">next &raquo;</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useMoviesStore } from '../store/movies';

export default {
    name: "Pagination",
    computed: {
        ...mapState(useMoviesStore, ["page"])
    },
    methods: {
        ...mapActions(useMoviesStore, ["setPage"]),
        setPrevPage(pageNumber) {
            if (pageNumber == 1) {
                this.setPage(1);
            } else {
                this.setPage(pageNumber - 1);
            }            
        },
        setNextPage(pageNumber) {
            this.setPage(pageNumber + 1);
        }
    }
}
</script>