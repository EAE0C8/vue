<template>
 <div>
  <Page-title :title="title" />
  <Blog-post :links="links" />

 </div>
</template>

<script>
import PageTitle from '../components/PageTitle';
import BlogPost from '../components/BlogPost';


 export default {
   components: {
     PageTitle,
     BlogPost,
   },
   data() {
     return {
       title: '동적 페이지 타이틀',
       links: '43'
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