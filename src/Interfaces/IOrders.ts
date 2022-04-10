import { OrderResponseBody } from '@paypal/paypal-js';
import { IBuyer } from './IBuyer';
import { IProduct } from './IProduct';

export interface IOrder {
    buyer: IBuyer[];
    products: IProduct[];
    payment: OrderResponseBody;
}
