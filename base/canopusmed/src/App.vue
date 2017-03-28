<template>
  <div id="app">

    <div class="dashboard">
      <div class="row">
        <div class="col-lg-3 col-xs-6">
          <SmallBox
            color="aqua"
            icon="ion-bag"
            title="150"
            description="New Order"
            moreText="More info">
          </SmallBox>
        </div>
        <div class="col-lg-3 col-xs-6">
          <SmallBox
            color="green"
            icon="ion-stats-bars"
            title="53%"
            description="Bounce Rate"
            moreText="More info">
          </SmallBox>
        </div>
        <div class="col-lg-3 col-xs-6">
          <SmallBox
            color="yellow"
            icon="ion-person-add"
            title="44"
            description="User Registrations"
            moreText="More info">
          </SmallBox>
        </div>
        <div class="col-lg-3 col-xs-6">
          <SmallBox
            color="red"
            icon="ion-pie-graph"
            title="65"
            description="Unique Visitors"
            moreText="More info">
          </SmallBox>
        </div>
      </div>

      <div class="row">
        <section class="col-lg-5 connectedSortable ui-sortable">
          <Calendar></Calendar>
        </section>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import SmallBox from 'va/widgets/SmallBox.vue'
import Calendar from 'va/widgets/Calendar.vue'
export default {
  name: 'app',
  components: {
    SmallBox,
    Calendar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
