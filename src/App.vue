<template>
  <div>
    <EcTopbar />
    <div class="border-b">
      <EcHeader />
    </div>
  </div>
</template>

<script setup lang="ts">
import EcHeader from './layouts/EcHeader.vue';
import EcTopbar from './layouts/EcTopbar.vue';

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
</style>
