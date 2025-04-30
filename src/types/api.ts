
export interface ProductListItem {
    id: string;
    brand: string;
    model: string;
    price: string;
    imgUrl: string;
}

export interface CartRequest {
    id: number;
    colorCode: number;
    storageCode: number;
}


export interface CartResponse {
    count: number;
}

