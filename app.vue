<template>
  <div class="spacing">
    <Header />
    <main class="content-grid main-content">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped lang="scss">
.spacing > * + * {
  margin-top: 1rem;
}
</style>
