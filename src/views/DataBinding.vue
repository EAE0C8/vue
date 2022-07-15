<template>
 <div>
   <img alt="Vue logo" src="../assets/logo.png">
   <h1>Hello, {{ title }}!</h1>
   <div>{{ htmlString }}</div>
   <div v-html="htmlString"></div>
   <div><input type="text" v-model="valueModel" class="input-spot"></div>
   <div><input type="number" v-model.number="numberModel" class="input-spot"></div>
   <div><textarea class="input-spot" v-model="message"></textarea></div>
   <div>
     <select v-model="city">
       <option value="02">서울</option>
       <option value="21">부산</option>
       <option value="064">제주</option>
     </select>
   </div>
   <div>
     <label>
       <input type="checkbox" v-model="checked">
       {{checked}}
     </label>
   </div>
   <div>
     <label><input type="checkbox" v-model="checked2" value="서울">서울</label>
     <label><input type="checkbox" v-model="checked2" value="부산">부산</label>
     <label><input type="checkbox" v-model="checked2" value="제주">제주</label>
     <div>체크한 지역 : {{checked2}}</div>
   </div>
   <div>
     <label><input type="radio" v-bind:value="radioValue1" v-model="picked">서울</label>
     <label><input type="radio" v-bind:value="radioValue2" v-model="picked">부산</label>
     <label><input type="radio" v-bind:value="radioValue3" v-model="picked">제주</label>
     <div>선택한 지역 : {{ picked }}</div>
   </div>
   <div>
     <img v-bind:src="imgSrc" :alt="imgArt" />
   </div>
 </div>
</template>

<script>
 export default {
  data() {
    return {
      title: 'world',
      htmlString: '<p style="color:red;">This is a red string',
      valueModel: 'south korea',
      numberModel: '3',
      message: '여러 줄을 입력할 수 있습니다.',
      city: '064',
      checked: 'true',
      checked2: [],
      picked: [],
      radioValue1: '서울',
      radioValue2: '부산',
      radioValue3: '제주',
      imgSrc: 'http://openimage.interpark.com/.ui/interparkMain/2019/common/header/logo_interparkS.png',
      imgArt: '인터파크',
    }
  }
 }
</script>

<style scoped>
.active {
  background-color: yellow;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>