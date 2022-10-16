<template>
    <a v-if="images.filter(img => img.type == 'AVIF')[0]" data-fancybox="gallery-a" :href="'https://photos.andrewmitchell.photos/' + images.filter(img => img.type == 'AVIF')[0].remoteId" :data-caption="caption" :data-thumb="'https://photos.andrewmitchell.photos/' + thumbs.filter(img => img.type == 'AVIF')[0].remoteId" class="img">
      <picture class="photo">
        <source
          v-if="thumbs.filter(img => img.type == 'AVIF')[0]"
          :srcset="'https://photos.andrewmitchell.photos/' + images.filter(img => img.type == 'AVIF')[0].remoteId"
          type="image/avif"
        />
        <source
          v-if="thumbs.filter(img => img.type == 'WEBP')[0]"
          :srcset="'https://photos.andrewmitchell.photos/' + images.filter(img => img.type == 'WEBP')[0].remoteId"
          type="image/webp"
        />
        <img
          v-if="thumbs.filter(img => img.type == 'JPG')[0]"
          :src="'https://photos.andrewmitchell.photos/' + images.filter(img => img.type == 'JPG')[0].remoteId"
          alt=""
          loading="lazy"
        />
      </picture>
    </a>
    <a v-else-if="images.filter(img => img.type == 'WEBP')[0]" data-fancybox="gallery-a" :href="'https://photos.andrewmitchell.photos/' + images.filter(img => img.type == 'WEBP')[0].remoteId" :data-caption="caption" :data-thumb="'https://photos.andrewmitchell.photos/' + thumbs.filter(img => img.type == 'WEBP')[0].remoteId" class="img">
      <picture class="photo">
        <source
          v-if="thumbs.filter(img => img.type == 'AVIF')[0]"
          :srcset="'https://photos.andrewmitchell.photos/' + images.filter(img => img.type == 'AVIF')[0].remoteId"
          type="image/avif"
        />
        <source
          v-if="thumbs.filter(img => img.type == 'WEBP')[0]"
          :srcset="'https://photos.andrewmitchell.photos/' + images.filter(img => img.type == 'WEBP')[0].remoteId"
          type="image/webp"
        />
        <img
          v-if="thumbs.filter(img => img.type == 'JPG')[0]"
          :src="'https://photos.andrewmitchell.photos/' + images.filter(img => img.type == 'JPG')[0].remoteId"
          alt=""
          loading="lazy"
        />
      </picture>
    </a>
    <a v-else-if="images.filter(img => img.type == 'JPG')[0]" data-fancybox="gallery-a" :href="'https://photos.andrewmitchell.photos/' + images.filter(img => img.type == 'JPG')[0].remoteId" :data-caption="caption" :data-thumb="'https://photos.andrewmitchell.photos/' + thumbs.filter(img => img.type == 'JPG')[0].remoteId" class="img">
      <picture class="photo">
        <source
          v-if="thumbs.filter(img => img.type == 'AVIF')[0]"
          :srcset="'https://photos.andrewmitchell.photos/' + images.filter(img => img.type == 'AVIF')[0].remoteId"
          type="image/avif"
        />
        <source
          v-if="thumbs.filter(img => img.type == 'WEBP')[0]"
          :srcset="'https://photos.andrewmitchell.photos/' + images.filter(img => img.type == 'WEBP')[0].remoteId"
          type="image/webp"
        />
        <img
          v-if="thumbs.filter(img => img.type == 'JPG')[0]"
          :src="'https://photos.andrewmitchell.photos/' + images.filter(img => img.type == 'JPG')[0].remoteId"
          alt=""
          loading="lazy"
        />
      </picture>
    </a>
</template>

<script setup>
const props = defineProps(['images', 'thumbs', 'caption']);
</script>

<style scoped>
.img {
  width: 400px;
  height: 300px;
  box-shadow: 5px 5px 8px 0px rgba(0, 0, 0, 0.55);
  -webkit-box-shadow: 5px 5px 8px 0px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 5px 5px 8px 0px rgba(0, 0, 0, 0.55);
}

.img * {
  width: 100%;
}
</style>
