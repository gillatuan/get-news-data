if (process.env.NODE_ENV === 'production') {
  console.log('productin');
  
  module.exports = require('./keys_prod');
} else {
  console.log('dev');
  module.exports = require('./keys_dev');
}
