
<script setup>
import progressBar from './components/progressBar.vue';
</script>

# progressBar-进度条
::: tip 关键词
progress
:::

## 效果
<progressBar />

## 实现
```vue
<template>
  <div>
    <div class="title">进度条</div>
    <div class="">当前进度{{ percent }}%</div>
    <div class="progress">
      <div class="bar" :style="{ width: percent + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "progress-bar",
  data() {
    return {
      percent: 20,
    };
  },
};
</script>

<style lang="scss">
.progress {
  width: 100%;
  height: 50px;
  background-color: silver;
  border-radius: 25px;
  overflow: hidden;

  .bar {
    height: inherit;
    border-radius: 25px;
    background-color: #42b983;
  }
}
</style>
````



