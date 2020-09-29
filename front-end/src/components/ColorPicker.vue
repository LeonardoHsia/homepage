<template>
    <ul class="color-list">
        <li class="color-item" v-for="(c, idx) in colors" :key="idx" :style="{background: c.color}">
            <span></span>
        </li>
    </ul>
</template>

<script>
import Super from './Super'
export default {
    extends: Super,
    data () {
        return {
            colors: [
                {
                    color: '#FFFFFF',
                    text: '#FFFFFF'
                }, {
                    color: '#CACBC9',
                    text: '#CACBC9'
                }, {
                    color: '#FFD14B',
                    text: '#FFD14B'
                }, {
                    color: '#FFC5D1',
                    text: '#FFC5D1'
                }, {
                    color: '#4C83BC',
                    text: '#4C83BC'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.color-list {
    display: flex;
    justify-content: center;
    align-content: center;
    position: fixed;
    left: 1rem;
    bottom: 1rem;
    z-index: 9999;
    border: .1rem solid rgba(0,0,0,0.4);

    .color-item {
        display: inline-block;
        width: 1rem;
        height: 2.4rem;

        &:not(:last-child) {
            border-right: .1rem solid #FFF;
        }
    }
}

</style>
