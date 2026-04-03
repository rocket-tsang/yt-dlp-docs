<template>
  <span>
    MIT Licensed | Copyright © 2024 | <a href="https://blog.gzsoon.com" target="_blank" rel="noopener noreferrer">{{ authorBlogText }}</a>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const authorBlogText = computed(() => {
  return route.path.startsWith('/en/') ? "Author's Blog" : "作者博客"
})
</script>

<style scoped>
a {
  color: var(--c-text);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>