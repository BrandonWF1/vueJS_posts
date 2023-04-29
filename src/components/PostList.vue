<template>
  <div class="border-black border-2 mt-8 flex">

    <div class="w-[65%] px-10">

      <div v-for="post of posts">
        <post-item post=""/>
      </div>
    </div>
    <div class="flex flex-col items-center w-[35%] px-6 py-6 ">
      <div class="font-bold text-2xl text-center mb-5">
        Создайте свой пост! <br>
        Напишите о чем-нибудь!
      </div>
      <div>
        <my-button
            @click="popupVisible=true"
            class="w-full"
        >
          Добавить новый пост</my-button>
      </div>
    </div>

  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import MyButton from "@/components/UI/MyButton.vue";
export default {
    props:{
        post: {
            type: Object,
            required: true
        }
    },
    components: {
        PostItem, MyButton
    }
}
</script>

<style lang="scss" scoped>

</style>