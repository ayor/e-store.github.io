<template>
  <div>
    <div class="container-fluid">
      <div class="box">
        <div class="flex-lg-row box-item" >
          <a v-for="video in videoDetails" :key="video.id">
            <img :src="getImgUrl(video.imageSrc)" alt="1" height="200" width="20%" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["videoDetails"])
  },
  methods: {
    getImgUrl(imgUrl) {
      return require("../../assets/" + imgUrl);
    }
  }
};
</script>
<style scoped>
.col {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  margin: 1%;
}

ul {
  list-style: none;
  margin: 0;
  border: 0 none;
}
.box {
  margin-top: 2% auto;
  width: 100%;
  box-shadow: 0 0 3px rgb(148, 145, 145);
  margin-top: 1%;
  background-color: #ccc;
}
</style>