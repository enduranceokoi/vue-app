<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
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
import { useAuth } from '@/stores/useAuth'


const router = useRouter()
const auth = useAuth()

const email = ref('')
const password = ref('')
const error = ref('')

async function handleLogin() {
  const result = await auth.login({ email: email.value, password: password.value })
  if (result.ok) {
    router.push('/dashboard')
  } else {
    error.value = result.message
  }
}
</script>
