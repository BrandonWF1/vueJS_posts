<template>
  <div class="w-full h-full fixed top-0 left-0 bg-black bg-opacity-30">
    <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-2xl border-4 border-black rounded-xl shadow-2xl px-10 py-5">
      <close-icon
          class="absolute left-full -top-2"
          @click="this.$emit('update:visible', false)"
      />

      <div class="flex justify-between pb-8">
        <div class="flex flex-col justify-between">
          <div class="w-full mb-8">
            <my-input
                placeholder="Title"
                v-model:value="title"
            />
          </div>

          <div class="w-full">
            <my-input
                placeholder="Author"
                v-model:value="author"
            />
          </div>
        </div>
        <textarea class="border-2 border-black w-[45%]"
                  v-model="body"></textarea>
      </div>

        <my-button
            class="mx-auto block"
            @click="handlerForm"
        >Добавить пост</my-button>

    </div>
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import CloseIcon from "@/components/UI/CloseIcon.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
    components: {
        MyInput, CloseIcon, MyButton
    },
    data() {
        return {
            title:'',
            body: '',
            author: '',
        }
    },
    methods: {
        handlerForm() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
                author: this.author
            }
            this.$emit("createPost", newPost)
        },
    },

}
</script>

<style lang="scss" scoped>

</style>