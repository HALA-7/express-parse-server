import { SchemaMigrations } from 'parse-server';

const CitySchema = {

  className: "City",
  fields: {
    name: { type: "String", required: true },
    location: { type: "GeoPoint", required: true },
  },
//   indexes: {},

classLevelPermissions: {
  find: { '*': true },
  count:{ '*': true },
  get:{ '*': true },
  update:{ '*': true },
  create: { '*': true },
  delete: { '*': true },
  // protectedFields: {
  //   // These fields will be protected from all other users. AuthData and password are already protected by default
  //   "*": ["authData", "emailVerified", "password", "username"],
  // },
},
};

export default CitySchema;
