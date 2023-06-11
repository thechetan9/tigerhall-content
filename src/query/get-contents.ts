import { gql } from '@apollo/client';

export const GET_CONTENTS = gql`
  query getContents($filter: ContentCardsFilter) {
    contentCards(filter: $filter) {
      edges {
        ... on Podcast {
          id
          image {
            uri
          }
          name
          categories {
            name
          }
          experts {
            firstName
            firstName
            lastName
            title
            company
          }
        }
      }
    }
  }
`;
