<template>
  <table>
    <tr v-for="[k, v] in Object.entries(data)">
      <th>{{ k }}</th>
      <td>{{ v }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import type { House } from '@shared/houses';
import { ref } from 'vue';

export interface PrettyHouse {
  Name: string;
  'House colors': string;
  Founder: string;
  Animal: string;
  Element: string;
  Ghost: string;
  'Common room': string;
  Heads: string;
  Traits: string;
}

const props = defineProps<{ id: string; cache: PrettyHouse | null }>();
const emit = defineEmits<{
  updateCache: [data: PrettyHouse];
}>();

const data = ref<PrettyHouse>({} as PrettyHouse);

if (props.cache !== null) {
  data.value = props.cache;
} else {
  const house: House = await fetch(`/api/houses/${props.id}`).then(r =>
    r.json()
  );

  data.value = {
    Name: house.name!,
    'House colors': house.houseColours!,
    Founder: house.founder!,
    Animal: house.animal!,
    Element: house.element!,
    Ghost: house.ghost!,
    'Common room': house.commonRoom!,
    Heads: house.heads?.map(h => `${h.firstName} ${h.lastName}`).join(', ')!,
    Traits: house.traits?.map(t => t.name).join(', ')!
  };

  emit('updateCache', data.value);
}
</script>
