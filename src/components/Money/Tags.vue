<template>
  <div class="tags">
    <ul class="current">
      <li>
        <Icon name="clothes"/>
        衣
      </li>
      <li>
        <Icon name="eat"/>
        食
      </li>
      <li>
        <Icon name="house"/>
        住
      </li>
      <li>
        <Icon name="car"/>
        行
      </li>
      <li>
        <Icon name="medical"/>
        医疗
      </li>
      <li>
        <Icon name="game"/>
        游戏
      </li>
      <li>
        <Icon name="add"/>
        添加
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
name: "Tags"
}
</script>

<style lang="scss" scoped>
.tags {
  padding: 16px;
  font-size: 14px;
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
  > .current{
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    > li {
      display: flex;
      flex-direction: column;
      width: 25%;
      align-items: center;
      justify-content: center;
      padding-top: 5px;
    }
  }
}
</style>