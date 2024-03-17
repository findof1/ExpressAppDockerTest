To run server in a docker container, install docker at https://www.docker.com/products/docker-desktop/

Next, copy all files into a directory and open a terminal (something like windows powershell or git bash) in the directory.

In the terminal, run:

docker build -t express-app .

(include the dot at the end)

Then run:

docker run -p 3000:300 express-app

Now you can open http://localhost:3000 to view the app.
