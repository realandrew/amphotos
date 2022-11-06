<!-- Observer.vue from https://vueschool.io/articles/vuejs-tutorials/build-an-infinite-scroll-component-using-intersection-observer-api/ -->
<template>
  <div class="observer"></div>
</template>

<script>
export default {
  name: 'Observer',
  props: ['options'],
  data: () => ({
    observer: null
  }),
  mounted () {
    const options = this.options || {}
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('intersect')
      }
    }, options)

    this.observer.observe(this.$el)
  },
  unmounted () {
    this.observer.disconnect()
  }
}
</script>
