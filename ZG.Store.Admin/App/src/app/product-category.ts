export class ProductCategory{
    constructor(public categoryName: string,
        public active: boolean, public productCategoryId?: number, public parentId?: number){}

}