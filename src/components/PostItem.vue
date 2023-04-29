<template>
  <div class="border-black border-2 mb-2 w-full px-6 py-6 m-5">
    <div class="flex flex-row">
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
    </div>
  </div>
</template>

<script>
export default {
    props:{
        post: {
            type: Object,
            required:true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>