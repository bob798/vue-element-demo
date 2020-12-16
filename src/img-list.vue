<template>
  <div class="back">

    <div class="red"></div>
    <el-scrollbar wrap-class="list" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box" :native="false">
      <div class="clearfix">
        <ul>
          <li><img src="./assets/1.jpg"></li>
          <li><img src="./assets/2.jpg"></li>
          <li><img src="./assets/3.jpg"></li>
          <li><img src="./assets/4.jpeg"></li>
          <li><img src="./assets/5.jpeg"></li>
          <li><img src="./assets/6.jpeg"></li>
          <li><img src="./assets/7.jpeg"></li>
          <li><img src="./assets/8.jpeg"></li>
          <li><img src="./assets/9.jpeg"></li>
          <li><img src="./assets/10.jpeg"></li>
        </ul>
      </div>
    </el-scrollbar>
    <div class="blue"></div>
  </div>
</template>

<script>
export default {
  name: "img-list"
}
</script>
<style scoped>
li {
  list-style: none;
  float: left;
  width: 33.3%;
  height: 100px;
  overflow: hidden;
}

li img {
  position: relative;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.wrap-class {
  max-height: 200px;
}

.back {
  top: 20%;
  margin-left: 20%;
  width: 60%;
  height: 60%;
}

.red {
  width: 100%;
  height: 30px;
  border: 1px solid red;
}

.blue {
  width: 100%;
  height: 30px;
  border: 1px solid blue;
}

.clearfix:after {
  position: relative;
  content: '';
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}
</style>
