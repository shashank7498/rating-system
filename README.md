# summary
##Rating System
- After the end of a typical ride at Oye! Rickshaw the passenger is presented with the option to rate a ride.As a part of this exercise we would like you to design and implement the backend of a rating service.The solution should support
- 1.The passenger should be able to rate a given ride.
- 2.The driver should be able to see aggregated rating of his all rides
- 3.The driver should be able to rate the passenger after ride
- 4.The passenger should be able to see his aggregated rating based on all the rides he hastaken.


# Rating System
1. All Assumptions 
2. Approach to solution
3. DB Schema or Setup Scripts
4. Steps to run your application

### All Assumptions
- UserId and riderId provided
- works only for the last ride rating not for ride's history rating

### Approach to Solution
- We use Model-View-Controller (MVC) framework is an architectural pattern that separates an application into three main logical components Model, View, and Controller.
- firstly i design the schema for both the table.
- stepup the server
- create  router and update endpoint 
- setup moongoose config.
- create controller for action
- create views for  basic frontend part.
- setup template.
- finally we've our MVP(prototype).


### DB Schema or Setup Scripts
- User Table
-   - userId (unique)
-   - todtalsum
-   - ridecount
-   - average
-   - Timestamp
- Rider Table
-   - riderId (unique)
-   - todtalsum
-   - ridecount
-   - average
-   - Timestamp

### Steps to run your Application

In the project directory (root), you can run:

### `npm install`
Installs all the dependencies npm modules.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

