//jshint esversion: 6

const endpoint = 'https://hidden-brook-8135.herokuapp.com';

var GET = entity => {
    fetch(endpoint + entity, 
        {method: 'GET'}
    )
        .then(responce => responce.text())
        .then(data => console.log(data))
        .catch(error => console.error(error))
};

GET('/todos');


const POST = entity => entity;

const PUT = entity => entity;

var DELETE = entity => {
    fetch(endpoint + entity, 
        {method: 'DELETE'}
    )
        .then(responce => responce.text())
        .then(data => console.log(data))
        .catch(error => console.error(error))
};

DELETE('/todos/foo');