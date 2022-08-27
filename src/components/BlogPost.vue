<template>
  <h1>{{ links }}</h1>
</template>

<script>
export default {
  props: {
    links: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
