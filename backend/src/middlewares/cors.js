module.exports = (request, response, next) => {
   response.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
   response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
   response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   next();
};