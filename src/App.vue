<template>
  <header>
    <h1><RouterLink :to="{ name: 'home' }">Wizards!</RouterLink></h1>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  background-color: var(--color__text);
  padding: var(--size__1);
}

header > h1 > a {
  text-decoration: none;
  font-family: var(--font__heading);
  color: var(--color__background);
}

main {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  margin: 0 var(--size__2);
}
</style>
