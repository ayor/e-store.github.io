<template>
  <div>
    <div class="text-center">
      <div class="row main_row">
        <div class="col col-md-2 col-sm-2 col_2 text-center">
          <div class="nav_div">
            <router-link to="/summary" tag="li" class="list-group-item" active-class="active" exact>
              <span>Account Summary</span>
            </router-link>
            <router-link to="/orders" tag="li" class="list-group-item" active-class="active">
              <span>Orders</span>
            </router-link>
            <router-link tag="li" active-class="active" class="list-group-item" to="/reviews">Pending Reviews</router-link>
            <router-link tag="li" active-class="active" class="list-group-item" to="/addressBook">Address Book</router-link>
            <router-link
              tag="li"
              class="list-group-item"
              active-class="active"
              to="/passwordChange"
            >Change Password</router-link>
            <form>
              <button class="btn _def">Logout</button>
            </form>
          </div>
        </div>
        <div class="col col-md-9 col-sm-7 router_view">
          <transition enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in">
          <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container-fluid">
        <span class="text-muted">Footer here</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer > .container-fluid {
  background-color: rgb(78, 76, 76);
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 300px;
  left: 0;
}
.col_2 {
   border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgb(158, 158, 158);
  padding-left: 0 !important;

 }
li {
  cursor: pointer;
  list-style: none;
  width: 100%;
  margin: 5%;
  border: 0;
}
li:hover{
  background-color: rgb(247, 244, 244);
  color: black;
  border: #ccc;
}
.main_row {
  margin: 5% 15%;
}
.router_view{
  box-shadow: 4px 4px 8px #ccc;
  margin-left: 2%;
  text-align: center;

}


</style>