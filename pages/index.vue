<template>
  <div class="recipe-list">
    <RecipeCard
      v-for="recipe in recipes"
      :key="recipe.sys.id"
      v-bind="recipe.fields"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import RecipeCard from '~/components/RecipeCard.vue'

@Component({
  components: {
    RecipeCard,
  },
})
export default class IndexPage extends Vue {
  recipes: Array<any> = []

  async asyncData({ $contentful }: { $contentful: any }) {
    const client = $contentful.getClient()
    const { items } = await client.getEntries({
      content_type: 'recipe',
    })
    return {
      recipes: items,
    }
  }

  mounted() {
    console.log(this.recipes)
  }
}
</script>

<style scoped lang="scss">
.recipe-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 60px;
}
</style>
