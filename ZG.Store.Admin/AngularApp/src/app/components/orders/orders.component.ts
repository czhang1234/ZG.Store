import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { OrderService } from '../../services/order.service';

import { OrderListViewModel } from '../../model/order-list-view-model';
import { OrderProduct } from '../../model/order-product';

@Component({
    selector: 'orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    private orderListViewModel: OrderListViewModel;
    ordersPerPage = 2;
    currentPage: number;
    totalPages: number;
    prevPageUrl: string;
    nextPageUrl: string;

    constructor(private orderService: OrderService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.currentPage = +params['id'];
        });

        this.route.params.switchMap((params: Params) => this.orderService.getOrders(+params['id']))
            .subscribe(orderListViewModel => {
                this.orderListViewModel = orderListViewModel;
                this.totalPages = Math.ceil(orderListViewModel.totalOrders / this.ordersPerPage);
                this.nextPageUrl = this.getNextPageUrl();
                this.prevPageUrl = this.getPrevPageUrl();
            });
    }

    getPrevPageUrl(): string {
        if (this.currentPage <= 1) {
            return "";
        }
        return `#/orders/${this.currentPage - 1}`;
    }

    getNextPageUrl(): string {
        if (this.currentPage >= this.totalPages) {
            return "";
        }

        return `#/orders/${this.currentPage + 1}`;
    }

    goToDetails(id: number): void {
        this.router.navigate(['/orderDetails', id]);
    }

    get diagnostic() { return JSON.stringify(this.orderListViewModel) }
}