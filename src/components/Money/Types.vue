<template>
  <div class="head">
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Types'
};
</script>

<style lang="scss" scoped>
.head {
  padding: 40px;
  background: #F8F8F8;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  > .types {
    display: flex;
    > li {
      padding: 3px 35px;
      background: #e8e8e9;
      &.selected {
        background: #ff898d;
      }
    }
  }
}
</style>