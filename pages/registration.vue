<template>
  <div>
    <div id="container">
      <header>Register new account</header>
      <form @submit.prevent="registerUser">
        <fieldset>
          <br />
          <input v-model="username" type="text" name="name" id="name" placeholder="Username" required autofocus>
          <br /><br />
          <input v-model="email" type="email" name="email" id="email" placeholder="E-mail" required>
          <br /><br />
          <input v-model="mobile" type="mobile" name="mobile" id="mobile" placeholder="Mobile" required>
          <br /><br />
          <input v-model="password" type="password" name="password" id="password" placeholder="Password" required>
          <br /><br />
          <label for="submit"></label>
          <button class="my-button" type="submit" name="submit" id="submit">REGISTER</button><br>
          <p>Click to <NuxtLink href="/login">Login</NuxtLink></p>
        </fieldset>
      </form>
    </div>
  </div>
</template>
  
<script setup>
import axios from 'axios';
const router = useRouter();
const username = ref('');
const email = ref('');
const mobile = ref('');
const password = ref('');
const confirmPassword = ref('');

const registerUser = async () => {
  const data = {
    name: username.value,
    email: email.value,
    mobile: mobile.value,
    password: password.value,
  };

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/customer/register', data);
    console.log(response.data);


    router.push({ path: '/login' });
  } catch (error) {
    console.error(error);
  }
};
</script>
  
<style scoped>
/* Add your custom styles here */
</style>
  