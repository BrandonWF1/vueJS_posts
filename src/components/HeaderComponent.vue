<template>
  <header class="w-full px-10 pt-5 flex">
    <img class="w-[10%]" src="@/assets/blog_logo.svg" alt="">
    <div class="w-[30%] flex justify-evenly items-center mx-auto text-2xl font-bold">
      <router-link to="/" class="cursor-pointer">Home</router-link>
      <router-link to="/posts" class="cursor-pointer">Posts</router-link>
      <router-link to="/videos" class="cursor-pointer">Videos</router-link>
      <router-link to="/about" class="cursor-pointer">About</router-link>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>