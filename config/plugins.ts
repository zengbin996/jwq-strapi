import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
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
