import { queryStringify } from "../utils/queryString";

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

export default class HTTPTransport {
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

			if (method === METHODS.GET && data) {
				xhr.open(method, `${url}${queryStringify(data as Record<string, unknown>)}`);
			} else if (method) {
				xhr.open(method, url);
			}

			for (const key in headers) {
				xhr.setRequestHeader(key, headers[key])
			}

			xhr.onload = function () {
				resolve(xhr);
			}
			xhr.timeout = timeout;
			xhr.onerror = reject;
			xhr.onabort = reject;
			xhr.ontimeout = reject;

			if (method === METHODS.GET) {
				xhr.send();
			} else if (data) {
				xhr.send(data as XMLHttpRequestBodyInit);
			}
		})
	};
}
