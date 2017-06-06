export class ProductCategory{
    constructor(public productCategoryId: number, public parentId: number, public categoryName: string,
        public active: boolean){}

}