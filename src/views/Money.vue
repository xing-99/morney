<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAccount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="有什么需要记的"
                @update:value="onUpdateNotes"/>
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from '@/components/Layout.vue';
import FormItem from '@/components/Money/FormItem.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import {Component} from 'vue-property-decorator';
import store from '@/store/index2';

@Component({
  components: {Types, Tags, NumberPad, FormItem, Layout},
})
export default class Money extends Vue {

  tags = store.tagList;
  recordList = store.recordList
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateAccount(value: string) {
    this.record.amount = parseFloat(value);
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    store.createRecord(this.record)
  }

}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 6px 0;
}
</style>