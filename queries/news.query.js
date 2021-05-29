import {gql} from "@apollo/client";

export const GET_NEWS =  gql`
query getNews {
  posts {
    content {
      raw
    }
    slug
    title
    tags
    createdAt
    excerpt
    coverImage {
      url
    }
  }
}`;
export const GET_NEWS_TOP =  gql`
query getNews {
  posts(last:3) {
    content {
      raw
    }
    slug
    title
    tags
    createdAt
    excerpt
    coverImage {
      url
    }
  }
}`;

export const GET_NEWS_BY_SLUG =  gql`
query getNewsBySlug($slug:String!) {
  post(where:{slug:$slug}) {
    author {
      name
    }
    content {
      html
    }
    createdAt
    title
    tags
    coverImage {
      url
    }
  }
}`;
