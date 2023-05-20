const express = require("express");
const router = express.Router();
const Car = require("../models/Car");
// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })

router.post("/", async (req, res) => {
  // const img = fs.readFileSync(req.file.path);
  // const encode_img = img.toString('base64');
  // const final_img = {
  //     contentType:req.file.mimetype,
  //     image:new Buffer(encode_img,'base64')
  // };
  // Car.create(final_img,function(err,result){
  //     if(err){
  //         console.log(err);
  //     }else{
  //         console.log(result.img.Buffer);
  //         console.log("Saved To database");
  //         res.contentType(final_img.contentType);
  //         res.send(final_img.image);
  //     }
  // })
  const {
    name,
    type,
    model,
    milage,
    availableFrom,
    availableTill,
    description,
    carDetails,
    image,
  } = req.body;

  try {
    let car = await Car.findOne({ name });
    if (car) {
      return res.json({ msg: "Car Already Registered" });
    }

    // const upload = multer({ storage: storage })

    car = new Car({
      name,
      type,
      model,
      milage,
      availableFrom,
      availableTill,
      description,
      carDetails,
      image,
    });

    await car.save();

    res.json(car);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
    const cars = await Car.find({}).sort({createdAt : -1})
    res.status(200).json(cars)
});

module.exports = router;
