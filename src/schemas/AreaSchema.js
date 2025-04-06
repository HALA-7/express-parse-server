import { SchemaMigrations } from 'parse-server';

const AreaSchema = {

  className: "Area",
  fields: {

    name: { type: "String", required: true },
    location: { type: "GeoPoint", required: true },

    //FK
    city: { type: "Pointer", targetClass: "City" },

  },
  indexes: {
    cityPointerIndex: { _p_city: 1 },   //create indexes on pointer in ascending order

  },
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

export default AreaSchema;
