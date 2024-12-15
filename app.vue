<template>
  <div class="spacing">
    <Header />
    <main class="content-grid">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped lang="scss">
.spacing > * + * {
  margin-top: 1rem;
}
</style>
