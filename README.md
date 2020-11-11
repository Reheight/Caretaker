# Caretaker

Caretaker is a multipurpose support tool for Discord. Allowing you to host and run your own instance of a highly optimized and complex support system allowing you to control the environment in which the service runs.

## Installation and Deployment

1. **Use the package manager [npm](https://www.npmjs.com/get-npm) to install the requisites for the bot by performing `npm install`.**

2. **Copy `.env_example` and rename it to `.env`.**

3. **Setup a Discord Bot account.**
   - *Visit [Discord Developer Panel](http://discord.com/developers) and log in with your Discord account.*
   - *Select `New Application` in the top right and name it whatever you like.*
   - *Select the `Bot` tab and select `Add Bot` button and continue through the prompts.*
   - *Ensure you have disabled the `Public Bot` option so nobody hijacks your bot.*
   - *Click `Copy` under the `Token` section for the bot.*
   - *Replace the `TOKEN_BOT=placeholder` in the `.env` file with the token you just copied. You should see something like `TOKEN_BOT=Nzc2MTc0MDk0OTMxOTg0Mzg0.X6xCdA.iELGgvsZ2cncxvc3G8_fMbr-2BM`.*

4. **Setup a MongoDB locally or via [MongoDB Atlas](https://www.mongodb.com).**
   - *If you have an account select `Login` otherwise select `Try` and create your account.*
   - *Once you see the panel, ensure you have `Atlas` selected in the sub-navigation.*
   - *Select `Create a New Cluster` or `Build a Cluster` located at the top right ensure you select the free tier.*
   - *Select which provider and region you would like as well as providing your preferred Cluster Name and then select `Create Cluster` and wait for the setup process to finish.*
   - *Select `Database Access` in the sidebar and then select `Add New Database User`.*
   - *Select the `Password` authentication method and provide a username and select `Autogenerate Secure password` but make sure to save these credentials somewhere and click `Add User`.*
   - *Select `Clusters` in the sidebar and select `Connect` on the cluster you created and then select `Connect your application` and copy the connection string.*
   - *Replace the `MONGO_CONNECTION=placeholder` in the `.env` file with the connection string you just copied and replace `<password>` with the password to the account we created earlier and replace `<dbname>` with a name you wish to use for the database. You should see something like `MONGO_CONNECTION=mongodb+srv://someUsername:password123@someCluster.cyhy0.mongodb.net/core?retryWrites=true&w=majority`.*

5. **Invite the Discord bot to your server**.
   - *Copy `https://discord.com/api/oauth2/authorize?client_id=<CLIENT_ID>&permissions=8&scope=bot` and replace `<CLIENT_ID>` with your Discord Bot account client ID which can be found in the `General Information` tab of your Discord Bot dashboard.*
   - *Paste the link into your browser and then add the bot to your server.*

6. **Start the bot by running `npm start` in the root directory.**

## Terms of Service

*You agree to the following terms by cloning or forking this repository or by running your own private instance of this software/service.*

- You may not attempt to claim responsibility for the creation/development of the service.
- You may not attempt to use the service in any way that may violate Discords [Terms of Service](https://discord.com/terms).
- You may not attempt to sell this service or distribute the files of this service, you should redirect all requests for the files to this repository.
- You may not attempt to use this service for any form of monetary gain or to generate any form of revenue.

## License

[MIT](https://choosealicense.com/licenses/mit/)