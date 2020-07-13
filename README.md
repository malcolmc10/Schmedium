# Overview
# Schmedium
This application in a blog that is small, simple, and sleek. Schmedium is a movie blog that can gives you indepth reviews in 500 characters of less. Save time with Movie time using Schmedium.


# MVP

1. Use Ruby on Rails exposing Restful JSON endpoints.
2. Use working controller actions to utilize full CRUD on articles the user creates.
3. Use Tailwind CSS to create a good looking application.
4. Use proper Linting for usability for future contributors on this application.
5. The application will showcase a carousel of articles on the home screen to showcase articles.
6. User will be able to few a list of randomly generated articles on the homepage.
7. The application will allow the user to edit and delete their own articles via their MyArticles web page. 













# Goals
```
-  Have the backend completed by Tuesday Morning.
-  Have React app basics and rendering completed by Weds morning. 
-  Have MVP by Thursday night.
-  Have the backend and frontend deployed Friday evening. 
-  Complete at least 2 Post MVPs by Tuesday morning.
```


# Libraries and Dependencies
```
Tailwind - tailwind is AirBnB's CSS styling tool.
React - allows us to build Frontend.
Ruby -  allows us to build backend.
Rails - allows us to build backend models and tables.
Axios - used for API.
React Router - used for Routes.
CORS - used for API calls.
```



# Wireframes

Mobile:  https://wireframe.cc/pro/pp/fef1eb7b6358462

Desktop: https://wireframe.cc/pro/pp/fe4f9f610358452

Tablet:  https://wireframe.cc/pro/pp/c59ccf2f5358475


# Component Tree

https://drive.google.com/file/d/1L8nO_c1plHJolDn2ffwNnGmnlsqlD3Co/view?usp=sharing

# Component Hierarchy
```
src
      
|__ components/
      |__ Header
      |__ Footer
      |__ App.jsx
      |__ Main.jsx
      |__ Register
      |__ Create
      |__ MyArticle
      |__ Logo
      |__ CSS
|__ services/
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
       
   ```  

## Component Breakdown






|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Logo.       | functional |   n   |   n   | _This component holds the Logo of the website application        |
|   Footer     | functional |   y   |   n   | _This holds the copyright and portolio_                              |
|    Review      | functional |   n   |   n   | _This page holds all the routes and links_.                      |
|    ArticleC    | functional |   y   |   y   | _This is where you create articles_      |
|    App   | functional |   y   |   y   | _Holds the base of the code including routes_  |
|    CSS pages | functional |   y   |   y   | _These components hold all of the styling for my application.    |
|    Main    | functional |   n   |   n   | _This is the home page._               |
|    Register    | functional |   n   |   n   | _Registration area_               |
|    Login    | functional |   n   |   n   | _Logn area_               |
|    MyArticle    | functional |   n   |   n   | _This is where the CRUD happens_               |



# Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add header compoent |    M     |     3 hrs      |      hrs     |      hrs      |
| Backend           |    H     |     3 hrs      |      hrs     |      hrs      |
| Render images       |    H     |     3 hrs      |      hrs     |      hrs      |
| Create Links        |    H     |     4 hrs      |      hrs     |       hrs     |
| Develop My Articles page   |    H     |     5 hrs      |     hrs     |      hrs     |
| CRUD    |    H     |     5 hrs      |      1hrs     |       hr      |
| CSS                 |    M     |     5 hrs      |      hrs     |     hr       |
| random article algo           |    H     |     5 hrs      |      hrs     |             |
| Creating Logo       |    H     |     1 hrs      |      hrs     |     hr      |
|     Debugging       |    H     |     3 hrs      |      hrs     |     hrs      |
|     Deploy       |    H     |     3 hrs      |      hrs     |     hrs      |
| TOTAL               |          |     40 hrs     |     hrs     |      hrs    |



# Server (Back End)
ERD Model:

https://drive.google.com/file/d/1W0VLVGAEkjAFl-WD4Fwd4IQX7CSbyFIL/view?usp=sharing


# Post-MVP
```
Add a search bar with ability to search for reviews based on specific movies.
Adding a trailer to the movie pages.
Adding a star rating system to the movies.
Adding Rotten Tomatoes ratings to movie page.
Adding a page to look at specifc movies.
Adding loading animations.
Adding a favicon.
Adding a pop up when you login to enter a review.
Ability to search other users articles with a page dedicated and public to the public. 
 Placing a randomizer on the homepager that will share a random article.
```
# Code Showcase


# Code Issues & Resolutions
