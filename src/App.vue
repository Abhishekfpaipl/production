<template>
  <div class="">
    <TopNav></TopNav>
    <router-view />
    <BottomNav/>
  </div>
</template>
<script setup>
import TopNav from "./components/navbar/TopNav.vue";
import BottomNav from "./components/navbar/BottomNav.vue";
</script>
