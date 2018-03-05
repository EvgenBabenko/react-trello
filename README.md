# React-Trello

This project is very simple trelo clone.<br>
The project was bootstrapped with [Create React App]

## Instruction

In the project directory:

### `npm install`
Install all dependencies

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder.

## Technical requirements
 
~~Strikethrough item~~ is done

On front-end:
* ~~Angular or Angularjs or React or Vue~~
* ~~any css framework of your choice(bootstrap, materialize, semantic-ui,  ui-kit)~~
* any helpful npm/yarn packages(for example: lodash)

On back-end:
* Node.js web framework of your choice(such as express, koa, etc)
* SQL, or NoSQL database to store data(MySQL, PostgreSQL, MongoDB, etc)
* any helpful npm/yarn packages of your choice

Unauthorized users can: 
* ~~only view a board, with groups of task, login/register to app to do more.~~

Authorized users can: 
* ~~create~~, 
* ~~delete~~, 
* ~~update tasks and groups~~, 
* ~~log out~~,
* drag’n’drop tasks inside the group and between groups, 
* ~~view its details(in modal window)~~.

Task-item should have: 
* ~~id~~
* ~~title(which is viewed on a board-view and in modal)~~
* ~~description(only in modal)~~
* ~~due date(which is viewed on a board-view and in modal)~~
* *attachments(images upload, viewed only in modal)

Group-item should have: 
* ~~id~~
* ~~title~~

User should have: 
* name
* email

~~Modal opens by click on task by authorized user.~~<br>
When unauthorized user clicks on tasks modal contains a log-in/register form

Authorization should be implemented with jwt-tokens.<br>
*Authorization with social network(google+, facebook, twitter, etc);

Writing tests(unit, integration, etc) is a big plus.<br>
Additional tasks marked with * (completing them is a plus)