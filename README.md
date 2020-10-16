# Whatsapp Clone

This is a simple group chat which allows anyone to join and send their messages, with the front end simulating WhatsApp theme.\
The webpage is served at https://ndqchi.github.io/whatsapp-clone, and the server is hosted by Heroku at https://aqueous-savannah-37003.herokuapp.com/.

## Host locally

1. Cloning the project

```bash
git clone https://github.com/ndqchi/whatsapp-clone.git
```
2. Install the required packages, then enter the client folder then continue installing all dependencies

```bash
npm install -d
cd client
npm install -d
```
3. (Optional) Change the database link to your own MongoDB database. In /app/index.js
```bash
const uri = "mongodb+srv://<username>:<password>@cluster0-3sxsg.mongodb.net/test?retryWrites=true&w=majority";
```
4. Run the server
*(assume you are in root app folder)*
```bash
node index.js
```
5. Navigate to client folder, change the server link in client/src/Components/ChatColumn/ChatColumn.js to 
```bash
this.server = "http://localhost:5000";
```
then start the frontend
```bash
npm start
```
## Deploy
1. Deploy the server on Heroku
```bash
heroku create
git push heroku master
```
2. Obtain the link created by Heroku, navigate to client/src/components/ChatColumn/ChatColumn.js and change the server link
```bash
this.server = <heroku link>;
```
3. Create a new Github repository and initialize it and add it as a remote in your local git repository
```bash
git init
git remote add origin git@github.com:<username>/<repo-name>.git
```
4. Navigate to client/package.json, change the homepage link as follows
```bash
"homepage": "http://<username>.github.io/<repo-name>",
```
5. In terminal, navigate to client folder and deploy React app with github pages 
```bash
npm run deploy
```
6. (Optional) Commit and push your changes to Github repository