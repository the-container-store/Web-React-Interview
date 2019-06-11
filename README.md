# Web React Interview

This is a dummy app which resembles a project we're currently working on - Checkout!

## Setup

We prefer to use `npm` for this project, so to get started just do:

```
npm install
npm start
```


## Task

We have created a simple "Checkout" application which contains a simple address form and an order summary. The order summary shows the current state of the customer's "Cart" (in the `data/cart.json` file). Here are a list of suggested improvements for this app, in no particular order:

| Improvement                 | Description                                                                                                                                                                  |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Prop 65 Warning             | Only show the "Prop65" warning if the user has selected a California address                                                                                                 |
| Additional Shipping Fee     | Add a $19 "additional shipping" fee to the order if a user has one of these  Manhattan zip codes: 10004, 10005, 10006, 10007, 10038, 10280                                   |
| Zip Code Input Improvements | Currently, our Zip code field takes in any input type, we'd like to restrict it to numbers only, and ideally only proper zip-codes                                           |
| Free Shipping               | We'd like to offer free shipping if the order total is over $49, otherwise it's $29                                                                                          |
| Shipping Method             | In addition to the address form, we'd like to have a "Shipping method" selector, where a user can select "Expedited ($79)" or "Standard" shipping                            |
| Alaska                      | We can't ship to Alaska, so we'd like to put some warning message on that page when a user selects an Alaskan address, telling them that their order cannot be shipped there |

