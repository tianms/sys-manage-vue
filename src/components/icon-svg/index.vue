<template>
  <i :class="getName" :width="width" :height="height" aria-hidden="true"></i>
</template>

<script>
  export default {
    name: 'icon-svg',
    props: {
      name: {
        type: String,
        required: true
      },
      className: {
        type: String
      },
      width: {
        type: String
      },
      height: {
        type: String
      }
    },
    computed: {
      getName () {
        if (this.className === '') {
          return `fa ${this.name} fa-fw`
        } else {
          return `fa ${this.name} fa-fw ${this.className}`
        }
      }
    }
  }
</script>

<style>
  i {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
