<template>
  <div>
    <EcTopbar />
    <div class="border-b">
      <EcHeader />
    </div>

    <RouterView />
    <EcFooter />
  </div>
</template>

<script setup lang="ts">
import EcHeader from "./layouts/EcHeader.vue";
import EcTopbar from "./layouts/EcTopbar.vue";
import EcFooter from "./layouts/EcFooter.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;600;700&display=swap");

body {
  font-family: "Inter", sans-serif;
  background-color: "#F6F5F4";
}
</style>
