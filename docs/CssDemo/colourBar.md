
<script setup>
import ColourBar from './components/colourBar.vue';
</script>

# colourBar-彩带
::: tip 关键词
css属性：linear-gradient
:::

## 效果
<ColourBar />

## 实现
```vue
<template>
    <div class="colour-bar"></div>
</template>

<style lang="scss" scoped>
.colour-bar {
  width: 100%;
  height: 100px;
  background-color: red; /* 浏览器不支持的时候显示 */

  background-image: linear-gradient(
    20deg,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  ); /* 标准的语法（必须放在最后） */
}
</style>
````



