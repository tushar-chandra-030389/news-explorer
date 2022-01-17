# How to run the app

add **.env** file inside folder **/packages/server/**

add following content to it:

> NODE_ENV=development
> PORT=3100
> JWT_SECRET=<JWT SECRET>
> NEWS_API_KEY=<NEWS API KEY>
> DB_URL=mongodb://localhost:27017/news-explorer

run the following command for **server** package:

> yarn dev

run the following command for **web** package:

> yarn start
