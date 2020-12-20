<template>
    <Layout class-prefix="layout">
      {{record}}
      <NumberPad @update:value="onUpdateAccount"/>
      <Notes @update:value="onUpdateNotes"/>
      <Types :value.sync="record.type"/>
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Layout from '@/components/Layout.vue';
import Notes from '@/components/Money/Notes.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import {Component} from 'vue-property-decorator';

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
}
@Component ({
  components: {Types, Tags, NumberPad, Notes, Layout},
})
export default class Money extends Vue{

  tags = ['衣', '食', '住', '行'];
  record: Record = {
  tags: [], notes: '', type: '-', amount: 0
  }
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateAccount(value: string) {
    this.record.amount = parseFloat(value);
  }
  onUpdateNotes(value: string) {
    this.record.notes = value
  }

}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>