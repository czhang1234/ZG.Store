export  class OrderList{
    constructor(public orderId: number, public userId: number, public fullName: string, public orderNumber: string, 
        public orderStatus: string, public shippingProvince: string, public shippingCountry: string,
        public comments: string, public datePlaced: string, public dateShipped: string, 
        public total: number, public shipping: number, public tax: number, public active: boolean,         
        ){}
}
