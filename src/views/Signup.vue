<template>
  <div class="container">
    <h2>Signup</h2>
    <form @submit.prevent="handleSignup">
      <input v-model="name" type="text" placeholder="Name" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Create Account</button>
    </form>
    <p v-if="message" style="color: green;">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/stores/useAuth' // ✅ match your filename

const router = useRouter()
const auth = useAuth()

const name = ref('')
const email = ref('')
const password = ref('')
const message = ref('')

function handleSignup() {
  const result = auth.signup({ email: email.value, password: password.value })
  if (result.ok) {
    message.value = 'Account created successfully!'
    setTimeout(() => router.push('/dashboard'), 1000)
  }
}
</script>
