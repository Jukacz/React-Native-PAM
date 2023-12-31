import axios, {AxiosInstance} from "axios";

export const requestToAPI = (endpoint: string, options?: {searchParams?: Record<string, any>, withoutBaseUrl?: boolean}) =>  {

    const {searchParams, withoutBaseUrl} = options || {};

    const url = new URL(!withoutBaseUrl ? `https://rickandmortyapi.com/api${endpoint}` : endpoint);
    const queryParams = new URLSearchParams(searchParams);

    const post = async (data: any) => {
        return await axios.post(url.href,data, {
            params: searchParams
        } );
    }

    const get = async() => {
        return await axios.get(url.href, {
            params: searchParams
        });
    }

    const put = async(data: any) => {
        return await axios.put(url.href, data, {
            params: searchParams
        });
    }

    const patch = (data: any) => {
        return axios.patch(url.href, data, {
            params: searchParams
        });
    }

    const del = () => {
        return axios.delete(url.href, {
            params: searchParams
        });
    }

    return {
        post,
        get,
        put,
        patch,
        del
    }
}

