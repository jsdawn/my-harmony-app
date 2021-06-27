import fetch from '@system.fetch';

export default {
    data: {
        title: 'details',
        responseData: 'NA'
    },
    fetchDemo() {
        console.info('appInfo: 111');
        this.responseData = "数据请求中..."
        // fetch 调试：模拟器+权限+http
        fetch.fetch({
            url: "http://47.106.69.35:3000/test/demo",
            responseType: "json",
            success: (response) => {
                console.info("appInfo: " + JSON.stringify(response));
                const res = JSON.parse(response.data);
                console.info("appInfo: " + JSON.stringify(res));
                this.responseData = res.data.msg;
            },
            fail: (error) => {
                this.responseData = 'error: ' + JSON.stringify(error);
            }
        })
    }
}
