<template>
  <div>
    <div class="title">css 绘制三角形</div>
    <ol class="flex-row">
      <li class="triangle all"></li>
      <li class="triangle top"></li>
      <li class="triangle left"></li>
      <li class="triangle right"></li>
      <li class="triangle bottom"></li>

      <li class="triangle topLeft"></li>
      <li class="triangle topRight"></li>
      <li class="triangle bottomLeft"></li>
      <li class="triangle bottomRight"></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "triangle",
};
</script>

<style lang="scss" scoped>
ol {
  flex-wrap: wrap;
  --top-color: var(--root-red);
  --left-color: var(--root-green);
  --right-color: var(--root-blue);
  --bottom-color: var(--root-yellow);
}
li {
  width: 0;
  height: 0;
  border-width: 30px;
  border-style: solid;
  background: transparent;
  border-color: transparent;
  margin-bottom: 20px;
  margin-right: 50px;
}
.all {
  border-top-color: var(--top-color);
  border-left-color: var(--left-color);
  border-right-color: var(--right-color);
  border-bottom-color: var(--bottom-color);
}
.top {
  border-top-color: var(--top-color);
}
.left {
  border-left-color: var(--left-color);
}
.right {
  border-right-color: var(--right-color);
}
.bottom {
  border-bottom-color: var(--bottom-color);
}
.topLeft {
  border-top-color: var(--left-color);
  border-left-color: var(--left-color);
}
.topRight {
  border-top-color: var(--right-color);
  border-right-color: var(--right-color);
}
.bottomLeft {
  border-bottom-color: var(--top-color);
  border-left-color: var(--top-color);
}
.bottomRight {
  border-bottom-color: var(--bottom-color);
  border-right-color: var(--bottom-color);
}
</style>
