<template>
  <div class="outWeb">
    <div class="innerWeb">
      <Nav></Nav>
      <Banner></Banner>
      <eduExpframe></eduExpframe>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Banner from "@/components/Banner";
import eduExpframe from "@/components/eduExpframe";
export default {
  data() {
    return {};
  },
  components: {
    Nav,
    Banner,
    eduExpframe
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outWeb {
  width: 100%;
  background-color: white;
}
.innerWeb {
  max-width: 1920px !important;
  margin: 0 auto !important;

  height: auto;
}
</style>
