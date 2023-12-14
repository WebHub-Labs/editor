import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const FeaturedProduct = () => {
  return (
    <Flex flexDirection="column" padding={8}>
      <Flex flexDirection="column" gap={2}>
        <Text className="featured-collections-header-text">
          Featured Product
        </Text>
        <Text className="featured-collections-header-secondaryText">
          Our sleek and sophisticated induction cooker is designed to elevate
          your cooking experience. Its slim and stylish profile seamlessly
          blends into any modern kitchen.
        </Text>
      </Flex>
      <Flex justifyContent="center" gap={4}>
        <Flex className="product-image" width="50%">
          <Image src="https://cdn.blanxer.com/uploads/63c7c5c7179af50e6707c23b/product_image-induction3-1036.png" />
        </Flex>
        <Flex
          flexDirection="column"
          // justifyContent="center"
          alignItems="center"
          width="50%"
        >
          <Flex flexDirection="column">
            <Text fontSize={32} fontWeight={600}>
              Omega 1.0 Ton Wall Mounted Air Conditioner With Free Installation
            </Text>
            <Text fontSize={16} fontWeight={600}>
              रू 5,000 रू 4,799 4% OFF
            </Text>
          </Flex>
          <Flex></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FeaturedProduct;
