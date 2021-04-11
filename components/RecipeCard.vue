<template>
  <div class="card">
    <div class="featured">
      <img
        :src="thumbnail.fields.file.url"
        :alt="title"
        :width="thumbnail.fields.file.details.image.width"
        :height="thumbnail.fields.file.details.image.height"
      />
    </div>
    <div class="content">
      <div class="info">
        <h4>{{ title }}</h4>
        <p>Takes aprox {{ cookingTime }} mins to make</p>
      </div>
      <div class="actions">
        <NuxtLink :to="`/recipes/${slug}`"> Go </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class RecipeCard extends Vue {
  @Prop() title: string
  @Prop() slug: string
  @Prop() cookingTime: number
  @Prop() title: string
  @Prop() thumbnail: Object
}
</script>

<style></style>
