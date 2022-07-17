<template>
  <div class="resume">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      test: 1,
    };
  },
  watch: {
    to() {},
  },
  created() {
    setTimeout(function () {
      this.test = 2;
    });
  },
};
</script>

