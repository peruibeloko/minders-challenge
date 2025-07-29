<template>
  <h2>Houses</h2>
  <article>
    <p>
      These are the four Great Houses! To learn more about each one, click on
      its name!
    </p>
  </article>
  <section>
    <Suspense>
      <HouseList />
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </section>
</template>

<script setup lang="ts">
import HouseList from './HouseList.vue';
</script>

<style scoped></style>
