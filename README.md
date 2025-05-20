# note-app

Created for YP's DevOps Certification Class.

## Run Locally

Clone the project

```bash
  $ git clone https://gitlab.com/group-five4/note-app.git
```

Comment out `image` and `container_name` for both `frontend` and `backend` services in `docker-compose.yaml`

```yaml
  frontend:
    restart: always
    # image: ${CI_REGISTRY_IMAGE}/frontend:dev-${CI_COMMIT_SHORT_SHA}
    # container_name: frontend-${CI_COMMIT_SHORT_SHA}
    build:
    ...
  backend:
    restart: always
    # image: ${CI_REGISTRY_IMAGE}/backend:dev-${CI_COMMIT_SHORT_SHA}
    # container_name: backend-${CI_COMMIT_SHORT_SHA}
    build:
    ...
```

Create a `.env` file at root level of the project directory and put in this key-value pair

```yaml
MYSQL_ROOT_PASSWORD=root
```

Build and run the container stack

```bash
  $ docker compose up
```

## Tech Stack

**Client:** ReactJS, React-Router, Bootstrap

**Server:** NodeJS, ExpressJS

**Database:** MySQL
