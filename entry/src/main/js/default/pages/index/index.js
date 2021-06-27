import router from '@system.router';
import app from '@system.app';

export default {
    data: {
        title: ""
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    launch() {
        const info = app.getInfo();
        console.log(JSON.stringify(info));
        router.push({
            uri: 'pages/details/details'
        })
    }
}
