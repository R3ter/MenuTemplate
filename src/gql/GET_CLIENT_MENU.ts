import { gql } from "@apollo/client";

export default gql`
  query GetClientMenu($shopId: String) {
    getClientMenu(shopId: $shopId) {
      id
      title
      order
      image
      items {
        id
        title
        desc
        image
        available
        price
        availabilityState
        hot
        new
        order
        optionCount
      }
    }
  }
`;
