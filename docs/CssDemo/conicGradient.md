---

---

<script setup>
import ConicGradient from './components/conicGradient.vue';
</script>

# colourBar-彩带
::: tip 关键词
css属性：conic-gradient
:::

## 效果
<ConicGradient />

## 实现
```vue
<template>
  <div class="conic-gradient"></div>
</template>

<style lang="scss" scoped>
.conic-gradient {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 100px;
  background: conic-gradient(red 0 3%, green 30% 70%, blue 70% 100%);
}
</style>
````



