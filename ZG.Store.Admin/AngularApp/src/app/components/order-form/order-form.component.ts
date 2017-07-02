import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';

import {OrderService} from '../../services/order.service';

import {Order} from '../../model/order';
import {OrderProduct} from '../../model/order-product';

@Component({
    selector: 'order-form',
    templateUrl: './order-form.component.html',
    styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit{
    errorMsg: string;
    order: Order;
    orderForm: FormGroup;

    constructor(private orderService: OrderService, private formBuilder: FormBuilder, 
        private route: ActivatedRoute){ }

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.orderService.getOrder(+params['id']))
            .subscribe(
                order => {
                    this.order = order;
                    this.createForm(this.order);
                },
                error => this.errorMsg = <any>error
            );
    }

    getFormModel(order: Order): any{
        return this.getOrderObject(order, this.getFormArrayForOrderProducts(order.orderProducts));
    }

    createForm(order: Order){
        this.orderForm = this.formBuilder.group(this.getFormModel(order));
    }

    getFormArrayForOrderProducts(orderProducts: OrderProduct[]){
        const opFormGroups = orderProducts.map(op => this.formBuilder.group(op));
        const opFormArray = this.formBuilder.array(opFormGroups);
        return opFormArray;
    }

    onSubmit(){
        this.order = this.prepareSaveOrder();
        this.orderService.update(this.order).subscribe(/* error handling */);

        this.reset();
    }

    reset(){
        this.orderForm.reset(this.getFormModel(this.order));
    }

    prepareSaveOrder(): Order{
        const formModel = this.orderForm.value;

        const orderProductsDeepCopy: OrderProduct[] = formModel.orderProducts
                                                        .map((op: OrderProduct) => Object.assign({}, op));

        const orderToBeSaved: Order = this.getOrderObject(this.order, orderProductsDeepCopy);

        return orderToBeSaved;
    }

    getOrderObject(order: Order, orderProducts: any){
        return {
            orderId: order.orderId,
            userId: order.userId,
            fullName: order.fullName,
            orderNumber: order.orderNumber,
            orderDate: order.orderDate,
            orderStatusId: order.orderStatusId,
            shippingNumber: order.shippingNumber,
            billingAddress1: order.billingAddress1,
            billingAddress2: order.billingAddress2,
            billingCity: order.billingCity,
            billingZipcode: order.billingZipcode,
            shippingAddress1: order.shippingAddress1,
            shippingAddress2: order.shippingAddress2,
            shippingCity: order.shippingCity,
            shippingZipcode: order.shippingZipcode,
            dateShipped: order.dateShipped,
            comments: order.comments,
            total: order.total,
            shipping: order.shipping,
            tax: order.tax,
            active: order.active,
            billingStateId: order.billingStateId,
            billingProvinceId: order.billingProvinceId,
            billingCountryId: order.billingCountryId,
            shippingCountryId: order.shippingCountryId,
            shippingProviderId: order.shippingProviderId,
            shippingStateId: order.shippingStateId,
            shippingProvinceId: order.shippingProvinceId,
            orderProducts: orderProducts,
        };
    }
}