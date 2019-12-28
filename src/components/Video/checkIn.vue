<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col col-lg-9 my-4">
          <select class="custom-select custom-select-sm" id v-model="selectedVideo">
            <option selected>Select an option</option>
            <option
              v-for="(video, index) in videos"
              :key="index"
              :value="video"
            >{{video}} </option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="items">No(s) to return</label>
          <br />
          <input name="items" type="number" v-model="returningQty" />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-sm-4">
          <button class="btn btn-primary" @click="checkIn">Check In!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  data() {
    return {
      customers: [],
      selectedVideo: {},
      returningQty: Number
    };
  },
  props: {
    videos: Array,
    logOnUser: Object
  },
  methods: {
    // getCustomers() {
    //   axios.get("https://localhost:44351/api/customer").then(({ data }) => {
    //     this.customers = [...data];
    //   });
    // }
  }
};
</script>

<style scoped>

</style>