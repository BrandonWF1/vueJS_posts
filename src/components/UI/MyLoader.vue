<template>
  <div v-if="loading">
    <img src="@/assets/spinner.gif" alt="spinner">
    ИДЕТ ЗАГРУЗКА!!!!!!!!!!!!!!
  </div>
</template>

<script>
export default {
    data(){
        return{
            loading:false
        }
    }

}
</script>

<style lang="scss" scoped>

</style>