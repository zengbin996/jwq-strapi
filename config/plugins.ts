import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        title: 'jwq-strapi API',
        version: '1.0.0',
        description: '个人网站后端接口文档',
      },
      'x-strapi-config': {
        mutateDocumentation: (generatedDocumentationDraft: Record<string, unknown>) => {
          return generatedDocumentationDraft;
        },
      },
    },
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: `https://${env('TENCENT_BUCKET')}.cos.${env('TENCENT_REGION')}.myqcloud.com`,
        s3Options: {
          forcePathStyle: false,
          useAccelerateEndpoint: false,

          credentials: {
            accessKeyId: env('TENCENT_SECRET_ID'),
            secretAccessKey: env('TENCENT_SECRET_KEY'),
          },

          region: env('TENCENT_REGION'),

          endpoint: `https://cos.${env('TENCENT_REGION')}.myqcloud.com`,

          params: {
            Bucket: env('TENCENT_BUCKET'),
          },
        },
      },
    },
  },
});

export default config;
