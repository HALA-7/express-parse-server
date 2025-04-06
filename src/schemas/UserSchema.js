import { SchemaMigrations } from 'parse-server';

const UserSchema = {

  className: "_User",
  fields: {
    name: { type: "String", required: true },
    email: { type: "String", required: true, unique: true  },
    password: { type: "String", required: true },
    phone: { type: "String" },
    role: { type: "String", enum: ['customer', 'admin', 'company'], required: true },
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

export default UserSchema;
