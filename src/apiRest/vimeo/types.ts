export type TypeVideo = {
  name: string;
  embed: {
    html: string;
  };
  player_embed_url: string;
  uri: string;
  pictures: {
    active: boolean;
    base_link: string | null;
  };
};

export type TypeVimeoAlbumsVideosResult = {
  data: TypeVideo[];
  paging: {
    first: string;
    last: string;
    next: string | null;
    previous: string | null;
  };
  page: number;
  perPage: number;
  total: number;
};
