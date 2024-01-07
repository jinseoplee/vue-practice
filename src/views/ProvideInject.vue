<template>
  <ProvideInjectChild />
</template>
<script>
import ProvideInjectChild from "./ProvideInjectChild.vue";

export default {
  components: { ProvideInjectChild },
  data() {
    return {
      items: ["a", "b"],
    };
  },
  provide() {
    return {
      itemLength: this.items.length,
    };
  },
};
</script>
