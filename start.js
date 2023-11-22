process.env.TWIKOO_PORT = process.env.ASPNETCORE_PORT || process.env.PORT || 8080;
require('./tkserver');
