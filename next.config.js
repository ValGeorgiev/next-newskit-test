const withTM = require('next-transpile-modules')(['newskit']); // pass the modules you would like to see transpiled
 
module.exports = withTM();