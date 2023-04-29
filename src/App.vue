<template>
  <div class="container mx-auto">
    <modal-popup @createPost="createPost" v-model:visible="popupVisible" v-if="popupVisible"/>

    <div v-if="loading">Идет загрузка данных...</div>

    <div>
      <div v-for="post of posts">
        {{post.title}}
      </div>
    </div>
  </div>
</template>

<script>
import ModalPopup from "@/components/ModalPopup.vue";
import axios from "axios";
export default {
    components: {
        ModalPopup,
    },
    data() {
        return {
            popupVisible: true,
            posts: [],
            loading: false
        }
    },
    methods: {
        createPost(post) {
            this.posts = [...this.posts, post]
        }
    },
    async mounted() {
        this.loading = true
        const response_data =  await axios({
            url: 'https://jsonplaceholder.typicode.com/posts?_limit=10',
            method: 'GET',
        })
        this.posts = response_data.data
        this.loading = false
    }
}
</script>

<style lang="scss" scoped>

</style>