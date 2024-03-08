import { FeaturedProductState } from "./FeaturedProductState";
import { createFeaturedProductStore } from "../../../../core/statemanagement/useFeaturedProductStore";

export class AddFeaturedProduct {
  featuredProduct = createFeaturedProductStore();
  featuredProductState = this.featuredProduct.getState();
  constructor(props?: FeaturedProductState) {
    this.featuredProduct = createFeaturedProductStore({ ...props });
    this.featuredProductState = this.featuredProduct.getState();
  }
}

export default AddFeaturedProduct;
