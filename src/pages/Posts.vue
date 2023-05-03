<template>
  <div>
<!--    class="container mx-auto my-5 bg-white rounded-2xl"-->
    <modal-popup @createPost="createPost" v-model:visible="popupVisible" v-if="popupVisible"/>
<!--    <header-component/>-->
    <my-loader class="absolute top-[30%] left-[35%] w-[120px]" v-if="loading"/>

    <div class="flex mt-4">

      <div class="w-2/3">
        <search-post @enterPosts="findPosts" :posts="posts"/>


        <post-list :posts="filter_posts"/>
      </div>
      <div class="flex flex-col items-center w-[35%] px-6 py-6">
        <div class="px-5 py-5 border-green-200 rounded-3xl border-2 hover:shadow-2xl duration-300">
          <div class="font-bold text-2xl text-center mb-5 border-red-50">
            Create your own post! <br>
            Write about something!
          </div>
          <div>
            <my-button
                @click="popupVisible=true"
                class="w-full"
            >
              Create new post
            </my-button>
          </div>
        </div>
      </div>
    </div>
    <div class="py-12 px-10 text-center">
      <my-button
          @click="loadMore">
        Загрузить еще...
      </my-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ModalPopup from "@/components/ModalPopup.vue";
import MyButton from "@/components/UI/MyButton.vue";
import PostList from "@/components/PostList.vue";
import MyLoader from "@/components/UI/MyLoader.vue";
import SearchPost from "@/components/SearchPost.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
    components: {
        HeaderComponent,
        SearchPost,
        ModalPopup, MyButton, PostList, MyLoader
    },
    data() {
        return {
            popupVisible: false,
            posts: [],
            filter_posts: [],
            limit: 10,
            page: 1,
            loading: false
        }
    },
    methods: {
        createPost(post) {
            this.posts = [...this.posts, post]
            this.filter_posts = [...this.filter_posts, post]
            this.popupVisible = false
        },
        findPosts(data) {
            this.filter_posts = data
        },
        async loadMore() {
            this.loading = true
            this.page++
            const response_data = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`)
            this.posts.push(...response_data.data)
            this.filter_posts.push(...response_data.data)
            this.loading = false

        }
    },
    async mounted() {
        this.loading = true
        // const response_data = await axios({
        //     url: 'https://jsonplaceholder.typicode.com/posts?_limit=10',
        //     method: 'GET',
        // })
        const response_data = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`)
        this.posts = response_data.data
        this.filter_posts.push(...response_data.data)
        this.loading = false
    }
}
</script>

<style lang="scss" scoped>

</style>