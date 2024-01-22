<template>
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)

const onClickLeft = function () {
    console.log("11")
}
</script>
<style></style>