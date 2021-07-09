export default {
    data() {
        return {
            modal_show: false
        }
    },
    methods: {
        showModal() {
            this.modal_show = true;
        },
        closeModal() {
            this.modal_show = false;
        }
    },
    created() {
        console.log('mixin creaed...')
    },
    
}