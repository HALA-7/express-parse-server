
module.exports = {
  beforeSaveCity: async (request) => {
    const isAdmin = request.user.get('name');
    console.log('from------------------' + request.user);
    console.log('from------------------' + isAdmin);

    if (!request.user) {
      throw 'Unauthorized';
    }
    if (request.user.get('role') === "admin") {
      throw request.user.get('role');
    }
    const city = request.object;
    const name = city.get('name');
    console.log("=======>>>>>>" + request.user);
  }
};
