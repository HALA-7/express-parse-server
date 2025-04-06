import { SchemaMigrations } from 'parse-server';

const ShippingCompanyAreaSchema = {

  className: "ShippingCompanyArea",
  fields: {
    //FK
    area: {type: "Pointer",  targetClass: "Area" },
    shipping_company_id: { type: "Pointer", targetClass: "ShippingCompany" },
  },
  indexes: {
    areaPointerIndex: { _p_area: 1 },
    shippingCompanyPointerIndex: { _p_shipping_company_id: 1 },
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

export default ShippingCompanyAreaSchema;
