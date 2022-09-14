import Diamond from '../models/diamondSchema.js';

export const filterDiamond = (req, res) => {
  res.send(req.body);
};

export const addDiamondPage = (req, res) => {
  res.render('diamond_data.ejs');
};

export const addDiamond = async (req, res) => {
  try {
    const {
      shape, color, clarity, cut, finish, symmetry, lab,
    } = req.body;
    if (!shape || !color || !clarity || !cut || !finish || !symmetry || !lab) {
      console.log('All fields are required');
      return res.redirect('/diamond/adddiamond');
    }
    await Diamond.create(req.body);
    return res.redirect('/');
  } catch (err) {
    console.log(err);
    return res.redirect('/diamond/adddiamond');
  }
};
