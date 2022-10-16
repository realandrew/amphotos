<template>
  <section class="photo-grid">
    <template v-for="photo in photos" :key="photo.id">
      <Photo :images="photo.files" :thumbs="photo.thumbs" :caption="photo.caption"></Photo>
    </template>
  </section>
</template>

<script setup>
const props = defineProps(['photos']);
</script>

<style scoped>
.photo-grid {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  gap: 25px;
}

.photo-grid a {
  margin: 0;
}

.photo-grid a .img {
  margin: 0;
}
</style>
