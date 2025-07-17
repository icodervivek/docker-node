## 🌐 Node.js + Express App (DockerHub)

This project includes a Node.js and Express server that has been containerized and pushed to DockerHub.

### ▶️ Run Command:

```bash
docker run -it -p 8000:8000 spidivivs/nodejs-demo


# 🐳 Docker Commands Cheat Sheet

This is a collection of essential Docker commands with use cases.  
It also includes how to run a Node.js + Express server Docker image hosted on DockerHub.

---

## 🐚 Container Lifecycle

- `docker run -it ubuntu`  
  ➤ Run an interactive Ubuntu container.

- `docker container ls`  
  ➤ List **running** containers only.

- `docker container ls -a`  
  ➤ List **all** containers (running and stopped).

- `docker start <container_name_or_id>`  
  ➤ Start an existing container.  
  _Example:_ `docker start gallant_hopper`

- `docker stop <container_name_or_id>`  
  ➤ Stop a running container.  
  _Example:_ `docker stop gallant_hopper`

- `docker exec -it <container_name_or_id> bash`  
  ➤ Open a shell in a running container.  
  _Example:_ `docker exec -it gallant_hopper bash`

---

## 🗂️ Docker Images

- `docker images`  
  ➤ View all downloaded Docker images.

- `docker build -t <image_name> .`  
  ➤ Build an image from a Dockerfile in the current directory.  
  _Example:_ `docker build -t nodejs-demo .`

- `docker build -t <username>/<image_name> .`  
  ➤ Tag your image for DockerHub.  
  _Example:_ `docker build -t spidivivs/nodejs-demo .`

- `docker push <username>/<image_name>`  
  ➤ Push your image to DockerHub.  
  _Example:_ `docker push spidivivs/nodejs-demo`

---

## 🚀 Running Applications

- `docker run -it node`  
  ➤ Run an interactive container from the Node.js image.

- `docker run -it -p <host_port>:<container_port> <image_name>`  
  ➤ Run a container and map host port to container port.  
  _Example:_ `docker run -it -p 8000:1025 mailhog/mailhog`

- `docker exec -it <container_id> bash`  
  ➤ Open a shell in a running container using container ID.  
  _Example:_ `docker exec -it ddjkj333j bash`

---

