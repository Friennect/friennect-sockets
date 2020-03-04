module.exports = (sequelize, DataTypes) => {
  const Text = sequelize.define("Text", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });
  
  Text.associate = ({ Message }) => {
    Text.belongsTo(Message, {
      targetKey: "id",
      foreignKey: "message",
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
  };

  Text.findByMessage = (message) => Text.findAll({
    where: { message }
  });

  return Text;
};
