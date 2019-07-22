import Sequelize from 'sequelize'
const User = global.sequelize.define('user', {
    // 属性
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull 默认为 true
    }
  }, {
    // 参数
  });

  export default User