import { queryStringify } from "../../utils/queryString";
import constants from "../constants";

const METHODS = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE'
};

type OptionsType = {
	method?: string;
	headers?: Record<string, string>;
	data?: unknown;
	timeout?: number;
};

type HTTPMethod = (url: string, options?: OptionsType) => Promise<unknown>

class HTTPTransport {
	private URL: string = constants.HOST;

	public buildURL(path: string) {
		return `${this.URL}${path}`
	}
	
	public get: HTTPMethod = (url, options = {}) => {
		return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
	};

	public post: HTTPMethod = (url, options = {}) => {
		return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
	};

	public put: HTTPMethod = (url, options = {}) => {
		return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
	};

	public delete: HTTPMethod = (url, options = {}) => {
		return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
	};

	request = (url: string, options: OptionsType, timeout: number = 5000) => {
		const { method, data, headers } = options;

		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

			if (method === METHODS.GET && data) {
				xhr.open(method, `${url}${queryStringify(data as Record<string, unknown>)}`);
			} else if (method) {
				xhr.open(method, url);
			}

			for (const key in headers) {
				xhr.setRequestHeader(key, headers[key])
			}

			xhr.onload = function (e: ProgressEvent<EventTarget>) {
				const request = e.target as XMLHttpRequest;
				if (request.status !== 200) {
					reject( new Error (JSON.parse(request.response).reason));
					return;
				}

				let response;
				try {
					response = JSON.parse(xhr.response);
				} catch {
					response = xhr.response;
				}
				resolve({
					status: xhr.status,
					response
				});
			};

			xhr.timeout = timeout;
			xhr.onerror = reject;
			xhr.onabort = reject;
			xhr.ontimeout = reject;
			// try catch ? 
			if (method === METHODS.GET) {
				xhr.send();
			} else if (data instanceof FormData) {
				xhr.send(data)
			} else {
				xhr.send(JSON.stringify(data));
			}
		})
	};
}

const HTTP = new HTTPTransport();
export { HTTP as HTTP };
