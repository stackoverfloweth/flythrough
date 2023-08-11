<template>
  <div class="app">
    <RouterView />
    <div class="app__footer">
      reach me <a href='https://github.com/stackoverfloweth'>@stackoverfloweth</a>
    </div>
  </div>
</template>

<style>
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.app__footer {
  font-size: 11px;
  color: #4c4c4c;
}
</style>