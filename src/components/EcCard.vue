<template>
  <article class="rounded-lg shadow-md bg-white shadow-gray-300 shrink-0 md:flex lg:w-[705px]">
    <header>
      <slot name="header"></slot>
    </header>

    <main class="p-4 space-y-2">
      <slot />
    </main>
  </article>
</template>