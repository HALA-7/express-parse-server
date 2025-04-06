// Example express application adding the parse-server module to expose Parse
// compatible API routes.

import express from 'express';
import { ParseServer } from 'parse-server';
import path from 'path';
const __dirname = path.resolve();
import http from 'http';
import bodyParser from 'body-parser';

import UserSchema from './src/schemas/UserSchema.js';
import CitySchema from './src/schemas/CitySchema.js';
import AreaSchema from './src/schemas/AreaSchema.js';
import ShippingCompanyAreaSchema from './src/schemas/ShippingCompanyAreaSchema.js';
import ShippingRequestSchema from './src/schemas/ShippingRequestSchema.js';
import ShippingCompanyServiceSchema from './src/schemas/ShippingCompanyServiceSchema.js';
import ShippingCompanySchema from './src/schemas/ShippingCompanySchema.js';
import ShippingTypeSchema from './src/schemas/ShippingTypeSchema.js';
import PricingMethodFeesSchema from './src/schemas/PricingMethodFeesSchema.js';
import PricingMethodSchema from './src/schemas/PricingMethodSchema.js';

export const config = {
  databaseURI:process.env.DATABASE_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/data',
  // cloud: function () {import('./cloud/main.js');},
  appId: process.env.APP_ID || 'myAppId',
  masterKey: process.env.MASTER_KEY || '', //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse', // Don't forget to change to https if needed
  schema: {
    definitions: [
     UserSchema,
     CitySchema,
      AreaSchema,
      ShippingCompanySchema,
      ShippingCompanyAreaSchema,
      ShippingTypeSchema,
     PricingMethodSchema,
      PricingMethodFeesSchema,
      ShippingRequestSchema,
      ShippingCompanyServiceSchema,
      ],
  },
  // serverStartComplete: () => {
  //   // Parse Server is ready with up-to-date schema
  //   parseServer.expressApp.get("/ready", (req,res) => {
  //     res.send("true");
  //   });
  // },
  // liveQuery: {
  //   classNames: ['Posts', 'Comments'], // List of classes to support for query subscriptions
  // },
};
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

export const app = express();

app.set('trust proxy', true);

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());


// Serve the Parse API on the /parse URL prefix
if (!process.env.TESTING) {

  const mountPath = process.env.PARSE_MOUNT || '/parse';
  const server = new ParseServer(config);
  await server.start();
  app.use(mountPath, server.app);
}





// Parse Server plays nicely with the rest of your web routes
app.get('/', function (req, res) {


  //const user = new Parse.User();
  // user.set("username", "hala");
  // user.set("password", "123456");
  // user.set("email", "email@example.com");
  // user.set("name", "7ala");
  // user.set("role", "admin");
  // user.set("phone", "415-392-0202");
  // try {
  //     //user.signUp();
  //     const user =  Parse.User.logIn("hala", "123456");
  //     if (user) {
  //       // Manually construct the JSON representation if toJSON is not available
  //       const userJson = {
  //         objectId: user.id,
  //         username: user.username,
  //         // createdAt: user.get('createdAt'),
  //         // updatedAt: user.get('updatedAt'),
  //         // Add any other fields you want to return
  //       };
  
  //       // Return the user object as JSON
  //       res.send("userJson");
       
  //     } 
  // } catch (error) {
  //   // Show the error message somewhere and let the user try again.
  //   console.log("Error: " + error.code + " " + error.message);
  // }
  
});

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/test', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});


if (!process.env.TESTING) {

  const port = process.env.PORT || 1337;
  const httpServer = http.createServer(app);
  httpServer.listen(port, function () {
    console.log('parse-server-example running on port ' + port + '.');
  });
  // This will enable the Live Query real-time server
  await ParseServer.createLiveQueryServer(httpServer);
}

