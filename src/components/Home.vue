<template>
  <h2>Welcome to Wizards!</h2>
  <article>
    <p>A demo application to showcase Amplitude's capabilities.</p>
    <p>To learn more about each topic, use the links below!</p>
  </article>
  <section>
    <RouterLink :to="{ name: 'houses' }">Houses</RouterLink>
    <RouterLink :to="{ name: 'houses' }">Houses</RouterLink>
    <RouterLink :to="{ name: 'houses' }">Houses</RouterLink>
    <RouterLink :to="{ name: 'houses' }">Houses</RouterLink>
    <RouterLink :to="{ name: 'houses' }">Houses</RouterLink>
    <RouterLink :to="{ name: 'houses' }">Houses</RouterLink>
    <RouterLink :to="{ name: 'houses' }">Houses</RouterLink>
    <RouterLink :to="{ name: 'houses' }">Houses</RouterLink>
    <RouterLink :to="{ name: 'houses' }">Houses</RouterLink>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
section {
  margin-top: var(--size__2);
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  gap: var(--size__1);
  align-items: center;
  justify-content: center;

  a {
    width: fit-content;
    text-decoration: none;
    color: var(--color__primary);
    font-size: var(--font-size__2);
    padding: var(--size__1);
    border: 3px solid var(--color__primary);
    border-radius: var(--size__1);
    transition-duration: 100ms;

    &:hover {
      background-color: var(--color__primary);
      color: var(--color__text);
    }
  }
}
</style>
