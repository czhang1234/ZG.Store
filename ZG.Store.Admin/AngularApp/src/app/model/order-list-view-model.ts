import {OrderBriefInfo} from './order-brief-info';

export class OrderListViewModel{
    constructor(public orders: OrderBriefInfo[], public totalOrders: number){}
}