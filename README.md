
# Next.js API Documentation

This documentation provides an overview of the Next.js API. Each type has different types of API endpoints for various operations.

This is a fake dummy data API. You can use it for practice purposes to build single-page-applications or Anywhere.

It is made by next.js with typescript. This next.js was Page router.

#### Available Three Types Api
- [Category (10)](https://nextjs-page-api.vercel.app/api/categories)  
- [Subcategory (30)](https://nextjs-page-api.vercel.app/api/subcategories)  
- [Product (150)](https://nextjs-page-api.vercel.app/api/products)  

<br>

## Category APIs :heart:

### :point_right: Fetch API
You will get 10 category list
| Method   | Url                                                                         | Params |
| -------- |:---------------------------------------------------------------------------:| ------:|
| GET      | [Get All Categories](https://nextjs-page-api.vercel.app/api/categories)     | false  |
| POST     | [Create a Category](https://nextjs-page-api.vercel.app/api/categories)      | false  |
| GET      | [Get a Category](https://nextjs-page-api.vercel.app/api/categories/1)       | true   |
| PUT      | [Update a Category](https://nextjs-page-api.vercel.app/api/categories/1)    | true   |
| DELETE   | [Delete a Category](https://nextjs-page-api.vercel.app/api/categories/1)    | true   |



### JSON Type
```json
{
    "message": "Response Success",
    "status": 200,
    "total": 2,
    "data": [
        {
            "id": 1,
            "title": "Technology"
        },
        {
            "id": 2,
            "title": "Food & Drink"
        },
    ]
}
```

> **Note:**  Params will be id and number type and required.
>
> title field is required for create and update :pushpin:

<br>

## Subcategory APIs :heart:

### :point_right: Fetch API
You will get 30 subcategory list
| Method   | Url                                                                               | Params |
| -------- |:---------------------------------------------------------------------------------:| ------:|
| GET      | [Get All Subcategories](https://nextjs-page-api.vercel.app/api/subcategories)     | false  |
| POST     | [Create a Subcategory](https://nextjs-page-api.vercel.app/api/subcategories)      | false  |
| GET      | [Get a Subcategory](https://nextjs-page-api.vercel.app/api/subcategories/1)       | true   |
| PUT      | [Update a Subcategory](https://nextjs-page-api.vercel.app/api/subcategories/1)    | true   |
| DELETE   | [Delete a Subcategory](https://nextjs-page-api.vercel.app/api/subcategories/1)    | true   |



### JSON Type
```json
{
    "message": "Response Success",
    "status": 200,
    "total": 2,
    "data": [
        {
            "id": 1,
            "title": "Mobile Apps",
            "category_id": 1
        },
        {
            "id": 2,
            "title": "Web Development",
            "category_id": 1
        },
    ]
}
```

> **Note:**  Params will be id and number type and required.
>
> title and category_id field are required for create and update :pushpin:




<br>

## Product APIs :heart:

### :point_right: Fetch API
You will get 150 Product list
| Method   | Url                                                                      | Params |
| -------- |:------------------------------------------------------------------------:| ------:|
| GET      | [Get All Product](https://nextjs-page-api.vercel.app/api/products)       | false  |
| POST     | [Create a Product](https://nextjs-page-api.vercel.app/api/products)      | false  |
| GET      | [Get a Product](https://nextjs-page-api.vercel.app/api/products/1)       | true   |
| PUT      | [Update a Product](https://nextjs-page-api.vercel.app/api/products/1)    | true   |
| DELETE   | [Delete a Product](https://nextjs-page-api.vercel.app/api/products/1)    | true   |



### JSON Type
```json
{
    "message": "Response Success",
    "status": 200,
    "total": 2,
    "data": [
       {
            "id": 1,
            "title": "Premium Smartphone X1",
            "category_id": 1,
            "subcategory_id": 1,
            "price": 599.99,
            "product_details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "quantity": 100
        },
        {
            "id": 2,
            "title": "Ultra-Thin Laptop Pro",
            "category_id": 1,
            "subcategory_id": 1,
            "price": 999.99,
            "product_details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "quantity": 100
        },
    ]
}
```

> **Note:**  Params will be id and number type and required.
>
> title, category_id, subcategory_id and price field are required for create and update :pushpin:



# End
**:bangbang: I will update it day by day and build another rest API using the app router. Thank You :bangbang:**
