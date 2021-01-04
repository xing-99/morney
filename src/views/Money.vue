<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAccount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
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
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import {Component} from 'vue-property-decorator';

@Component({
  components: {Types, Tags, NumberPad, FormItem},
  computed: {
    recordList() {
      return this.$store.state.recordList
    }
  }
})
export default class Money extends Vue {

  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };
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

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 6px 0;
}
</style>