export  class OrderBriefInfo{
    constructor(public id: number, public userId: number, public fullName: string, public orderNumber: string, 
        public orderStatus: string, public shippingProvince: string, public shippingCountry: string,
        public comments: string, public orderDate: string, public dateShipped: string, 
        public total: number, public shipping: number, public tax: number, public active: boolean,         
        ){}
}
