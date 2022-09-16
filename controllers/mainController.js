// eslint-disable-next-line
import Diamond from "../models/diamondSchema.js";

export const diamondDescPage = async (req, res) => {
  try {
    const DiamondShapes = await Diamond.distinct("shape");
    const Diamondcolor = await Diamond.distinct("color");
    const Diamondclarity = await Diamond.distinct("clarity");
    // console.log(Diamondclarity)
    res.render("diamond_desc.ejs", {
      loggedUser: req.user,
      shapes: DiamondShapes,
      colors: Diamondcolor,
      clarities: Diamondclarity,
    });
  } catch (err) {
    console.log(err.message);
    return res.redirect("/");
  }
};
