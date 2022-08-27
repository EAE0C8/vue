<template>
 <div>
  <PageTitle title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달" />
   <BlogPost links="42" />
 </div>
</template>

<script>
import PageTitle from '../components/PageTitle';
import BlogPost from '../components/BlogPost';

 export default {
   components: {
     PageTitle,
     BlogPost
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