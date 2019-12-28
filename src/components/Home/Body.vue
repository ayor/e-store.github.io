<template>
  <div class="container-fluid">
    <div class="img">
          <app-image-view></app-image-view>
          </div>
    <div v-for="videoDetail in videoDetails" :key="videoDetail.id">
      <div class="details text-left">
        <h5>{{videoDetail.title}}</h5>
        <div class="d-flex content_display">
          <div class="mr-3 py-2">
            <img :src="getImgUrl(videoDetail.imageSrc)" width="80%" height="100%"/>
          </div>
          <div class="pr-1">
            <p id="caption">{{videoDetail.videoDescription}}</p>
            <p>
              <b>Rate - ${{videoDetail.price}} per Day</b>
            </p>
            <div class="d-flex justify-content-between">
              <div>
                <button class="btn btn-warning w-100" @click="addToCart(videoDetail)">Add to Cart</button>
              </div>
              <div>
                <iframe width="100%" style="margin-top: -45px;"  :src="videoDetail.videoLink"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 

 
  </div>
</template>
<script>
import appImageView from "./imageView";
import { mapGetters } from "vuex";
export default {
  components:{
    appImageView
  },
  data() {
    return {
      cartExists: false
    };
  },
  computed: {
    ...mapGetters(["videoDetails", "Carts","loggedIn"])
  },
  methods: {
    getImgUrl(imgSrc) {
      return require("../../assets/" + imgSrc);
    },
    addToCart(videoObject) {
      if (this.videoExists(videoObject)) {
        this.cartExists = true;
        setTimeout(() => {
          this.cartExists = false;
        }, 3000);

      } else {
        this.$store.dispatch("addToCart", videoObject);
      }
    },
    videoExists(videoObject) {
      if (this.Carts.includes(videoObject)) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style scoped>
.details {
  margin: 2% 21%;
  width: 58%;
  box-shadow: 1px 1px 3px #ccc;
  color: rgb(56, 45, 24);
}
.content_display{
  height: 210px;
}
button {
  width: 150px;
  margin: 0;
}

#caption {
  font-size: 80%;
  color: rgba(63, 54, 2, 0.911);
  font-family:cursive;
  /* height: 20%; */
  /* margin-bottom: 50%; */
}
#detail {
  margin-top: 2%;
  margin-left: 40%;
}
h5 {
  font-family: fantasy;
}
</style>