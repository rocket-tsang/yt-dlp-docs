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
  if (route.path.startsWith('/en/')) return "Author's Blog"
  if (route.path.startsWith('/ja/')) return "著者のブログ"
  if (route.path.startsWith('/ko/')) return "저자의 블로그"
  return "作者博客"
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