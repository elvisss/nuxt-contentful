<template>
  <div>Recipe Details {{ recipe.fields.title }}</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'RecipePage',
})
export default class RecipePage extends Vue {
  recipe: Object = {}

  async asyncData({ $contentful, route }: { $contentful: any; route: any }) {
    const client = $contentful.getClient()
    const { items } = await client.getEntries({
      content_type: 'recipe',
      'fields.slug': route.params.slug,
    })
    return {
      recipe: items[0],
    }
  }

  mounted() {
    console.log(this.recipe)
  }
}
</script>

<style></style>
