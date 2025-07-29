<template>
  <details>
    <summary @click="handleToggle">{{ house.name }}</summary>
    <span v-if="isOpen && cache === null">Loading...</span>
    <HouseTable
      v-if="isOpen"
      @update-cache="updateChache"
      :id="house.id"
      :cache
    />
  </details>
</template>

<script setup lang="ts">
import type { HouseListing } from '@shared/houses';
import { ref } from 'vue';

import type { PrettyHouse } from './HouseTable.vue';
import HouseTable from './HouseTable.vue';

const { house } = defineProps<{ house: HouseListing }>();

const isOpen = ref(false);
const cache = ref<PrettyHouse | null>(null);

const handleToggle = () => (isOpen.value = !isOpen.value);
const updateChache = (data: PrettyHouse) => (cache.value = data);
</script>

<style scoped></style>
