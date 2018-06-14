# React-Trello

This project is very simple trello clone.<br>
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Current technologies stack:
* React
* Redux
* Bootstrap

## Instruction

In the project directory:

### `npm install`
Install all dependencies

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technical requirements
 
On front-end:
- [X] Angular/Angularjs/React/Vue(or any other framework of your choice)
- [X] any css framework of your choice(bootstrap, materialize, semantic-ui, ui-kit)
- [ ] any helpful npm/yarn packages(for example: lodash)

On back-end:
- [ ] Node.js web framework of your choice(such as express, koa, etc)
- [ ] SQL, or NoSQL database to store data(MySQL, PostgreSQL, MongoDB, etc)
- [ ] any helpful npm/yarn packages of your choice

Unauthorized users can only: 
- [X] view a board, with groups of task
- [X] login/register to app

Authorized users can: 
- [X] create, delete, update tasks and groups 
- [X] log out,
- [X] drag’n’drop tasks inside the group and between groups, 
- [X] view its details(in modal window).

General
- [X] Modal opens by click on task by authorized user
- [X] When unauthorized user clicks on tasks modal contains a log-in/register form

- [ ] Authorization should be implemented with jwt-tokens
- [ ] *Authorization with social network(google+, facebook, twitter, etc)

- [ ] Each input has to be validated(email, date, name, etc).

- [ ] Writing tests(unit, integration, etc) is a big plus 

- [ ] If there is no back-end, you have to imitate the real server with localStorage feature. Store all the info about application there (order and quantity of groups on board, order and quantity of tasks in each board, generated auth token for user). So if you reload the page and authorized user stays authorized, tasks and groups are kept on the places where they’ve been before page reload.

Additional tasks marked with * (completing them is a plus)