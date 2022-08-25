import Responses from "../../util/response";
async function dahsboard(req, res) {
  const { user } = req.models;
  const curruser = await user.findOne({
    where: {
      userId: req.userId,
    },
  });
  return Responses.success(res, "data", curruser);
}

export default dahsboard;
