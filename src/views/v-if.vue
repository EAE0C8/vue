<template>
 <div>
   <img alt="Vue logo" src="../assets/logo.png">
    <h1 v-if="type==='A'">A</h1>
    <h1 v-else-if="type==='B'">B</h1>
    <h1 v-else>C</h1>
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