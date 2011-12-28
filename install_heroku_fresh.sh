rm -rf .git
git init
touch README
git add README
git commit -m 'first commit'
git remote add origin git@github.com:steve21124/chatserver.git
git push -u origin master
heroku create chat9988 --stack cedar
git add .
git commit -a -m"initialize"
git push heroku master





