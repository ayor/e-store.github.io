<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Stock</th>
          <th>X</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(video, index) in videos" :key="video[index]">
          <td hidden>{{video.id}}</td>
          <td aria-placeholder="title">{{video.title}}</td>
          <td aria-placeholder="stock">{{video.stock}}</td>
          <td v-if="video.stock>0">
            <button
              class="btn btn-success"
              @click="checkOut"
              data-toggle="modal"
              data-target="#exampleModalCenter2"
            >Check Out</button>
          </td>
          <td v-else>
            <span class="text-warning">Out of Stock</span>
          </td>
        </tr>
      </tbody>
      <button class="btn btn-primary" @click="backToVideoPage">
        <i class="fas fa-back"></i> Back
      </button>
    </table>
    <transition name="infoFade">
      <div class="alert alert-info" v-if="info!=''">{{info}}</div>
    </transition>
    <div
      class="modal fade"
      id="exampleModalCenter2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle2"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Confirm Check Out</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Confirm you want to Check Out
            <span style="color: green;">
              <b>{{selectedVideoTitle}}</b>
            </span> ?
            <hr />
            <span class="d-flex justify-content-between">
              <span class="text-center">
                <label for>Select Qty</label>
                <br />
                <input type="text" size="1" v-model="qty" placeholder="1" />
              </span>
              <span class="text-center">
                <label for>Available Qty</label>
                <br />
                <input readonly :value="availableQty" size="1" />
              </span>
            </span>
            <hr>
            <label for="format">Select Format</label><br>
            <select 
            class="custom-select custom-select-sm"
            name="format" 
            v-model="selectedFormat"
            >
            <option 
            v-for="(format, index) in videoFormats"
            :key="index"
            :value="format">{{format.formats}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="confirmCheckIn">Confrim</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import Axios from "axios";
import { dataMixins } from "../../datamixin";
export default {
  mixins: [dataMixins],
  data() {
    return {
      qty: "",
      availableQty: "",
      selectedVideoID:'',
      info:''
    };
  },
  props: {
    videos: Array,
    logOnUser: Object,
    videoFormats: Array
  },
  // methods: {
  //   backToVideoPage() {
  //     this.$emit("showHomePage");
  //   },
  //   checkOut(event) {
  //     let selectedRow = event.target.parentElement.parentElement;

  //     this.selectedVideoID = selectedRow.children[0].textContent;
  //     this.selectedVideoTitle = selectedRow.children[1].textContent;
  //     this.availableQty = selectedRow.children[2].textContent;
  //   },
  //   confirmCheckIn() {
  //     // do something
  //     //get the selecetd video tile,
  //     let checkOutData = {
  //       VideoTitle: this.selectedVideoTitle,
  //       CustomerID: this.logOnUser.id,
  //       VideoID: parseInt(this.selectedVideoID),
  //       VideoFormat: this.selectedFormat.formats,
  //       CustomerName: this.logOnUser.name,
  //       RentedQuantity: parseInt(this.qty),
  //       RentalDate: new Date(),
  //       ReturnDate: null
  //     };
  //     //get the qty and the customer

  //     //post data to rental api 

  //     Axios({
  //       method:'POST',
  //       url:'https://localhost:44351/api/rental',
  //       data:checkOutData
  //     }).then(res=>{
  //       if(res.status == 200){
  //         this.info = "Check Out Successful"
  //       }else{
  //         this.info = "An error occured, Contact helpdesk for support"
  //       }
  //     })
  //   }
  // }
};
</script>
<style scoped>
.infoFade-enter{
opacity: 0;
}
.infoFade-enter-active{
transform: opacity 2s ease-in forwards;
opacity: 1;
}
.infoFade-leave{

}
.infoFade-leave-active{

}

</style>