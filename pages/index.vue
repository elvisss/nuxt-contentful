<template>
  <div className="recipe-list">
    Recipe List
    <ul>
      <li v-for="recipe in recipes" :key="recipe.sys.id">
        <span>{{ recipe.fields.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue {
  async asyncData({ $contentful }: { $contentful: any }) {
    const client = $contentful.getClient()
    const res = await client.getEntries({
      content_type: 'recipe',
    })
    return {
      recipes: res.items,
    }
  }
}
</script>

<style></style>
