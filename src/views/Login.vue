<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p v-if="error" style="color:red;">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')

function login() {
  if (email.value === 'user@example.com' && password.value === '1234') {
    localStorage.setItem('ticketapp_session', 'true')
    router.push('/dashboard')
  } else {
    error.value = 'Invalid credentials'
  }
}
</script>
