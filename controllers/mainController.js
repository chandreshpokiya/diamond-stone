// eslint-disable-next-line
export const diamondDescPage = (req, res) => {
  res.render('diamond_desc.ejs', {loggedUser: req.user});
};
