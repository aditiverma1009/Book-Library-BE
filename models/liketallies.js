

module.exports = (sequelize, DataTypes) => {
  const liketallies = sequelize.define('liketallies', {
    bookid: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return liketallies;
};
