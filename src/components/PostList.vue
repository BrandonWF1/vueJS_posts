<template>
  <div class="w-2/3">
    <div class="px-10">
      <div>
        <post-item v-for="post in posts" :post="post"  @deletePost="deletePost(post_index)"/>
      </div>
    </div>

  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import MyButton from "@/components/UI/MyButton.vue";
export default {
    components: {
        PostItem, MyButton
    },
    props:{
        posts: {
            type: Array,
            required: true
        }
    },
    methods: {
        deletePost(post_index){
            this.posts.splice(post_index,1)
        }
    }


}
</script>

<style lang="scss" scoped>

</style>