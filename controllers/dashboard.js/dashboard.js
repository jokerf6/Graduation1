import Responses from "../../util/response";
async function dahsboard(req, res) {
  console.log(req.userId);
  const { user } = req.models;
  const curruser = await user.findOne({
    where: {
      userId: req.userId,
    },
  });
  console.log(curruser);
  return Responses.success(res, "data", curruser);
}

export default dahsboard;
