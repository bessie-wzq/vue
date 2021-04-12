<template>
  <div>
    <transition name="fade-transform" mode="out-in">
        <!-- <keep-alive :include="cachedViews"> -->
        <keep-alive>
          <router-view  :key="$route.path"></router-view>
        </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>