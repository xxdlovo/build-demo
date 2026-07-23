<template>
      <!-- <button @click="refresh" style="padding: 8px 16px; background-color: #42b983; color: white; border: none; border-radius: 4px; cursor: pointer;">
    升级测试
  </button> -->
  <h3>版本3</h3>
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; gap: 12px;">
    <span>我是版本3</span>
    <button @click="refresh" style="padding: 8px 16px; background-color: #42b983; color: white; border: none; border-radius: 4px; cursor: pointer;">
      刷新_v0.2
    </button>
    <button @click="queryDb" style="padding: 8px 16px; background-color: #409eff; color: white; border: none; border-radius: 4px; cursor: pointer;">
      查询数据库
    </button>
    <div>
      请点击刷新按钮: {{ msg }}
    </div>
    <div v-if="dbResult" style="border: 1px solid #ccc; padding: 12px; border-radius: 4px; max-width: 600px;">
      <pre>{{ dbResult }}</pre>
    </div>
  </div>

</template>

<script lang="ts" setup>
const msg = ref('')
const dbResult = ref<any>(null)

const refresh =async () => {
  msg.value = '刷新中...'
  const resp = await $fetch('/api/test')
  msg.value = resp as string
}

const queryDb = async () => {
  dbResult.value = '查询中...'
  const resp = await $fetch('/api/query-test')
  dbResult.value = JSON.stringify(resp, null, 2)
}
</script>

<style>

</style>