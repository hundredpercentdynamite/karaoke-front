import axios, { AxiosResponse } from 'axios';

export interface HttpClientI {
  get: <T>(url: string) => Promise<AxiosResponse<T>>;
}

export class HttpClient implements HttpClientI {
  constructor(baseURL?: string) {
    console.log('baseURL', baseURL);
    this.instance = axios.create({ baseURL });
  }
  private instance;
  get = async <T>(url: string): Promise<AxiosResponse<T>> => {
    try {
      return await this.instance.get<T>(url);
    } catch (e) {
      return Promise.reject();
    }
  }
}

export default new HttpClient(process.env.REACT_APP_API_URL);
