# Gitness-BE
This is the back-end for the full stack application Gitness. We use two models, Exercises and Routines; and we have full CRUD functionality by utilizing MongoDB, Mongoose, and Express. The end result is a functioning API for use with our fitness app! Check out our Heroku deployed API at https://git.generalassemb.ly/seir-1213/project-3 . Look at the Front End here 

## Wireframes
![Backend Wireframe](/images/GitnessBE.png)

## Front End code examples
* Fetch get request
```
fetch('https://gitness-ga-earth-api.herokuapp.com/')
    .then((res) => res.json())

    .then((json) => {
    setWorkouts(json);
    })

    .catch(console.error);
```
* Axios create request
```
axios
    .post('https://gitness-ga-earth-api.herokuapp.com/routines', formState)
    .then((res) => console.log(res))
    .catch((error) => {
        console.error(error);
    });
```

* Axios put request
```
axios.put(editURL, exerciseEditState)
    .then(res =>  console.log(res))
    .then(() => {
    setUpdate(!update)
    setOpenModal(false)
    })
    .catch(error => console.error(error))
```

* Axios delete request
```
axios
    .delete(`https://gitness-ga-earth-api.herokuapp.com/exercises/${myExercise._id}`, myExercise)
    .then(() => setUpdate(!update))
```

## Tech Used
* MongoDB
* Express
* Node.js
* Heroku
* Mongoose

## How to use
Use the url https://git.generalassemb.ly/seir-1213/project-3 with the following endpoints: /routines and /exercises. Follow those endpoints with a /:id .


