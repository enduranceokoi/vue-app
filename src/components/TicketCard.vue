<template>
  <div class="ticket-card">
    <h3>{{ title }}</h3>
    <p>Status: <strong>{{ status }}</strong></p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  status: String
})
</script>

<style scoped>
.ticket-card {
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
