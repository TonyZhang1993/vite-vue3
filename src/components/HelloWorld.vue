<script setup lang="ts">
import { ref } from 'vue'
import mittBus from '@/utils/mittBus'
import { useGlobalStore } from '@/stores/modules/global'
import { storeToRefs } from 'pinia'
import { getGraphTaskDetailsBatchApi } from '@/api/modules/test'

defineProps<{ msg: string }>()

const count = ref(0)

const plus = async () => {
  count.value++
  mittBus.emit('countPlus')
  globalStore.views++
  globalStore.$patch({
    maximize: true
  })

  globalStore.$patch((state) => {
    state.maximize = true
    state.primary = '#a7a7a7'
  })

  await getGraphTaskDetailsBatchApi({
    data: {
      test: 'zjlab',
      age: 5,
      center: [1, 2, 3]
    }
  })

  // await getTask({
  //   test: 'zjlab',
  //   age: 5,
  //   center: [1, 2, 3]
  // })

  // await getMember()
  // await getTask({
  //   test: 'zjlab',
  //   age: 5,
  //   center: [1, 2, 3]
  // })

  // await addUser({
  //   id: 'test'
  // })
}

const globalStore = useGlobalStore()
const { maximize, isCollapse, tabs, footer } = storeToRefs(globalStore)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="plus">count is {{ count }}</button>
    <p>maximize: {{ maximize }}</p>
    <p>isCollapse: {{ isCollapse }}</p>
    <p>tabs: {{ tabs }}</p>
    <p>footer: {{ footer }}</p>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"> create-vue </a>
    , the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
