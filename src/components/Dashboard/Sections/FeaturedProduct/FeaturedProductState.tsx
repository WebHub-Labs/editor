export interface FeaturedProductState {
  isPresent: boolean;
  headerText: string;
  subHeaderText: string;
  content: {
    image: {
      url: string;
      width: string;
    };
    name: string;
    MRP: string;
    sellingPrice: string;
    priceOff: string;
  };
}
