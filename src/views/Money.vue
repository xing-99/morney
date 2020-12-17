<template>
    <Layout class-prefix="layout">
      <NumberPad/>
      <Notes/>
      <Types/>
      <Tags/>
    </Layout>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import Notes from '@/components/Money/Notes.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
export default {
  name: 'Money',
  components: {Types, Tags, NumberPad, Notes, Layout}
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>