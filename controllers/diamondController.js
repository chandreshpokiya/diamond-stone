import Diamond from "../models/diamondSchema.js";

export const getDiamonds = async (req, res) => {
  try {
    const diamonds = await Diamond.find({});
    return res.render("diamond_list.ejs", { diamonds: diamonds });
  } catch (err) {
    console.log(err.message);
    return res.redirect("/");
  }
};

export const filterDiamond = async (req, res) => {
  // return res.send(req.body)
  try {
    var newDiamond = [];
    const { shapes, colors, clarities, cuts, finishes, symmetries, labs } =
      req.body;

    if (!shapes || !colors || !clarities || !cuts || !finishes || !symmetries || !labs) {
      console.log('all fields are required');
      return res.redirect('/')
    }

    const diamonds = await Diamond.find({
      shape: shapes,
      color: colors,
      clarity: clarities,
      cut: cuts,
      finish: finishes,
      symmetry: symmetries,
      lab: labs,
    });
    return res.render("diamond_list.ejs", { diamonds: diamonds });

    // shapes.forEach(async (shape, index) => {
    //   // console.log(shape)
    //   const diamond = await Diamond.find({ shape: shape });
    //   // console.log(diamond)
    //   newDiamond.push(diamond[0]);
    //   console.log(newDiamond);
    // })
  } catch (err) {
    console.log(err.message);
    return res.redirect("/");
  }
};

export const addDiamondPage = (req, res) => {
  res.render("diamond_data.ejs");
};

export const addDiamond = async (req, res) => {
  try {
    const { shape, color, clarity, cut, finish, symmetry, lab } = req.body;
    if (!shape || !color || !clarity || !cut || !finish || !symmetry || !lab) {
      console.log("All fields are required");
      return res.redirect("/diamond/adddiamond");
    }
    await Diamond.create(req.body);
    return res.redirect("/diamond/diamondlist");
  } catch (err) {
    console.log(err);
    return res.redirect("/diamond/adddiamond");
  }
};
