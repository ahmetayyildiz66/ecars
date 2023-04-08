<template>
  <div>
    <EcTopbar />
    <div class="border-b">
      <EcHeader />
    </div>

    <EcHero />

    <div class="border-b pb-8">
      <EcBenefitsList class="shrink-0" />
    </div>

    <SpecialOffers />

    <EcBrowseBrand />

    <EcInquiry />

    <div class="border-b">
      <EcHowWorks />
    </div>

    <EcWhyUs />
  </div>
</template>

<script setup lang="ts">
import EcHeader from './layouts/EcHeader.vue';
import EcTopbar from './layouts/EcTopbar.vue';
import EcHero from './components/EcHero.vue';
import EcBenefitsList from './components/EcBenefitsList.vue';
import SpecialOffers from './components/SpecialOffers.vue';
import EcBrowseBrand from './components/EcBrowseBrand.vue';
import EcInquiry from './components/EcInquiry.vue';
import EcHowWorks from './components/EcHowWorks.vue';
import EcWhyUs from './components/EcWhyUs.vue';

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
  background-color: '#F6F5F4';
}
</style>
