<template>
    <div>
      <div id="container">
        <div>
          <h1>AUTHENTICATION</h1>
          <h3 v-if="user">{{ 'Welcome, ' + user + '!' }}</h3>
          <div class="center-container">
            <button v-if="user" @click="logout" class="my-button">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const user = ref(null);
  const router = useRouter();
  
  if (typeof localStorage !== 'undefined') {
    user.value = JSON.parse(localStorage.getItem('user'));
  }
  
  const logout = () => {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('user');
      localStorage.removeItem('isAuthenticated');
    }
    router.push({ path: '/login' });
  };
  definePageMeta({
    middleware: ["auth"]
    // or middleware: 'auth'
  })
  </script>
  
  <style scoped>
  h1,
  h3 {
    color: #fff;
  }</style>
  