import {OrderProduct} from './order-product';

export  class Order{
    constructor(public orderId: number, public fullName: string, public orderNumber: string, public orderDate: string, public statusId: number,
        public shippingNumber: string, public billingAddress1: string, public billingAddress2: string,
        public billingCity: string, public billingZipcode: string, public shippingAddress1: string,
        public shippingAddress2: string, public shippingACity: string, public shippingZipcode: string,
        public comments: string, public datePlaced: string, public total: number, public shipping: number,
        public tax: number, public active: boolean, public billingCountryId: number,
        public shippingCountryId: number,
        public orderProducts: OrderProduct[],
        public dateShipped?: string, public billingStateId?: number,
        public billingProvinceId?: number, public shippingStateId?: number, public shippingProvinceId?: number,
        public userId?: number
        ){}
}
