
<script setup>
import filterBlur from './components/filterBlur.vue';
</script>

# filterBlur-背景虚化
::: tip 关键词
css属性：filter blur
:::

## 效果
<filterBlur />

## 实现
```vue
<template>
  <div>
    <div class="title">背景虚化</div>
    <p class="filter">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim aliquam
      tempore sunt aspernatur qui nesciunt error asperiores, sequi odit,
      pariatur dolorem illo, adipisci cum totam! Incidunt placeat nobis facere?
      Pariatur.
    </p>
  </div>
</template>

<style lang="scss">
.filter {
  filter: blur(2px);
}
</style>
````



