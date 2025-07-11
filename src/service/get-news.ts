import axios from "axios";

export async function getAllNews() {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_GET_ALL_NEWS || ""
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

export async function getNewsBySlug(slug: string) {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_GET_NEWS_BY_SLUG + slug || ""
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
