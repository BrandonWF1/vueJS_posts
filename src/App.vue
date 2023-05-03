<template>
  <div class="container mx-auto my-5 bg-white rounded-2xl">
    <header-component/>
    <router-view></router-view>
    </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
    components:{
        HeaderComponent
    }

}
</script>

<style lang="scss">
body {
  background-color: rgba(234, 211, 239, 0.56);
}
</style>