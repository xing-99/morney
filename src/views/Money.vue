<template>
    <Layout class-prefix="layout">
      <NumberPad/>
      <Notes/>
      <Types/>
      <Tags :data-source.sync="tags"/>
    </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import Notes from '@/components/Money/Notes.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
export default {
  name: 'Money',
  components: {Types, Tags, NumberPad, Notes, Layout},
  data() {
    return {
      tags: ['衣', '食', '住', '行'],
    }
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>