<template>
  <h1>Full Name : {{ fullName }}</h1>
</template>
<script>
export default {
  data() {
    return {
      firstName: "Jinseop",
      lastName: "Lee",
      fullName: "",
    };
  },
  watch: {
    firstName() {
      return this.firstName + " " + this.lastName;
    },
    lastName() {
      return this.firstName + " " + this.lastName;
    },
  },
};
</script>
