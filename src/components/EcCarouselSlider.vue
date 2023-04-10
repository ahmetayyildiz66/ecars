<template>
  <div class="pt-8 pb-8 relative">
    <div>

      <header class="container flex items-center justify-between">
        <slot name="header"></slot>

        <div class="hidden pb-4 md:flex items-center">
          <slot name="tabletDesktopSlider"></slot>
        </div>
      </header>

    </div>

      <main>
        <slot></slot>
      </main>

      <footer class="container md:hidden flex items-center justify-between">
        <slot name="footer"></slot>
      </footer>
  </div>
</template>

<script lang="ts" setup></script>