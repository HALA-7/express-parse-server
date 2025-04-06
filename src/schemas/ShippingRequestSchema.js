import { SchemaMigrations } from 'parse-server';

const ShippingRequestSchema = {

  className: "ShippingRequest",
  fields: {

    source_area: {type: "String", required: true } ,
    source_location: {type: "String", required: true },
    distination_location: {type: "String", required: true },
    city_source: {type: "String", required: true },
    city_distination: {type: "String", required: true },    
    fullname_distination:{type: "String", required: true },
    mobile_distintaion:{type: "String", required: true },

    //////////// // asking /////////
    Field: {type: "String", required: true},
    type:{type: "String", required: true }, 
    shipping_service:{type: "String", required: true },


    /////////////////
    price: {type: "Number", required: true },
    is_liquid:{type: "Boolean", required: true },
    weight:{type: "Number", required: true },
    //FK 
    shipping_company :{type: "Pointer", targetClass: "ShippingCompany" } ,

  },
  indexes: {
    shippingCompanyPointerIndex: { _p_shipping_company: 1 },
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

export default ShippingRequestSchema;
