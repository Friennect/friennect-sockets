module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    author: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    recipient: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

  Message.findByAuthor = (author) => Message.findAll({
    where: { author }
  });

  Message.findByRecipient = (recipient) => Message.findAll({
    where: { recipient }
  });

  return Message;
};
