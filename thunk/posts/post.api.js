import { BaseAPI } from "../api";

export class PostApi extends BaseAPI {
	static newInstance = () => {
		if (!this.api) this.api = new PostApi();
		return this.api;
	};

	async getAllPosts() {
		return await this.getAxios().get("/posts");
	}
}
