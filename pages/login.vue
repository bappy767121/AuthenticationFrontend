<!-- Registration.vue -->

<template>
  <div>
    <div id="container">
      <header>Login</header>
      <form @submit.prevent="registerUser">
        <fieldset>
          <br />
          <input v-model="email" type="email" name="email" id="email" placeholder="E-mail" required>
          <br /><br />
          <input v-model="password" type="password" name="password" id="password" placeholder="Password" required>
          <br /><br />
          <label for="submit"></label>
          <button class="my-button" type="submit" name="submit" id="submit">LOGIN</button><br>
          <p>Click to <NuxtLink href="/registration">Registration</NuxtLink></p>
        </fieldset>
      </form>
    </div>
  </div>
</template>
  
<script setup>
import axios from 'axios';
const router = useRouter();

const email = ref('');
const password = ref('');

const registerUser = async () => {
  const data = {
    email: email.value,
    password: password.value,
  };

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/customer/login', data);
    console.log(response.data);
    localStorage.setItem('user', JSON.stringify(response.data.customer_name));

    router.push({ path: '/' });
  } catch (error) {
    console.error(error);
  }
};
</script>
  
<style scoped>
/* Add your custom styles here */
</style>
  