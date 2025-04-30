
export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
    description: string;
}

export interface CartRequest {
    id: number;
    colorCode: number;
    storageCode: number;
}


export interface CartResponse {
    count: number;
}

