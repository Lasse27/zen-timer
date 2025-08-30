<template>
  <nav>
    <div class="h-box">
      <img alt="ZenTimer Logo" src="../assets/logo.png" height="40"/>
      <span>ZenTimer</span>
      <div class="separator">|</div>
      <router-link to="/">Focus</router-link>
    </div>
  </nav>
</template>

<style scoped>

.h-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-color);
  gap: 2rem;
  padding: 0.25rem;
  box-sizing: border-box;
}

.h-box span {
  font-size: x-large;
  font-weight: bold;
}

.h-box a {
  text-decoration: none;
  color: var(--link-color);
  font-size: x-large;
}
</style>