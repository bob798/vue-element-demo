<template>
  <div class="back">
    <div>
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
    </div>
    <div class="title">

      <span>欢迎参加抽奖活动</span>
    </div>

    <div class="two">
      <span style="font-weight: bold;">请扫描签到</span>
      <el-image :src="require('../../vue-element-demo/src/assets/two.png')"/>
    </div>
    <!--    <div class="box">-->
    <!--&lt;!&ndash;    <div id="list-demo"  class="box">&ndash;&gt;-->
    <!--      <transition-group name="list" tag="p">-->

    <!--      <span v-for="(item, index) in items" v-bind:key="item">-->
    <!--&lt;!&ndash;      <span v-for="(item, index) in items" v-bind:key="item" class="list-item">&ndash;&gt;-->
    <!--        <div>{{index}}</div>-->
    <!--&lt;!&ndash;      <el-image  style="width: 100px; height: 100px" :src="item"></el-image>&ndash;&gt;-->
    <!--    </span>-->
    <!--      </transition-group>-->
    <!--    </div>-->
    <div class="box">
      <el-scrollbar style="max-height: 200px" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box"

                    :native="false">
        <div class=" user-list">

          <div v-for="item in items" :key="item">

            <!--              <span v-for="(item, index) in items" v-bind:key="item">-->
            <el-row>
              <el-col>
                <el-image style="width: 50px; height: 50px" :src="item"></el-image>
              </el-col>
              <el-col><span>bob</span></el-col>
            </el-row>

            <!--            </span>-->
          </div>
        </div>
      </el-scrollbar>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'https://img.yzcdn.cn/vant/logo.png',
        'https://img.yzcdn.cn/vant/logo.png',
        'https://img.yzcdn.cn/vant/logo.png',
        'https://img.yzcdn.cn/vant/logo.png',
        'https://img.yzcdn.cn/vant/logo.png',
        'https://img.yzcdn.cn/vant/logo.png',
        'https://img.yzcdn.cn/vant/logo.png',
        'https://img.yzcdn.cn/vant/logo.png',
        'https://img.yzcdn.cn/vant/logo.png',
        'https://img.yzcdn.cn/vant/logo.png',
        'https://img.yzcdn.cn/vant/logo.png',
        'https://img.yzcdn.cn/vant/logo.png'],
      // overflow: hidden;
      nextNum: 10

    }
  },
  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrap.getBoundingClientRect().top + 'px';
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(0, null, 'https://img.yzcdn.cn/vant/logo.png')
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    }
  },

  getHeight() {
    let wrapperHeight =
        document.documentElement.clientHeight -
        this.$refs.wrap.getBoundingClientRect().top;
    let windowHeight = document.documentElement.offsetHeight;
    let warpHeight = this.$refs.wrap.offsetHeight;

    if (wrapperHeight >= warpHeight) {
      this.$refs.wrap.style.height = wrapperHeight + "px";
    } else {
      this.$refs.wrap.style.height = "inherit";
    }
  },

}
</script>

<style scoped>


/*.list-item {*/
/*  !*display: inline-block;*!*/
/*  !*margin-right: 10px;*!*/

/*}*/

/*.list-enter-active, .list-leave-active {*/
/*  transition: all 1s;*/
/*}*/

/*.list-enter, .list-leave-to*/
/*  !* .list-leave-active for below version 2.1.8 *!*/
/*{*/
/*  opacity: 0;*/
/*  transform: translateY(30px);*/
/*}*/
.box {
  width: 50%;
  margin-left: 20%;
  padding-left: 5px;
  border: 1px;
  height: 300px;
  overflow: hidden;

  background-color: rgba(177, 91, 91, 0.5);
}

.user-list {
  display: flex;
  flex-flow: row wrap;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  width: 80%;
  margin-left: 10px;
  padding-top: 50px;
  max-height: 200px;

  /*flex-direction: row;*/
}

.back {
  width: 100%;
  height: 100%;
  position: absolute;

  padding: 0;
  /*margin: 0;*/
  /*left: 0;*/
  /*top: 0;*/
  /*bottom: 0;*/
  /*right: 0;*/
  background-image: url(assets/christmas.jpg);
  background-size: cover;
  /*opacity: 0.4;*/
}

.two {
  width: 100px;
  /*padding-left: 100px;*/
  /*margin-left: 60%;*/
  /*margin-top: 50px;*/
  margin-left: 70%;
  padding-top: 100px;
}

.title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.list {
  max-height: 200px;
}
</style>
