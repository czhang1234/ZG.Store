import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {OrderService} from '../../services/order.service';

import {OrderListViewModel} from '../../model/order-list-view-model';
import {OrderProduct} from '../../model/order-product';

@Component({
    selector: 'orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
    private orderListViewModel: OrderListViewModel;

    constructor(private orderService: OrderService, private router: Router){}

    ngOnInit(){
        this.orderService.getOrders(1)
            .then(orderListViewModel => this.orderListViewModel = orderListViewModel);
    }

    goToDetails(id: number): void{
        this.router.navigate(['/orderDetails', id]);
    }

    get diagnostic(){return JSON.stringify(this.orderListViewModel)}
}