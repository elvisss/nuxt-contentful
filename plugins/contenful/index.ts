import { createClient, ContentfulClientApi } from 'contentful'

export class Contentful {
  private client: ContentfulClientApi

  constructor($config: any) {
    const config = {
      space: $config.ctfSpaceId,
      accessToken: $config.ctfCdaAccessToken,
    }
    this.client = createClient(config)
  }

  getClient(): ContentfulClientApi {
    return this.client
  }
}
