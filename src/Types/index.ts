import { Asset, Entry } from 'contentful';

type TagType = string[];

// type SpaceType = {};

// type EnvType = {};

type ContentType = {
  sys: {
    id: 'feTools';
    linkType: 'ContentType';
    type: 'Link';
  };
};

export type FieldType = {
  title: string;
  thumbnail?: Asset | undefined;
  link: string;
  tag?: TagType | undefined;
  description?: string | undefined;
  category?: 'font' | 'html/css' | 'image' | 'js/ts' | 'other' | undefined;
};

export type ToolType = {
  metadata: { tags: [] };
  sys: {
    id: string;
    space: any;
    type?: 'Entry';
    createdAt?: string;
    updatedAt?: string;
    environment?: any;
    revision: 1;
    contentType: ContentType;
    locale: 'en-US';
  };
  fields: FieldType;
  //   fields: {
  //     title: string;
  //     thumbnail: Asset | undefined;
  //     link: string;
  //     tag: TagType;
  //     description: string;
  //     category: 'font' | 'html/css' | 'image' | 'js/ts' | 'other';
  //   };
};

export type Tools = ToolType[];
