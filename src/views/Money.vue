<template>
  <div>
    <header>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </header>
    <Layout>
      <div>
        <label class="output">
          <span class="pay">支出</span>
          <input type="text">
        </label>
      </div>
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text">
        </label>
      </div>
      <div class="tags">
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
      </div>
      <div class="numberPad">
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
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </div>
    </Layout>
  </div>

</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
export default {
  name: 'Money',
  components: {Layout}
};
</script>

<style lang="scss" scoped>
</style>