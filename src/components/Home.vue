<template>
  <h2>Home</h2>
  <article>
    <p>
      Welcome to Wizards! A demo application to showcase Amplitude's
      capabilities
    </p>
    <p>To learn more about each topic, click on the links below:</p>
  </article>
  <section>
    <RouterLink :to="{ name: 'houses' }">Houses</RouterLink>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
