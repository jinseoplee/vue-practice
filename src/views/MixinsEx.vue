<template>
  <div></div>
</template>
<script>
import ApiMixin from "../api.js";

export default {
  mixins: [ApiMixin],
  data() {
    return {
      productList: [],
    };
  },
  async mounted() {
    this.productList = await this.$callAPI(
      "https://33a248d5-9edf-4869-9858-bfadd0f3ef27.mock.pstmn.io/list",
      "get"
    );
    console.log(this.productList);
  },
};
</script>
