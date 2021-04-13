<template>
  <div>
    <div class="banner">
      <img
        :src="featuredImage.fields.file.url"
        :width="featuredImage.fields.file.details.image.width"
        :height="featuredImage.fields.file.details.image.height"
        :alt="title"
      />
      <h2>{{ title }}</h2>
    </div>

    <div class="info">
      <p>Take about {{ cookingTime }} mins to cook.</p>
      <h3>ingredients:</h3>
      <span v-for="ing of ingredients" :key="ing">{{ ing }}</span>
    </div>

    <div class="method">
      <h3>Method:</h3>
      <div v-html="richTextMethod"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'RecipePage',
})
export default class RecipePage extends Vue {
  featuredImage: Object = {}
  title: string = ''
  cookingTime: number = 0
  ingredients: Array<string> = []
  method: any = ''

  async asyncData({ $contentful, route }: { $contentful: any; route: any }) {
    const client = $contentful.getClient()
    const { items } = await client.getEntries({
      content_type: 'recipe',
      'fields.slug': route.params.slug,
    })

    const {
      featuredImage,
      title,
      cookingTime,
      ingredients,
      method,
    } = items[0].fields

    return {
      featuredImage,
      title,
      cookingTime,
      ingredients,
      method,
    }
  }

  mounted() {}

  get richTextMethod() {
    return documentToHtmlString(this.method)
  }
}
</script>

<style lang="scss" scoped>
h2,
h3 {
  text-transform: uppercase;
}
.banner h2 {
  margin: 0;
  background: #fff;
  display: inline-block;
  padding: 20px;
  position: relative;
  top: -60px;
  left: -10px;
  transform: rotateZ(-1deg);
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
}
.info p {
  margin: 0;
}
.info span::after {
  content: ', ';
}
.info span:last-child::after {
  content: '.';
}
</style>
