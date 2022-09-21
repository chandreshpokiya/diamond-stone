import Diamond from "../models/diamondSchema.js";

export const getDiamonds = async (req, res) => {
  try {
    const diamonds = await Diamond.find({});
    return res.render("diamond_list.ejs", { diamonds: diamonds, loggedUser: req.user });
  } catch (err) {
    console.log(err.message);
    return res.redirect("/");
  }
};

export const filterDiamond = async (req, res) => {
  // console.log(req.body.shapes)
  // const diamonds = await Diamond.find({ shape: req.body.shapes });

  var shapes;
  var colors;
  var clarities;
  var cuts;
  var finishes;
  var symmetries;
  var labs;
  if (req.body.shapes == "all") {
    shapes = await Diamond.distinct("shape");
  } else {
    shapes = req.body.shapes.pop().split(',');
  }

  if (req.body.colors == "all") {
    colors = await Diamond.distinct("color");
  } else {
    colors = req.body.colors.pop().split(',');
  }

  if (req.body.clarities == "all") {
    clarities = await Diamond.distinct("clarity");
  } else {
    clarities = req.body.clarities.pop().split(',');
  }

  if (req.body.cuts == "all") {
    cuts = await Diamond.distinct("cut");
  } else {
    cuts = req.body.cuts.pop().split(',');
  }

  if (req.body.finishes == "all") {
    finishes = await Diamond.distinct("finish");
  } else {
    finishes = req.body.finishes.pop().split(',');
  }

  if (req.body.symmetries == "all") {
    symmetries = await Diamond.distinct("symmetry");
  } else {
    symmetries = req.body.symmetries.pop().split(',');
  }

  if (req.body.labs == "all") {
    labs = await Diamond.distinct("lab");
  } else {
    labs = req.body.labs.pop().split(',');
  }

  // console.log({
  //   shape: shapes,
  //   color: colors,
  //   clarity: clarities,
  //   cut: cuts,
  //   finish: finishes,
  //   symmetry: symmetries,
  //   lab: labs,
  // })

  // res.send(shapes);

  try {
    // const { shapes, colors, clarities, cuts, finishes, symmetries, labs } =
    //   req.body;

    // if (!shapes || !colors || !clarities || !cuts || !finishes || !symmetries || !labs) {
    //   console.log('all fields are required');
    //   return res.redirect('/')
    // }

    const diamonds = await Diamond.find({
      shape: shapes,
      color: colors,
      clarity: clarities,
      cut: cuts,
      finish: finishes,
      symmetry: symmetries,
      lab: labs,
    });

    return res.render("diamond_list.ejs", {
      diamonds: diamonds,
      loggedUser: req.user,
    });

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
  res.render("diamond_data.ejs", { loggedUser: req.user });
};

export const addDiamond = async (req, res) => {
  // res.send(req.body)
  try {
    const {
      shape,
      color,
      clarity,
      cut,
      finish,
      symmetry,
      lab,
      flurocent,
      girdle,
      stno,
      carat,
      rap,
      lwratio,
      measurement,
      table,
      crown,
      pav,
      depth,
    } = req.body;
    if (!shape || !color || !clarity || !cut || !finish || !symmetry || !lab || !flurocent || !girdle || !stno || !carat || !rap || !lwratio || !measurement || !table || !crown || !pav || !depth) {
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
