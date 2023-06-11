export interface CardImage {
  uri: string;
  __typename: string;
}

export interface CardIProductCategory {
  name: string;
  __typename: string;
}

export interface CardExpert {
  firstName: string;
  lastName: string;
  company: string;
  title: string;
  __typename: string;
}

export interface CardContent
  extends CardImage,
    CardIProductCategory,
    CardExpert {
  name: string;
  id: string;
  categories: [CardIProductCategory];
  experts: [CardExpert];
  image: CardImage;
  __typename: string;
}
