import {ProductImage} from './product-image';

export class Product{
    constructor(public productCategoryId: number, public name: string, public description: string, public salePrice: number,
        public active: boolean, public weight: number, public shippingweight: number, public height: number,
        public shippingHeight: number, public length: number, public shippingLength: number, public width: number, 
        public shippingWidth: number, public isReviewEnabled: boolean, public images: ProductImage[], public productLink?: string, 
        public totalReviewCount?: number, public ratingSorce?: number , public productId?: number){}

}