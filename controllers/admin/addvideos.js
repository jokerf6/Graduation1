async function addvideos(req, res, next) {
  try {
    const { motivation_videos } = req.models;
    const { video, comment } = req.body;
  } catch (err) {
    next(err);
  }
}
export default addvideos;
