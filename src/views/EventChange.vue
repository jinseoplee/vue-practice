<template>
  <select v-model="selectedValue" @change="changeSelect">
    <option value="서울">서울</option>
    <option value="경기">경기</option>
    <option value="인천">인천</option>
  </select>
</template>
<script>
export default {
  data() {
    return {
      selectedValue: "",
    };
  },
  methods: {
    changeSelect() {
      alert(this.selectedValue);
    },
  },
};
</script>
