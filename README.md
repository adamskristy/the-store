# Sweet Water Bath and Spa CRUD App

 Mod 2 Project for Per Scholas Codebridge

## Description
The purpose of this project is to create a CRUD web application and demonstrate knowledge of React and the 7 RESTful Routes in a simple product website.

## Technologies used
* MongoDB
* Express js 
* React js
* Node js
* HTML
* CSS
* JavaScript
* Canva

## RESTful Routes

| URL                | HTTP Verb | Action  | Notes                                                                                                                                                                                           |
|--------------------|-----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /products/         | GET       | index   | INDEX when a user types `localhost:3000/products` in browser this route shows a `list` or `index` of all products                                                                               |
| /products/new      | GET       | new     | NEW when a user types `localhost:3000/products/new` in the browser this route shows the user a form to create a `NEW` product                                                                   |
| /products/:id      | DELETE    | destroy | `DELETE` initiates a delete request through a form submission with `action = http://localhost:3000/products/:idOfProduct` and allows the application the ability to `delete` a product          |
| /products/:id      | PUT/PATCH | update  | `UPDATE` initiates a put request through a form submission with `action = http://localhost:3000/products/:idOfProduct` and allows the application the ability to `Update` data about a product` |
| /products          | POST      | create  | `CREATE` initiates a post request through a form submission with `action = http://localhost:3000/products/` and allows the application the ability to `create` a product                        |
| /products/:id/edit | GET       | edit    | `EDIT`, when a user types `localhost:3000/products/:idOfProduct/edit` in the browser, shows the user a form to `edit` a product                                                                 |
| /products/:id      | GET       | show    | `SHOW` when a user types `localhost:3000/products/:idOfProduct` shows the user an `Individual` product in the browser                                                                           |

## Lessons

I originally overthought a lot of the logic and processes for this project like the navigation and buy button functionality. 
Keeping it simple and only included what was needed helped in the long run. 

I had a lot of fun using the Default Layouts with React. It made styling much easier and cohesive

I also enjoyed testing the functionality of the site with the forms 
* restricting the data types entered in the form
* restricting the number values
* if quantity of product is 0, should display out of stock and buy button should be hidden

## Challenges Faced
The buy button functionality was especially challenging but I was able to solve with the  help of my amazing classmate and lots of research.


## Future Goals
* shopping cart function
* item greyed out for out of stock
* actual homepage
* modal for purchasing

##### Live Link
https://sweet-water-bath-store.cyclic.app/products

##### Disclaimer
##### The images and descriptions are not mine and were sourced from online. All credit belongs to those individuals