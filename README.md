# alticci-sequence-front

### What you need to execute this project
* Node v16.17.1
* Docker/docker-compose
* Angular cli

### How to run

First, we need to install the angular cli. In the working directory we run this command:
```
npm install -g @angular/cli 
```
After install angular cli, we need to install the application packages:

```
npm install
```
When we install both items listed above, we can finally run the application. In the working directory /front-sequence execute:

```
ng serve
```
Now we can access the application local -> [Here](http://localhost:4200)

You can also run a docker-compose file, running a container built by me. In the work directory run:
```
docker-compose up -d
```

### Main Screen

* The Main screen just have a few components, an input field, 2 buttons and a table that shows the result.
    * In the input field, we inform the **{n}** index;
    * Send button, that requests the result list from the backend, passing **{n}** as a parameter;
    * Clear Cache button, to clear the current cache;
    * A table, informing the index and the value of the **{n}**.