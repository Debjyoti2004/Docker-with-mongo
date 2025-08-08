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
