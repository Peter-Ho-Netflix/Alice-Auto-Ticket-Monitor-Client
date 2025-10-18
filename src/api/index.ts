import axios, { AxiosInstance } from 'axios';

class AxiosBase {
    private axiosInstance: AxiosInstance;
    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL: baseURL,
        });
    }
    get(url: string, params: any) {
        return this.axiosInstance.get(url, { params });
    }
    post(url: string, data: any) {
        return this.axiosInstance.post(url, data);
    }
    put(url: string, data: any) {
        return this.axiosInstance.put(url, data);
    }
    delete(url: string, params: any) {
        return this.axiosInstance.delete(url, { params });
    }
    patch(url: string, data: any) {
        return this.axiosInstance.patch(url, data);
    }
    head(url: string, params: any) {
        return this.axiosInstance.head(url, { params });
    }
    options(url: string, params: any) {
        return this.axiosInstance.options(url, { params });
    }
}

class WSBase {
    private wsInstance: WebSocket;
    constructor(url: string) {
        this.wsInstance = new WebSocket(url);
    }
    onopen(callback: () => void) {
        this.wsInstance.onopen = callback;
    }
    onmessage(callback: (event: MessageEvent) => void) {
        this.wsInstance.onmessage = callback;
    }
    onclose(callback: () => void) {
        this.wsInstance.onclose = callback;
    }
    onerror(callback: (event: Event) => void) {
        this.wsInstance.onerror = callback;
    }
    send(data: any) {
        this.wsInstance.send(data);
    }
    close() {
        this.wsInstance.close();
    }
}

export default {
    AxiosBase,
    WSBase,
}