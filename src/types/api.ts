
export interface ProductListItem {
    id: string;
    brand: string;
    model: string;
    price: string;
    imgUrl: string;
}

export interface ProductDetail {
    id: string;
    brand: string;
    model: string;
    price: string;
    imgUrl: string;
    networkTechnology: string;
    networkSpeed: string;
    gprs: string;
    edge: string;
    announced: string;
    status: string;
    dimentions: string;
    weight: string;
    sim: string[];
    displayType: string;
    displayResolution: string;
    displaySize: string;
    os: string;
    cpu: string;
    chipset: string;
    gpu: string;
    externalMemory: string;
    internalMemory: string[];
    ram: string;
    primaryCamera: string[];
    secondaryCmera: string;
    speaker: string;
    audioJack: string;
    wlan: string;
    bluetooth: string;
    gps: string;
    nfc: string;
    radio: string;
    usb: string;
    sensors: string[];
    battery: string;
    colors: string[];
    options: {
      colors: ProductColorOption[];
      storages: ProductStorageOption[];
    };
}

export interface ProductColorOption {
    code: number;
    name: string;
}
  
export interface ProductStorageOption {
    code: number;
    name: string;
}

export interface CartRequest {
    id: string;
    colorCode: number;
    storageCode: number;
}


export interface CartResponse {
    count: number;
}

