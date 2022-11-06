<template>
  <header>
    <div class="top">
      <h1>Andrew Mitchell</h1>
      <h2>Photography</h2>
    </div>
    <nav>
      <a>About</a>
      <a>Collections</a>
      <a>Locations</a>
    </nav>
  </header>
</template>

<script setup>
//const props = defineProps(['photos']);
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  margin: 0 auto;
}

.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;
  font-family: 'Dancing Script', cursive;
}

.top h1 {
  font-size: 3em;
}

.top h2 {
  font-size: 2.5em;
}

.top * {
  padding: 0;
  margin: 0;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

nav * {
  padding: 0;
  margin: 0;
}
</style>
