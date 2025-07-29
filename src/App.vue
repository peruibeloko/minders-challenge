<template>
  <header>
    <h1><RouterLink :to="{ name: 'home' }">Wizards!</RouterLink></h1>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
