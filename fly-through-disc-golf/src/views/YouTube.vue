<template>
  <div class="you-tube">
    <iframe :src="src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</template>

<script lang="ts" setup>
  import {computed} from 'vue'
  import {useRoute} from 'vue-router'

  const route = useRoute()
  const src = computed(() => `https://www.youtube.com/embed/${route.meta.videoId}`)
</script>

<style>
.you-tube {
  max-width: 85%;
	padding-top: 47.8125%;
	position: relative;
	width: 100%;
}

iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
}
</style>