import axios from "axios";

export async function getAllProducts() {
  try {
    // console.log("key", process.env.NEXT_PUBLIC_RAJA_ONGKIR_KEY);
    const response = await axios.get(
      process.env.NEXT_PUBLIC_GET_ALL_PRODUCTS || ""
    );

    const results = response.data?.data;

    return { status: "OK", data: results };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        status: "ERROR",
        error: error.response?.data || error.message,
      };
    }
    return { status: "ERROR", error: String(error) };
  }
}

export async function getProductBySlug(slug: string) {
  try {
    // console.log("key", process.env.NEXT_PUBLIC_RAJA_ONGKIR_KEY);
    const response = await axios.get(
      process.env.NEXT_PUBLIC_GET_PRODUCT_BY_SLUG + slug || ""
    );

    const results = response.data?.data;

    return { status: "OK", data: results };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        status: "ERROR",
        error: error.response?.data || error.message,
      };
    }
    return { status: "ERROR", error: String(error) };
  }
}
