# Docker With Mongo

### Run MongoDB on Docker
```bash
docker run -d \                                                                                                                                     ─╯
--name my-mongo \
--network my-network \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=root \
-e MONGO_INITDB_ROOT_PASSWORD=admin \
-v mongo-db:/data/db \
mongo
```
### MongoDB URL
1. If the backend run on local Machine and mongoDB run on Docker Container
```bash
mongoUrl = mongodb://root:admin@localhost:27017/myDatabase?authSource=admin
```
2. If both run on Docker Container
```bash
mongoUrl = mongodb://root:admin@my-mongo:27017/myDatabase?authSource=admin
```
