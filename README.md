# dio-docker-2

```sh
vagrant up
```

After up the machines, execute this script on master machine

```sh
sudo docker service create --name app --replicas 20 -dt -p 80:80 app
```
