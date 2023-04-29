<template>
  <input
      class="border-2 border-black rounded-xl px-4  w-full text-xl"
      type="text"
      @input="handlerValue"
  >
</template>

<script>
export default {
    methods: {
        handlerValue(event) {
            this.$emit('update:value',event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>