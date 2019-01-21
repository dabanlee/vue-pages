<template lang="html">
    <div title="详情页">
        <p @click="toHome">toHome</p>
        <div style="text-align: center;" v-show="!story.title">Fetching...</div>
        <div class="Story">
            <h2>{{ story.title }}</h2>
            <p v-show="story.by">Author: {{ story.by }}</p>
            <p><a :href="story.url" target="_blank">{{ story.url }}</a></p>
        </div>
    </div>
</template>

<script>
import Hello from './components/Hello';

export default {
    data() {
        return {
            story: {},
        };
    },
    mounted() {
        console.log('this.App', this.App);
        console.log('This is page detail.');
        const id = this.App.data.id;
        this.bri.fetch({
            url: `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
        }).then(data => {
            console.log('data', data);
            this.story = data;
        })
    },
    methods: {
        toHome() {
            this.bri.to('index.html', {
                hello: 'world',
            })
        },
    },
}
</script>

<style lang="scss">

</style>
