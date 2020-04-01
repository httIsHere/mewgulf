<template>
  <div class="home">
    <person-info />
  </div>
</template>

<script>
// @ is an alias to /src
import PersonInfo from '@/components/personInfo.vue'

export default {
  name: 'Home',
  components: {
    PersonInfo
  }
}
</script>
