export class OrderProduct{
    constructor(public orderProductId: number, public orderId: number, public productId: number,
        public productName: string, public quantity: number, public pricePerUnit: number, public totalPrice: number, 
        public shipping: number, public downloadKey: string, public downloadUrl: string, 
        public orderDate: string, public active: boolean, public discount?: number){}
}