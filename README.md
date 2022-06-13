
# Percayso Programming Exercise 3

!! Deployed at: https://pe3-soc-cohort-8-callumhemming.vercel.app/ !!
  

## News App

  

Welcome to this project!

This project is a news app using the gnews.io API, it allows you to search the API and displays the results in a neat UI.

  

This project is lovingly built with:

 - Typescript
 -  Next.js
 -  React
 -  Javascript
 -  JSX
 -  CSS Modules



  
  

## Set up

  

 - Run <code>npm i</code> to install dependencies.
 - Go to ./.config.env and add in your token. Change the file name to
   .env.local
   -Go to ./pages/index.tsx and change fetchString to <code>http://localhost:3000/api/news/global</code>
 - Run <code>npm run dev</code> to start the development server
 - Navigate to <code>localhost:3000</code> in your browser
 - Have fun!

  

## Possible issues

  The deployed project uses the hobby level access from gnews.io which is limited to 100 requests, which then has a 8 hour cool off period. If no results are showing it's because the app is cooling off. 