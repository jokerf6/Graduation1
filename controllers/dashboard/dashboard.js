import Responses from "../../util/response";
async function dahsboard(req, res) {
  const { user, motivation_videos, Hackathons } = req.models;
  const curruser = await user.findOne({
    where: {
      userId: req.userId,
    },
  });
  const videos = await motivation_videos.findAll();
  const hackathons = await Hackathons.findAll();

  return Responses.success(res, "data", { curruser, videos, hackathons });
}

export default dahsboard;
