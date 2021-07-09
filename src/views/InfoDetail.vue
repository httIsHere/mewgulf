<!--
 * @Author: your name
 * @Date: 2020-04-27 10:58:53
 * @LastEditTime: 2020-04-29 00:41:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /mewgulf/src/views/InfoDetail.vue
 -->
<template>
    <div class="container container-info-detail">
        <div class="container-inner" @click="showModal">info-detail</div>
    </div>
</template>
<script>
import mixin from '@/util/mixin.js';
export default {
    mixins: [ mixin ],
    created() {
        console.log('component created...')
    }
}
</script>