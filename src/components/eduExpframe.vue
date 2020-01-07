<template>
  <div id="eduFrame">
    <div class="row frameTypeSetting">
      <h3>{{ frameType }}</h3>
    </div>
    <div class="row frameSetting">
      <div class="col-md-6 col-lg-6">
        <Timeline></Timeline>
      </div>
      <div class="col-md-6 col-lg-6">
        <b-alert show dismissible fade variant="danger"
          >Dismissible Alert!</b-alert
        >
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "@/components/Timeline";

export default {
  data() {
    return {
      frameType: "Education"
    };
  },
  components: {
    Timeline
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  margin: 0 0 0 0;
}

.frameTypeSetting {
  background-color: #cbf1f5;
  padding: 25px 0px 10px 0px;
  display: block;
}
.frameTypeSetting h3 {
  text-align: center;
}
.frameSetting {
  height: 550px;
  background-color: #cbf1f5;
}
</style>
