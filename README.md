# E-Commerce Back End

## Table of Contents

• [Description](#description)  
• [Installation](#installation)  
• [Usage](#usage)  
• [License](#license)  
• [Credits](#credits)

## Description

This application was created as a homework assignment for the University of Richmond coding boot camp. The task was to implement a back end for a hypothetical e-commerce website using Sequelize and Express. While working on this project, I learned about using Sequelize to more easily connect a MySQL database to JavaScript.

## Installation

Clone this repository from GitHub. Before use, make sure you have Node.js and MySQL installed, and run the `npm install` command in your terminal while in the directory containing the server.js and package.json files to install the required npm packages for this application.

## Usage

Before starting the server, make sure that you make a .env file based on the .env.EXAMPLE in the repo. You will also want to create and seed the MySQL database using the schema file in the db folder and the command `npm run seed`.

Start the server with `npm start`. You can then work with the database by accessing certain routes through an application like [Insomnia](https://insomnia.rest/) to interact with the API. The routes all start with `http://localhost:3001/api/`. They are as follows:

• GET requests to `/products`, `/tags` or `/categories` will return all items in that category, and their associated data.  
• GET requests to `/products/:id`, `/tags/:id` or `/categories/:id` will return the item with the ID specified, and its associated data.  
• POST requests to `/products`, `/tags` or `/categories` will add a new item. Make sure to look at the seeds to get an idea of the information that should be included in the body of the request.  
• PUT requests to `/products/:id`, `/tags/:id` or `/categories/:id` will allow updating of the item with the ID specified. Make sure to look at the seeds to get an idea of the information that should be included in the body of the request.  
• DELETE requests to `/products/:id`, `/tags/:id` or `/categories/:id` will delete the item with the ID specified.

You can close the server using Cmd/Ctrl+C in the command line.

[Here is a link](https://drive.google.com/file/d/1gpHq26IuTa_k_hn9AwueD3x-Pqh2r9ns/view?usp=sharing) to a video demonstration of the application on Google Drive.

## License

The license that applies to this project is the MIT license. For more information about this license, please see the LICENSE file in the repo, or visit https://choosealicense.com/licenses/mit/.

## Credits

Part of the code of this application was provided by the University of Richmond coding boot camp. The rest was coded by me. The Node packages used are [Express.js](https://expressjs.com/), [MySQL 2](https://www.npmjs.com/package/mysql2), [dotenv](https://www.npmjs.com/package/dotenv), and [Sequelize](https://sequelize.org/).
