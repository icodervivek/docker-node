# Docker Commands Cheat Sheet

## 🐳 Container Lifecycle

- `docker run -it ubuntu`  
  👉 Runs an interactive Ubuntu container.

- `docker container ls`  
  👉 Lists **running** containers only.

- `docker container ls -a`  
  👉 Lists **all** containers (both running and stopped).

- `docker start <container_name_or_id>`  
  👉 Starts an existing stopped container.  
  Example:  
  `docker start gallant_hopper`

- `docker stop <container_name_or_id>`  
  👉 Stops a running container.  
  Example:  
  `docker stop gallant_hopper`

- `docker exec -it <container_name_or_id> bash`  
  👉 Opens an interactive shell inside a running container.  
  Example:  
  `docker exec -it gallant_hopper bash`

## 📂 Docker Images

- `docker images`  
  👉 Lists all downloaded Docker images on your machine.

- `docker build -t <image_name> .`  
  👉 Builds a Docker image from a Dockerfile in the current directory.  
  Example:  
  `docker build -t nodejs-demo .`

- `docker build -t <username>/<image_name> .`  
  👉 Builds an image with a specific DockerHub namespace.  
  Example:  
  `docker build -t spidivivs/nodejs-demo .`

- `docker push <username>/<image_name>`  
  👉 Pushes your image to DockerHub.  
  Example:  
  `docker push spidivivs/nodejs-demo`

## 🚀 Running Applications

- `docker run -it node`  
  👉 Runs an interactive container from the Node.js image.

- `docker run -it -p <host_port>:<container_port> <image_name>`  
  👉 Maps host port to container port for accessing apps.  
  Example:  
  `docker run -it -p 8000:1025 mailhog/mailhog`

- `docker exec -it <container_id> bash`  
  👉 Opens a terminal session inside a running container using container ID.  
  Example:  
  `docker exec -it ddjkj333j bash`
