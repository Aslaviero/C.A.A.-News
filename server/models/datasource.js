import { RESTDdataSource } from "apollo-datasource-rest";

const API_KEY = "0d11668f5e5325f011212b86a61636fe";
const API_URL = "https://gnews.io/api/v4/search?q=example&token=";

export class GnewsAPI extends RESTDdataSource {
  constructor() {
    super();
    this.baseURL = API_URL;
  }

  WillSendRequest(request) {
    request.params.set("apikey", API_KEY);
  }

  headlines(news, index) {
    return {
      title: gnews.title,
      description: gnews.description,
      publishedAt: gnews.publishedAt,
      image: gnews.image,
      content: gnews.content,
    };
  }

  async getTopHeadlines(requestbody) {
    const { language, country, query } = JSON.parse(
      JSON.stringify(requestbody.input)
    );
  }
}

module.exports = GnewsAPI;
