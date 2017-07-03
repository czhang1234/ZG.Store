import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { OrderService } from '../../services/order.service';
import { OrderStatusService } from '../../services/order-status.service';
import { CountryService } from '../../services/country.service';
import { StateService } from '../../services/state.service';
import { ProvinceService } from '../../services/province.service';
import { ShippingProviderService } from '../../services/shipping-provider.service';

import { Order } from '../../model/order';
import { OrderProduct } from '../../model/order-product';
import { OrderStatus } from '../../model/order-status';
import { Country } from '../../model/country';
import { State } from '../../model/state';
import { Province } from '../../model/province';
import { ShippingProvider } from '../../model/shipping-provider';

import { IMyDpOptions, IMyDateModel } from 'mydatepicker';

@Component({
    selector: 'order-form',
    templateUrl: './order-form.component.html',
    styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
    errorMsg: string;
    order: Order;
    orderStatusList: OrderStatus[];
    countries: Country[];
    states: State[];
    provinces: Province[];
    shippingProviders: ShippingProvider[];
    orderForm: FormGroup;
    showSuccessMsg = false;
    loading = false;

    private myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd mmm yyyy',
    };

    constructor(private orderService: OrderService, private formBuilder: FormBuilder,
        private route: ActivatedRoute, private orderStatusService: OrderStatusService,
        private countryService: CountryService, private stateService: StateService,
        private provinceService: ProvinceService, private shippingProviderService: ShippingProviderService) { }

    ngOnInit() {
        this.loading = true;

        this.shippingProviderService.getShippingProvisers()
            .subscribe(
            shippingProviders => this.shippingProviders = shippingProviders,
            error => this.errorMsg = <any>error
            );

        this.provinceService.getProvinces()
            .subscribe(
            provinces => this.provinces = provinces,
            error => this.errorMsg = <any>error
            );

        this.countryService.getCountries()
            .subscribe(
            countries => this.countries = countries,
            error => this.errorMsg = <any>error
            );

        this.stateService.getStates()
            .subscribe(
            states => this.states = states,
            error => this.errorMsg = <any>error
            );

        this.orderStatusService.getOrderStatus()
            .subscribe(
            orderStatus => {
                this.orderStatusList = orderStatus;
            },
            error => this.errorMsg = <any>error
            );

        this.route.params.switchMap((params: Params) => this.orderService.getOrder(+params['id']))
            .subscribe(
            order => {
                this.order = order;
                this.createForm(this.order);
                this.loading = false;
            },
            error => {
                this.errorMsg = <any>error;
                this.loading = false;
            });
    }

    getFormModel(order: Order): any {
        const dateShipped = new Date(order.dateShipped);
        return {
            orderId: order.orderId,
            userId: order.userId,
            fullName: order.fullName,
            orderNumber: order.orderNumber,
            orderDate: order.orderDate,
            orderStatusId: order.orderStatusId,
            shippingNumber: [order.shippingNumber, [Validators.required, Validators.maxLength(50)]],
            billingAddress1: [order.billingAddress1, [Validators.required, Validators.maxLength(50)]],
            billingAddress2: [order.billingAddress2, [Validators.maxLength(50)]],
            billingCity: [order.billingCity, [Validators.required, Validators.maxLength(50)]],
            billingZipcode: [order.billingZipcode, [Validators.required, Validators.pattern("^\\d{5}(-\\d{4})?$")]],
            shippingAddress1: [order.shippingAddress1, [Validators.required, Validators.maxLength(50)]],
            shippingAddress2: [order.shippingAddress2, [Validators.maxLength(50)]],
            shippingCity: [order.shippingCity, [Validators.required, Validators.maxLength(50)]],
            shippingZipcode: [order.shippingZipcode, [Validators.required, Validators.pattern("^\\d{5}(-\\d{4})?$")]],
            dateShipped: {
                date: {
                    year: dateShipped.getFullYear(),
                    month: dateShipped.getMonth() + 1,
                    day: dateShipped.getDate()
                }
            },
            comments: [order.comments, [Validators.maxLength(400)]],
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
            orderProducts: this.getFormArrayForOrderProducts(order.orderProducts),
        };
    }

    createForm(order: Order) {
        this.orderForm = this.formBuilder.group(this.getFormModel(order));

        this.orderForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
 
        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) {
    if (!this.orderForm) { return; }
    const form = this.orderForm;
 
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
 
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
 
  formErrors = {
    'billingAddress1': '',
    'billingAddress2': '',
    'billingCity': '',
    'billingZipcode': '',
    'shippingAddress1': '',
    'shippingAddress2': '',
    'shippingCity': '',
    'shippingZipcode': '',
    'shippingNumber': '',
    'comments': '',
  };
 
  validationMessages = {
    'billingAddress1': {
      'required':      'Billing address1 is required.',
      'maxlength':     'Billing address1 cannot be more than 50 characters long.',
    },
    'billingAddress2': {
      'maxlength': 'Billing address2 cannot be more than 50 characters long.'
    },
    'billingCity': {
      'required': 'Billing city is required.',
      'maxlength': 'Billing city cannot be more than 50 characters long.',
    },
    'billingZipcode': {
      'required': 'Billing zipcode is required.',
      'pattern': 'Invalid zipcode.'
    },
    'shippingAddress1': {
      'required':      'Shipping address1 is required.',
      'maxlength':     'Shipping address1 cannot be more than 50 characters long.',
    },
    'shippingAddress2': {
      'maxlength': 'Shipping address2 cannot be more than 50 characters long.'
    },
    'shippingCity': {
      'required': 'Shipping city is required.',
      'maxlength': 'Shipping city cannot be more than 50 characters long.',
    },
    'shippingZipcode': {
      'required': 'Shipping zipcode is required.',
      'pattern': 'Invalid zipcode.'
    },
    'shippingNumber': {
      'required': 'Shipping number is required.',
      'maxlength': 'Shipping number cannot be more than 50 characters long.',
    },
    'comments': {
      'maxlength': 'Comments cannot be more than 400 characters long.'
    },
  };

    getFormArrayForOrderProducts(orderProducts: OrderProduct[]) {
        const opFormGroups = orderProducts.map(op => this.formBuilder.group(op));
        const opFormArray = this.formBuilder.array(opFormGroups);
        return opFormArray;
    }

    onSubmit() {
        this.order = this.prepareSaveOrder();
        this.orderService.update(this.order)
            .subscribe(
            response => {
                this.showSuccessMsg = true;
                setTimeout(() => this.showSuccessMsg = false, 4000);
            },
            error => this.errorMsg = <any>error
            );

        this.reset(this.order);
    }

    reset(order: Order) {
        const dateShipped = new Date(order.dateShipped);
        this.orderForm.reset({
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
            dateShipped: {
                date: {
                    year: dateShipped.getFullYear(),
                    month: dateShipped.getMonth() + 1,
                    day: dateShipped.getDate()
                }
            },
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
            orderProducts: order.orderProducts,
        });
    }

    prepareSaveOrder(): Order {
        const formModelValues = this.orderForm.value;

        const orderProductsDeepCopy: OrderProduct[] = formModelValues.orderProducts
            .map((op: OrderProduct) => Object.assign({}, op));

        const orderToBeSaved: Order = this.getOrderObject(formModelValues, orderProductsDeepCopy);

        return orderToBeSaved;
    }

    get UsCountryId(): string {
        if (!this.countries) {
            return "";
        }
        return this.countries.find(c => c.name === "United States").id.toString();
    }

    get CaCountryId(): string {
        if (!this.countries) {
            return "";
        }
        return this.countries.find(c => c.name === "Canada").id.toString();
    }

    get billingCountryId(): string {
        return <string>this.orderForm.get('billingCountryId').value.toString();;
    }

    get shippingCountryId(): string {
        return <string>this.orderForm.get('shippingCountryId').value.toString();
    }

    get orderProducts(): FormArray {
        return this.orderForm.get('orderProducts') as FormArray;
    }

    getOrderObject(order: any, orderProducts: any) {
        const shippedDate = order.dateShipped.date;
        const dateShippedString = new Date(shippedDate.year, shippedDate.month, shippedDate.day).toDateString();
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
            dateShipped: dateShippedString,
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