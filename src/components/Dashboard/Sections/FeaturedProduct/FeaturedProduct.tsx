import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import AddFeaturedProduct from "./AddFeaturedProduct";
import { useStore } from "zustand";

const FeaturedProduct = ({
  featuredProduct,
}: {
  featuredProduct: AddFeaturedProduct;
}) => {
  const fp = useStore(featuredProduct.featuredProduct);
  return (
    <Flex flexDirection="column" padding={8}>
      <Flex flexDirection="column" gap={2}>
        <Text className="featured-collections-header-text">
          {fp.headerText}
        </Text>
        <Text className="featured-collections-header-secondaryText">
          {fp.subHeaderText}
        </Text>
      </Flex>
      <Flex justifyContent="center" gap={4}>
        <Flex className="product-image" width="50%">
          <Image src={fp.content.image.url} />
        </Flex>
        <Flex
          flexDirection="column"
          // justifyContent="center"
          alignItems="center"
          width="50%"
        >
          <Flex flexDirection="column">
            <Text fontSize={32} fontWeight={600}>
              {fp.content.name}
            </Text>
            <Text fontSize={16} fontWeight={600}>
              {fp.content.MRP} {fp.content.sellingPrice} {fp.content.priceOff}
            </Text>
          </Flex>
          <Flex></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FeaturedProduct;
