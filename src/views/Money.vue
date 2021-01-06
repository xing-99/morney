<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAccount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"
    />
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="有什么需要记的"
                @update:value="onUpdateNotes"/>
    </div>
    <Tags/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import FormItem from '@/components/Money/FormItem.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tabs from '@/components/Tabs.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';
import Tags from '@/components/Money/Tags.vue';

@Component({
  components: {Tabs, Tags, NumberPad, FormItem},
})
export default class Money extends Vue {

  recordTypeList = recordTypeList
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };
  get recordList() {
    return this.$store.state.recordList
  }
  created(){
    this.$store.commit('fetchRecords')
  }
  onUpdateAccount(value: string) {
    this.record.amount = parseFloat(value);
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    this.$store.commit('createRecord', this.record)
  }

}
</script>

<style lang="scss" scoped>
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 6px 0;
}
</style>