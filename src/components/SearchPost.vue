<template>
  <div class="flex flex-col pl-10">
    <div class="px-10 flex ">
      <img class="w-10 opacity-40" src="@/assets/search_logo.svg" alt="">
      <input v-model="search" @input="getPost" class="focus:outline-none focus:border-0 w-full" type="text" placeholder="Поиск">
    </div>
    <hr class="text-center">
  </div>
</template>

<script>
export default {
    props: {
        posts:{
            type:Array,
            required: true
        }
    },
    data() {
        return {
            search: ''
        }
    },
    methods: {
        getPost() {
            const text_value = this.search
            const result = this.posts.filter(post =>
                post.title.includes(text_value)) //перебор массива и поиск совпадений
            this.$emit ('enterPosts', result)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>