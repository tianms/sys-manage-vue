<template>
  <div :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="el-card__body" :style="bodyStyle">
      <slot></slot>
      <slot name="hideBody" v-if="showHB">{{ hideBody }}</slot>
    </div>

    <div class="toggle-block">
      <div class="toggle-btn" @click="showQuery">
        <span>全部</span>
        <icon-svg :name="upClass" className="show-query"></icon-svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QueryCard',
    data () {
      return {
        upClass: 'fa-angle-double-down',
        showHB: false
      }
    },
    props: {
      hideBody: {},
      bodyStyle: {},
      shadow: {
        type: String
      }
    },
    methods: {
      showQuery () {
        if (this.upClass === 'fa-angle-double-down') {
          this.upClass = 'fa-angle-double-up'
          this.showHB = true
        } else {
          this.upClass = 'fa-angle-double-down'
          this.showHB = false
        }
      }
    }
  }
</script>

<style lang="scss">
  .toggle-block {
    background-position: center -288px;
    background: url(~@/assets/img/toggle-base.png) center -480px no-repeat;
    position: relative;
    height: 40px;
    .toggle-btn {
      background: url(~@/assets/img/toggle-base.png) -653px -79px no-repeat;
      width: 94px;
      height: 30px;
      line-height: 30px;
      display: block;
      cursor: pointer;
      text-align: center;
      position: absolute;
      top: -8px;
      left: 50%;
      margin-left: -47px;
      color: #6d757a;
      font-size: 12px;
    }
    .show-query {
      font-size: 17px;
      padding-top: 4px;
    }
    :hover {
      color: #17b3a3;
    }
  }

</style>
