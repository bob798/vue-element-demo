<template>
  <div id="list-demo" class="demo">
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="list" tag="p">
    <span v-for="item in items" v-bind:key="item" class="list-item">

      <el-image class="" style="width: 100px; height: 100px" :src="item"></el-image>
    </span>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['https://img.yzcdn.cn/vant/logo.png',  'https://img.yzcdn.cn/vant/logo.png'],
      nextNum: 10

    }
  }
  ,
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    }
    ,
    add: function () {
      this.items.splice(this.randomIndex(), 0, 'https://img.yzcdn.cn/vant/logo.png')
    }
    ,
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    }

  }
}
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to
  /* .list-leave-active for below version 2.1.8 */
{
  opacity: 0;
  transform: translateY(30px);
}
</style>
