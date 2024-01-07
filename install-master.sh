sudo docker swarm init --advertise-addr 192.168.2.100
sudo docker swarm join-token worker | grep docker > /vagrant/install-worker.sh

# Copy de app directory to the master node
sudo cp -r /vagrant/app /home/vagrant/app
sudo docker build -t app /home/vagrant/app
