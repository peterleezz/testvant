import wepy from 'wepy';

export default class BaseMixin extends wepy.mixin {
    data = {
    }

    methods = {
        async formSubmit(e) {
            try {
                console.log('base form submit')
                let form_id = e.detail.formId
                this.$parent.uploadFormId(form_id)
            } catch ( error ) {
                wepy.showToast({
                    title: error.message
                })
            }
        }
    }

    async onLoad() {
        this.$apply()
    }
}
