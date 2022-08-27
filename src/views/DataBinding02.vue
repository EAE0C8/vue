<template>
 <div>
   <img alt="Vue logo" src="../assets/logo.png">
   <div>
     <input type="text" v-model="textValue">
     <button type="button" v-bind:disabled="textValue==''">Click</button>
   </div>
   <div>
     <div class="container" v-bind:class="{'active':isActive, 'text-rad':hasError}"> Class Binding</div>
   </div>
   <div>
     <div class="container2" v-bind:class="[activeClass, errorClass]">Class Binding</div>
   </div>
   <div>
     <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
   </div>
   <div>
     <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 바인딩</div>
   </div>
 </div>
</template>

<script>
 export default {
  data() {
    return {
      textValue: "",
      isActive: true,
      hasError: false,
      activeClass: 'active',
      errorClass: 'text-red',
      styleObject: {
        color: 'red',
        fontsize: '13px'
      },
      baseStyle: 'background-color:yellow; width:100%; height: 200px;',
      addStyle: 'color: red; font-weight:bold',
    }
  }
 }
</script>

<style scoped>
</style>