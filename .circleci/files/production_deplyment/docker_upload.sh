




docker image tag invoice-app lukhee/invoice-app:latest
docker image tag invoice-app:latest lukhee/invoice-app:latest

docker image push --all-tags lukhee/invoice-app
docker push lukhee/invoice-app:latest

