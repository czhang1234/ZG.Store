import {OrderBriefInfo} from './order-brief-info';

export class OrderListViewModel{
    constructor(private orderList: OrderBriefInfo[], private totalOrders: number){}
}