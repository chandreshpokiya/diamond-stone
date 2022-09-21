// eslint-disable-next-line
import Diamond from "../models/diamondSchema.js";

export const diamondDescPage = async (req, res) => {
  try {
    const DiamondShapes = await Diamond.distinct("shape");
    const Diamondcolor = await Diamond.distinct("color");
    const Diamondclarity = await Diamond.distinct("clarity");
    const Diamondcut = await Diamond.distinct("cut");
    const Diamondfinish = await Diamond.distinct("finish");
    const Diamondsymmetry = await Diamond.distinct("symmetry");
    const Diamondlab = await Diamond.distinct("lab");
    // console.log(Diamondfinish)
    res.render("diamond_desc.ejs", {
      loggedUser: req.user,
      shapes: DiamondShapes,
      colors: Diamondcolor,
      clarities: Diamondclarity,
      cuts: Diamondcut,
      finishes: Diamondfinish,
      symmetries: Diamondsymmetry,
      labs: Diamondlab,
    });
  } catch (err) {
    console.log(err.message);
    return res.redirect("/");
  }
};
