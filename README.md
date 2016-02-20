git clone 'https://FLavalliere@github.com/FLavalliere/flavalliere.github.io.git'
cd flavalliere.github.io/
git config --global "user.name" "Francis Lavalliere"
git config --global "user.email" "francis.lavalliere@acentera.com"
cd ..
mv flavalliere.github.io hack

sudo npm install -g yo
sudo npm install -g generator-ember
cd hack
yo ember
kpm install grunt
sudo npm install -g grunt-cli
sudo apt-get install ruby-dev
sudo gem install sass --no-ri --no-rdoc
sudo gem install compass --no-ri --no-rdoc
sudo npm install -g compass
