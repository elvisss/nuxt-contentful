import { createClient, ContentfulClientApi } from 'contentful'

export default ({ $config }: { $config: any }, inject: any) => {
  inject('contentful', {
    getClient(): ContentfulClientApi {
      const config = {
        space: $config.ctfSpaceId,
        accessToken: $config.ctfCdaAccessToken,
      }
      return createClient(config)
    },
  })
}
