export default {
    install(Vue) {
        Vue.prototype.common = {
            hello(greeting = 'hello vue') {
                console.log(greeting);
            },
        };
    }
};