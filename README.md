# Chrome Dino Game played with Neurosity Crown

## Contributions
The dino-game part of the project came from this repo: https://github.com/dhhruv/Chrome-Dino-Runner

## About
In order to play this game you need a Nerusity Crown Device. You play the game by training a kinesis model. What that means is you jump by thinking of an action.
For SDK usage refer to: https://docs.neurosity.co/docs/overview/. For this game we used the JavaScript SDK. 
This was developed for Imagine Software Club at MSU meeting. If you jump over a cactus in five tries you win a free T-Shirt. 

## Installation
Documentation assumes you have .env files in both kinesis_server and Chrome-Dino-Runner directories in order to connect to the Neurosity Kinesis API. 
### Kinesis Server

It is located in kinesis_server dir. For the  server to work it is required to have Node installed. 

Once inside the directory run:

```npm install```


### Chrome-Dino-Runner

Once inside the directory run:

```pip install -r requirements.txt```

In order for the game to work it needs to have Flask working. 


## Running the game

1. Run the Kinesis server when inside kinesis_server dir:
    
    ```npm run```
2. Run the Dino game when inside Chrome-Dino-Runner:
    
    ```python chromedino.py```


