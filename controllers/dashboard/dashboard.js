import Responses from "../../util/response";
async function dahsboard(req, res) {
  const { user, motivation_videos, Hackathons } = req.models;
  const User = await user.findOne({
    where: {
      userId: req.userId,
    },
    attributes: ["firstName", "lastName", "image"],
  });
  const videos = await motivation_videos.findAll({
    attributes: ["video", "comment"],
  });
  const hackathons = await Hackathons.findAll({
    attributes: ["name", "type", "date"],
  });
  return Responses.success(res, "data", {
    User,
    videos,
    hackathons,
  });
}

export default dahsboard;
