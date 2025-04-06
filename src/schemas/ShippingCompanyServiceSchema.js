import { SchemaMigrations } from 'parse-server';

const ShippingCompanyServiceSchema = {

  className: "ShippingCompanyService",
  fields: {
    shipping_company_id :{type: "Pointer", targetClass:  "ShippingCompany" } ,
    shipping_service_type :{type: "Pointer", targetClass: "ShippingType" } ,
    
    shipping_company_service_city : {type: "Array" , required: true},
    shipping_company_service_area : {type: "Array", required: true},

    pricing_method_fees :{type: "Pointer", targetClass: "PricingMethodFees" },

    ////  asking //////
    from_to :{type: "Date",  required: true},
    max_weight :{type: "Number",  required: true }

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

export default ShippingCompanyServiceSchema;
