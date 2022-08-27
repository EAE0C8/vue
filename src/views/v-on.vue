<template>
 <div>
   <img alt="Vue logo" src="../assets/logo.png">
   <button type="button" @click="increase">ADD1</button>
 </div>
</template>

<script>
 export default {
  data() {
    return {
      type: 'A'
    }
  }
 }
</script>

<style scoped>
table {
  font-font: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td, th {
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
}
</style>