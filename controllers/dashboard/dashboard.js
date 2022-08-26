import Responses from "../../util/response";
async function dahsboard(req, res) {
  const { user, motivation_videos } = req.models;
  const curruser = await user.findOne({
    where: {
      userId: req.userId,
    },
  });
  const videos = await motivation_videos.findAll();
  return Responses.success(res, "data", { curruser, videos });
}

export default dahsboard;
