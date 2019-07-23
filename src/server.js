require('@babel/register') ({
    presets: [ "@babel/preset-env" ]
})
require('@babel/polyfill')

const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres', 'postgres', 'muse0106', {
    host: 'localhost',
    dialect: 'postgres'
  });
  require('./index')
  // sequelize
  //   .authenticate()
  //   .then(() => {
  //     console.log('Connection has been established successfully.');
  //     global.sequelize = sequelize  // 将创建的数据库过载到全局中去、
  //     // require('./index')
  //   })
  //   .catch(err => {
  //     console.error('Unable to connect to the database:', err);
  //   });
