<template>
  <div class="index__main-content">
    <form class="index__form" @submit.prevent="performSubmit">
      <Space align="center" direction="vertical">
        <h1>Susuko Pechi-pechi</h1>
        <p>Susuko wo pechi-pechi shiyou!</p>
        <Button type="primary" html-type="submit">ﾍﾟﾁﾍﾟﾁ</Button>
      </Space>
    </form>
  </div>
</template>

<script lang="ts">
import { Space, Button } from 'ant-design-vue'
import { defineComponent } from '@nuxtjs/composition-api'
import api from '~/services/api'

export default defineComponent({
  components: {
    Space,
    Button,
  },
  setup(_props, _context) {
    const performSubmit = async () => {
      const res = await api.getPechi()
      alert(res.pechi)
    }

    return { performSubmit }
  },
})
</script>

<style lang="scss" scoped>
.index__main-content {
  padding: 4em 0;
  min-height: 100vh;
}

.index__form {
  display: flex;
  justify-content: center;
}
</style>
