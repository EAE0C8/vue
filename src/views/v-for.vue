<template>
 <div>
   <img alt="Vue logo" src="../assets/logo.png">
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in productList" :key="index">
          <td>{{product.productName}}</td>
          <td>{{product.price}}</td>
          <td>{{product.category}}</td>
          <td>{{product.deliverPrice}}</td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
 export default {
  data() {
    return {
      productList: [
        {"productName": "기계식 키보드", "price":2500, "category": "노트북/태블릿", "deliverPrice" : 5000},
        {"productName": "라우터", "price":2500, "category": "노트북/태블릿", "deliverPrice" : 5000},
      ]
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