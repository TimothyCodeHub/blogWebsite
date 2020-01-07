<template>
  <div class="imgTextContainer">
    <img src="static/Banner.png" alt="banner" class="BannerImg" />
    <div class="center-text">
      <h1>{{ name }}</h1>
      <p>{{ info }}</p>
      <button class="btn btn-info">Download CV</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "I AM Timothy NG",
      info: "And I'm a Student from Information Technology"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imgTextContainer {
  margin-top: 43px;
  width: 100%;
  background-color: #e3fdfd;
  color: white;
  height: 550px;
}
.center-text {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.center-text p {
  font-size: 20px;
}
.center-text h1 {
  font-size: 50px;
}
.center-text button {
  background-color: #e3fdfd;
  color: #555273;
}

.BannerImg {
  opacity: 0.85;
  width: 100%;
  height: 100%;
  /* cut photo */
  position: relative;
  object-fit: cover;
  object-position: 60%;
}
</style>
