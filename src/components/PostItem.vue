<template>
  <div class="border-green-200 border-opacity-80 border-4 rounded-xl w-full px-6 py-6 m-5 shadow-sm hover:scale-105 hover:shadow-2xl duration-500">
    <div class="flex flex-row relative">
      <div class="flex flex-col w-2/3">
        <div class="text-2xl font-bold">
          {{ post.title }}
        </div>
        <div>
          {{ post.body }}
        </div>
      </div>
      <div class="text-2xl text-center text-gray-500 flex items-start justify-center w-1/4">
        Author:
        <br>
        {{ post.id }}
      </div>
      <div class="absolute -top-5 -right-5">
        <close-icon
            @click="deletePost(post_index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from "@/components/UI/CloseIcon.vue";
export default {
    components:{
        CloseIcon
    },
    props:{
        post: {
            type: Object,
            required:true
        }
    },
    methods: {
        deletePost() {
            this.$emit('deletePost', null)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>