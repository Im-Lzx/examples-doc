
<script setup>
import rectangle from './components/rectangle.vue';
</script>

# rectangle-定宽正方形
::: tip 关键词
css属性 padding: 100%
:::

## 效果
<rectangle />

## 实现
```vue
<template>
  <div class="rectangle">
    <div class="inner"></div>
  </div>
</template>

<style lang="scss">
.rectangle {
  margin: 0 auto;
  width: 300px;
  box-sizing: border-box;
  background: red;
  .inner {
    padding-top: 100%;
  }
}
</style>
````



