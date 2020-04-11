<template>
    <div class="view-box view-person-info"></div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.$axios.get('../static/info-card.json').then(res => {
            console.log(res)
        })
    }
}
</script>