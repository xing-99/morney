<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="不备注点什么吗">
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: "Notes"
}
</script>

<style lang="scss" scoped>
.notes {
  background: #F8F8F8;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
  }
}
</style>