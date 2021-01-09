<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAccount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"
    />
    <div class="createAt">
      <FormItem field-name="日期"
                type="date"
                placeholder="在这里输入日期"
                :value.sync="record.createdAt"
      />
    </div>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="有什么需要记的"
                :value.sync="record.notes"
    />
    </div>
    <Tags @update:value="record.tags = $event"/>
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
    tags: [], notes: '', type: '-', amount: 0, createdAt: new Date().toISOString()
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
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('请至少选择一个标签')
    }
    this.$store.commit('createRecord', this.record)
    if (this.$store.state.createRecordError === null) {
      window.alert('已保存')
      this.record.notes = ''
    }
  }

}
</script>

<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 6px 0;
}
</style>