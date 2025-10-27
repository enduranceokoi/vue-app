<template>
  <nav class="navbar">
    <div class="container">
      <h1 class="logo">🎟 TicketApp</h1>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/tickets">Tickets</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: #0f172a;
  color: white;
  padding: 12px 24px;
}
.logo {
  font-weight: 700;
}
.links {
  display: flex;
  gap: 16px;
  margin-top: 8px;
}
a {
  color: white;
  text-decoration: none;
}
a.router-link-exact-active {
  text-decoration: underline;
}
</style>
