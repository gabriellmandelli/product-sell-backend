#Command line start dev:

#init Project
yarn init -y

#add express (route controller)
yarn add express

#add 
yarn add nodemon -D

#add add "scripts":"dev" nodemon src/service.js to start api using the command yarn dev

#mongoDB 
yarn add mongoose

mongodb+srv://mandelli:mandelli@cluster0-rl2ot.mongodb.net/productsell?retryWrites=true&w=majority

#axios to do request in external api
yarn add axios

#cors allow the api to can acessed anywhere andress
yarn add cors


product : {
  id_reference: number;
  name: string;
  description: string;
  value: number;
  likes: number;
}