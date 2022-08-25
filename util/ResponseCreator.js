async function createUserModel(models, userId) {
  const { user } = models;
  const User = await user.findOne({
    where: {
      userId,
    },
    attributes: {
      exclude: ["password", "updatedAt"],
    },
  });
  return {
    ...User.dataValues,
  };
}
export default createUserModel;
