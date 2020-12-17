<template>
    <Layout class-prefix="layout">
      <div class="head">
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
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
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text" placeholder="不备注点什么吗">
        </label>
      </div>
      <div class="numberPad">
        <div class="output">0</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">OK</button>
          <button class="zero">0</button>
          <button>.</button>
        </div>
      </div>
    </Layout>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
export default {
  name: 'Money',
  components: {Layout, Icon}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  border: 1px solid red;
  padding-top: 16px;
  flex-grow: 1;
  > .current{
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    > li {
      display: flex;
      flex-direction: column;
      width: 33.33333%;
      align-items: center;
      justify-content: center;
    }
  }
}
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
.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;

  }
  .buttons {
    @extend %clearFix;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      &.ok {
        height: 64*2px;
        float: right;
      }
      &.zero {
        width: 25*2%;
      }
    }
  }
}
</style>