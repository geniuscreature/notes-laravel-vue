<template>
    <div id="main">
<!--        <navigationMenu></navigationMenu>-->

        <router-view></router-view>
    </div>
</template>

<script>
  import navigationMenu from './components/Menu.vue'
  export default {
    data() {
      return {
        //
      }
    },
    components: {
      navigationMenu
    }
  }
</script>
