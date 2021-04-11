import { Contentful } from '~/plugins/contenful'

export default ({ $config }: { $config: any }, inject: any) => {
  inject('contentful', new Contentful($config))
}
