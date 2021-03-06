import { environment } from '../../environments/environment';

export class ApiBaseUrls{
    public baseUrl = (!environment.production) ? 'http://localhost:50105' : '/';
    public basePostUrl = (!environment.production) ? `${this.baseUrl}/api` : '/api';

    public authUrl = (!environment.production) ? 'http://localhost:50105/api/Auth' : '/api/Auth';

    public prodUrl = (!environment.production) ? 'http://localhost:50105/api/Product' : '/api/Product';
    public prodsUrl = (!environment.production) ? 'http://localhost:50105/api/Products' : '/api/Products';
    public prodSearchUrl = (!environment.production) ? 'http://localhost:50105/api/ProductSearch' : '/api/ProductSearch';

    public prodCatUrl = (!environment.production) ? 'http://localhost:50105/api/ProductCategory' : '/api/ProductCategory';

    public orderUrl = (!environment.production) ? 'http://localhost:50105/api/Order' : '/api/Order';
    public ordersUrl = (!environment.production) ? 'http://localhost:50105/api/Orders' : '/api/Orders';

     public orderStatusUrl = (!environment.production) ? 'http://localhost:50105/api/OrderStatus' : '/api/OrderStatus';
     public countryUrl = (!environment.production) ? 'http://localhost:50105/api/Country' : '/api/Country';
     public stateUrl = (!environment.production) ? 'http://localhost:50105/api/State' : '/api/State';
     public provinceUrl = (!environment.production) ? 'http://localhost:50105/api/Province' : '/api/Province';
     public shippingProviderUrl = (!environment.production) ? 'http://localhost:50105/api/ShippingProvider' : '/api/ShippingProvider';
}