<template>
  <div>
    <heading></heading>
    <div class="content">
      <div class="about">
        <p class="licensing-notice">
          Note: The purpose of this site is to showcase my photos. Photos have
          licensing terms in their details. Most are licensed freely for
          personal / non-commerical use. If you wish to license these photos for
          other use-cases (such as commerical), you can reach out to me at
          <a href="mailto:andrew@andrewjmitchell.com" rel="nofollow"
            >andrew@andrewjmitchell.com</a
          >. Please see the <a href="#">F.A.Q.</a> section for further details.
        </p>
      </div>
      <div>
        <PhotoGrid></PhotoGrid>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

//const props = defineProps(['photos']);
useHead({
  htmlAttrs: [
    {
      lang: 'en'
    }
  ],
  title: 'Andrew Mitchell Photography',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat&family=Open+Sans&family=Roboto&display=swap',
      crossorigin: '',
    },
    {
      rel: 'stylesheet',
      href: 'node_modules/modern-normalize/modern-normalize.css',
    },
  ],
  meta: [
    {
      name: "description",
      content: "A showcase of photos taken by Andrew Mitchell."
    }
  ]
});

onMounted(() => {
  Fancybox.bind('[data-fancybox="gallery-a"]',
  {
    Thumbs: {autoStart: true},
    Toolbar: {
      autoEnable: false,
      display: ["download", "zoom", "slideshow", "fullscreen", "thumbs", "close"],
    },
  });
});
</script>

<style>
body {
  background-color: #fff; /* #090216; */ /*#01010f;*/
  color: #130b41; /* #e6c9c4; */  /* #e9e5f0; */
}

p, a {
  font-family: 'Open Sans', sans-serif;
}

a {
  color: #3c1ea2; /* #eb0974; */ /*#72ca31;*/
  font-weight: 700;
}

a:hover {
  opacity: 0.8;
  cursor: pointer;
}

.content {
  padding: 0 20px 20px 20px;
}

.licensing-notice {
  max-width: 1000px;
  margin: 30px auto;
}
</style>
