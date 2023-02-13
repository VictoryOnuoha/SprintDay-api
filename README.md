# SprintDay-api
The backend data and server for Sprint Day - a task management software for the busy bees  🐝 ⏱️ 💼

See: https://github.com/VictoryOnuoha/SprintDay


# SPRINTDAY
PROBLEM: The typical professional has lots of items on their to do list and it can seem never ending and overwhelming especially when they are in a high producing role. 

SPRINTDAY will help them focus and stay organized by tracking their goals using sprints, an agile project management methodology.  It will also help them organize their endless to do list by linking each task with an existing project and making it easily accessible. 



## API Reference

#### Get all items

```http
  GET /projects/
```


#### Get item

```http
  GET /projects/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### returns list of tasks (for now) but will return projects as well



## Authors

- [@victoryonuoha](https://github.com/VictoryOnuoha)





## Deployment

To deploy this project run

```bash
 Run `npm install` to install the necessary dependencie
  `npm start` (on frontend called SprintDay)
  `npm start` (on backend) to start the server
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file (Front end the Server side)


`REACT_APP_SERVER_URL=http://localhost:8080`

`PORT=8080` 

`CLIENT_URL=http://localhost:3000`

## Error Handling
If an error occurs while processing a request, the server will respond with a JSON object 
containing an error message and a status code indicating the type of error.

## Contributing
If you'd like to contribute to this project, feel free to submit a pull request.

## LIVE PREVIEW 
![sprint day task page](https://user-images.githubusercontent.com/34638854/195739875-c8ef9526-218d-4506-aa5f-7f8b8cf21454.png)



