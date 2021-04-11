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
        <NuxtLink :to="{ name: 'recipes-slug', params: { slug } }">
          Cook this 222
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class RecipeCard extends Vue {
  @Prop() title!: string
  @Prop() slug!: string
  @Prop() cookingTime!: number
  @Prop() thumbnail!: Object
}
</script>

<style scoped lang="scss">
.card {
  transform: rotateZ(-1deg);
}
.content {
  background: #fff;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  margin: 0;
  position: relative;
  top: -40px;
  left: -10px;
}
.info {
  padding: 16px;
}
.info h4 {
  margin: 4px 0;
  text-transform: uppercase;
}
.info p {
  margin: 0;
  color: #777;
}
.actions {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.actions a {
  color: #fff;
  background: #f01b29;
  padding: 16px 24px;
  text-decoration: none;
}
</style>
