<template>
  <div class="w-[85%] px-10 pb-10 m-5 h-full ">
    <div class="border-4 rounded-2xl p-10 border-green-100 border-opacity-80">
      <div class="text-4xl font-bold pb-3">{{ post.title }}</div>
      <div class="pb-10 text-gray-500 text-xl">Author: {{post.id}}</div>
      <div class="pb-10 text-xl">{{ post.body }}</div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            post: {}
        }
    },
    async mounted() {
        const newPostId = this.$route.params.id
        const response_data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${newPostId}`)
        this.post = response_data.data
    }
}
</script>

<style lang="scss" scoped>

</style>