<template lang="html">
    <div title="主页">
        <Logo></Logo>
        <p class="greeting">{{ greeting }}</p>
    </div>
</template>

<script>
import Logo from './components/Logo';

export default {
    components: {
        Logo,
    },
    data() {
        return {
            greeting: `请开始你的表演`,
        };
    },
    mounted() {
        this.common.hello()
    },
}
</script>

<style lang="scss">
.Loading,
.greeting {
    text-align: center;
}
.card {
    list-style: none;
    padding: 0;

    .item {
        background-color: #eee;
        box-sizing: border-box;
        padding: 20px;
    }
}
</style>
