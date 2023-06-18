module.exports = (thefunct) => (req,res,next) => {
    Promise.resolve(thefunct(req, res, next)).catch(next)
}
