<template>
  <HouseDetail v-for="h in houses" :house="h" />
</template>

<script setup lang="ts">
import type { HouseListing } from '@shared/houses';
import HouseDetail from './HouseDetail.vue';

const houses: HouseListing[] = await fetch(
  'http://localhost:8080/api/houses'
).then(r => r.json());
</script>

<style scoped></style>
