
import apiSlice from "../api/api";

interface IProductData{
    name : string,
    price : number,
    description : string,
    image : string[],
    category : string[],
    quantity : number
}

const ProductApiExtend = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation<void, IProductData>({
      query: (productData) => ({
        url: "/product/addproduct",
        method: "POST",
        body: { productData },
      }),
    }),
    getProducts: builder.query({
      query: () => "/product/products",
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = ProductApiExtend;
