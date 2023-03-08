
<template>
  <div class="w-full lg:w-9/12 ma-content-block rounded-sm p-3 mt-3">

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import commonApi from '@/api/common';

const data = ref([])
const columns = reactive([
  { title: '标题', dataIndex: 'title', slotName: 'title' },
  { title: '发布时间', dataIndex: 'created_at', width: 180, align: 'right' },
])

const row = ref({})
const detailVisible = ref(false)

const viewDetail = async (record) => {
  row.value = record
  detailVisible.value = true
}

const getNoticeList = async () => {
  const res = await commonApi.getNoticeList({ pageSize: 5, orderBy: 'id', orderType: 'desc' })
  data.value = res.data.items
}



getNoticeList()
</script>
