export interface IImage {
  uri: string;
  __typename: string;
}

export interface IProductCategory {
  name: string;
  __typename: string;
}

export interface IExpert {
  firstName: string;
  lastName: string;
  company: string;
  title: string;
  __typename: string;
}

export interface IContent extends IImage, IProductCategory, IExpert {
  name: string;
  id: string;
  categories: [IProductCategory];
  experts: [IExpert];
  image: IImage;
  __typename: string;
}
