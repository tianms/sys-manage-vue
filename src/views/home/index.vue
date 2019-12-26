<template>
  <div>
    <div class="mod-home">
      <h3>项目介绍</h3>
      <ul>
        <li>实现前后端分离，通过token进行数据交互</li>
        <li>前端主要使用vue2.x + vue-router + vuex + element-ui进行搭建</li>
        <li>后端主要使用spring boot + shiro + mybatis进行搭建</li>
        <li>数据库为mysql</li>
      </ul>
      <h3>以下为自定义组件</h3>
      <div>
        查询框，当查询条件过于多的时候，隐藏展示。
        <query-card shadow="hover"  class="clearfix">
          <div>
            展示条件
          </div>
          <div slot="hideBody">
            隐藏条件
          </div>
        </query-card>
      </div>
    </div>
  </div>
</template>

<script>
  import QueryCard from '@/components/query-card'

  export default {
    components: {
      QueryCard
    }
  }
</script>

<style>
  .mod-home {
    /*line-height: 1.5;*/
  }
  .mod-home .el-button{
    width: 200px;
    height: 200px;
    font-size:25px;
    background-color: #17b3a3;
    font-family: '微软雅黑';
    border-radius: 20px;
    box-shadow: 1px 1px #c486ff;
  }
  .mod-home .el-col-6{
    text-align: center;
    /*margin: 20px;*/
    margin-bottom: 50px;
    margin-top: 40px;
  }
</style>

