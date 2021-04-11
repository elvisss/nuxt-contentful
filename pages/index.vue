<template>
  <div className="recipe-list">
    <RecipeCard
      v-for="recipe in recipes"
      :key="recipe.sys.id"
      v-bind="recipe.fields"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import RecipeCard from '~/components/RecipeCard'

@Component({
  components: {
    RecipeCard,
  },
})
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
