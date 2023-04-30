<template>
  <div class="container mx-auto">
    <modal-popup @createPost="createPost" v-model:visible="popupVisible" v-if="popupVisible"/>
    <div v-if="loading">Идет загрузка данных...</div>

    <div class="flex mt-8">
      <post-list :posts="posts"/>

      <div class="flex flex-col items-center w-[35%] px-6 py-6">
        <div class="px-5 py-5 border-green-200 rounded-3xl border-2 hover:shadow-2xl duration-300">
          <div class="font-bold text-2xl text-center mb-5 border-red-50">
            Создайте свой пост! <br>
            Напишите о чем-нибудь!
          </div>
          <div>
            <my-button
                @click="popupVisible=true"
                class="w-full"
            >
              Добавить новый пост
            </my-button>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-16 mt-5 text-center">
      <my-button
          @click="loadMore">
        Загрузить еще...
      </my-button>
    </div>
  </div>
</template>

<script>
import ModalPopup from "@/components/ModalPopup.vue";
import axios from "axios";
import MyButton from "@/components/UI/MyButton.vue";
import PostList from "@/components/PostList.vue";

export default {
    components: {
        ModalPopup, MyButton, PostList
    },
    data() {
        return {
            popupVisible: false,
            posts: [],
            limit: 10,
            page: 1,
            loading: false
        }
    },
    methods: {
        createPost(post) {
            this.posts = [...this.posts, post]
        },
        async loadMore(){

            this.page++
            const response_data = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`)
            this.posts.push(...response_data.data)
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
        this.loading = false
    }
}
</script>

<style lang="scss" scoped>

</style>