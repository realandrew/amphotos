<template>
  <section class="photo-grid">
    <template v-for="photo in photosData.photos" :key="photo.id">
      <Photo :images="photo.files" :thumbs="photo.thumbs" :caption="photo.caption"></Photo>
    </template>
    <Observer @intersect="intersected"/>
    <div v-if="scrollLoadingActivated">
      <div id="loadingSpinner">
        <p><strong>Loading photos...</strong></p>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig();
//const props = defineProps(['photos']);

const photosData = ref({ page: 0, photos: [] });
const scrollLoadingActivated = ref(false);

async function intersected () {
  scrollLoadingActivated.value = true;
  console.log("Loading...");
  loadPhotos();
}

async function loadPhotos () {
  // console.log(`Pages: ${photosData.value.page}, ${config.API_URL}/photos?page=${photosData.value.page}`);
  const { pending, data: page } = await useFetch(`${config.API_URL}/photos?page=${photosData.value.page}`, { key: `photos-pg-${photosData.value.page}`});
  if (page) {
    photosData.value.photos.push(...page.value.photos);
    if (page.value.morePages) {
      photosData.value.page += 1;
    }
  }
  console.log("Loading completed!");
  scrollLoadingActivated.value = false;
}

onMounted(() => {
  console.log("Mounted!");
  //loadPhotos();
});
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
