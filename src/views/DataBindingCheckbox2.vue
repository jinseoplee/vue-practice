<template>
  <div>
    <label><input type="checkbox" value="서울" v-model="checked" />서울 </label>
    <label><input type="checkbox" value="경기" v-model="checked" />경기 </label>
    <label><input type="checkbox" value="인천" v-model="checked" />인천 </label>
    <br />
    <span>체크한 지역 : {{ checked }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: [],
    };
  },
};
</script>
