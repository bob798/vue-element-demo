<template>
  <div>
    <transition name="fade">

    <div>An animated element</div>
    </transition>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="url1"
          label="日期"
          width="180">
        <template slot-scope="scope">
          <el-image style="width: 100px; height: 100px" :src="scope.row.url1"></el-image>
        </template>
      </el-table-column>
      <el-table-column
          prop="url2"
          label="姓名"
          width="150">
        <template slot-scope="scope">
          <el-image style="width: 100px; height: 100px" :src="scope.row.url2"></el-image>
          <el-button size="mini" icon="el-icon-edit"></el-button>
          <el-button  size="mini" icon="el-icon-delete"></el-button>

        </template>
      </el-table-column>
    </el-table>
  </div>

<!--  <div>-->
<!--    <template>-->
<!--      <el-image style="width: 100px; height: 100px" :src="'https://img.yzcdn.cn/vant/logo.png'"></el-image>-->
<!--    </template>-->
<!--  </div>-->
</template>

<script>
export default {
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      tableData: [
        {url1: 'https://img.yzcdn.cn/vant/logo.png', url2: 'https://img.yzcdn.cn/vant/logo.png'},
        {url1: 'https://img.yzcdn.cn/vant/logo.png', url2: 'https://img.yzcdn.cn/vant/logo.png'},
        {url1: 'https://img.yzcdn.cn/vant/logo.png', url2: 'https://img.yzcdn.cn/vant/logo.png'},
        {url1: 'https://img.yzcdn.cn/vant/logo.png', url2: 'https://img.yzcdn.cn/vant/logo.png'}
      ]
    }
  },
  methods: {
    startHacking() {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
