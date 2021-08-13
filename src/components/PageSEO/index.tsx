import Head from 'next/head';
import config from '../../../site.config';
import React from 'react';

interface ITitle {
  title: string;
}

export const PageSEO = ({ title }: ITitle) => (
  <Head>
    <title>{`${config.siteMeta.title} - ${title}`}</title>
    <meta
      name='title'
      content={`${config.siteMeta.title} | ${config.siteMeta.subTitle} `}
    />
    <meta name='description' content={config.siteMeta.description} />
    <meta name='author' content={config.siteMeta.author} />
    <meta name='keywords' content={config.siteMeta.keywords} />
    <meta name='google-site-verification' content={config.siteMeta.gsc} />

    <meta property='og:type' content='website' />
    <meta property='og:url' content={config.siteMeta.url} />
    <meta
      property='og:title'
      content={`${config.siteMeta.title} | ${config.siteMeta.subTitle} `}
    />
    <meta property='og:description' content={config.siteMeta.description} />
    <meta property='og:image' content={config.siteMeta.image} />

    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:url' content={config.siteMeta.url} />
    <meta
      property='twitter:title'
      content={`${config.siteMeta.title} | ${config.siteMeta.subTitle} `}
    />
    <meta
      property='twitter:description'
      content={config.siteMeta.description}
    />
    <meta property='twitter:image' content={config.siteMeta.image} />
  </Head>
);
