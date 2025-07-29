<template>
  <details>
    <summary @click="handleToggle">
      <h3>
        {{ house.name }}
      </h3>
    </summary>
    <div class="content">
      <span class="loading" v-if="isOpen && cache === null">Loading...</span>
      <HouseTable
        v-if="isOpen"
        @update-cache="updateChache"
        :id="house.id"
        :cache
      />
    </div>
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

<style scoped>
details {
  width: 100%;
  border: 5px solid var(--color__secondary);
  border-radius: var(--size__1);
}

summary {
  padding: var(--size__2);
  font-family: var(--font__heading);
  font-size: var(--font-size__2);
  text-align: center;
  cursor: pointer;

  &::marker {
    content: '';
  }
}
</style>
