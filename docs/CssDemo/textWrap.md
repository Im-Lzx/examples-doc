
<script setup>
import textWrap from './components/textWrap.vue';
</script>

# textWrap-文字环绕
::: tip 关键词
css属性：float、shape-outside
:::

## 效果
<textWrap />

## 实现
```vue
<template>
  <div class="text-wrap">
      <div class="circle"></div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
      inventore facere repellendus temporibus aspernatur! Praesentium quae
      soluta veritatis tempora sunt, maxime distinctio sed exercitationem nobis
      quod, ducimus illum, in magnam. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Quidem unde veritatis quaerat aperiam sint, quibusdam
      reiciendis fuga impedit tempora dignissimos alias nisi, omnis sed?
      Repudiandae fugiat tempora est natus? Voluptatem.
  </div>
</template>

<style lang="scss" scoped>
.text-wrap {
  text-align: left;
  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: olivedrab;
    float: left;
    shape-outside: circle();
    margin-right: 10px;
  }
}
</style>
````



