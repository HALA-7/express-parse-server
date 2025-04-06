import { SchemaMigrations } from 'parse-server';

const PricingMethodFeesSchema = {

  className: "PricingMethodFees",
  fields: {
    fees: {type: "Number", required: true },
    //FK
    pricing_method: { type: "Pointer", targetClass: "PricingMethod" },
  },
  indexes: {
    pricingMethodPointerIndex: { _p_pricing_method: 1 },
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

export default PricingMethodFeesSchema;
