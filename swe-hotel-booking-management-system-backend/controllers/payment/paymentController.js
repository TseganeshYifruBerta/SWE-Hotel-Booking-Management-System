const Payment = require("../../models/payment/paymentModel");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "paymentPhotoUploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const paymentMethod = async (req, res) => {
  const Id = uuidv4();
  try {
   
    upload.single("photo")(req, res, async function (err) {
     

      if (err instanceof multer.MulterError) {
        return res.status(500).json({ message: "An error occurred while uploading the photo" });
      } else if (err) {
        return res.status(500).json({ message: "An unknown error occurred while uploading the photo", error: err.message });
      }
    //  console.log( req.file)
      const photoPath = req.file.path;
        const phoneNumber = req.body.phoneNumber;
        const transactionId = req.body.transactionId;
      const payment = await Payment.create({
        uuid: Id,
        photo: photoPath,
        phoneNumber,
        transactionId,
      });

      res.status(200).json(payment);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while creating the payment", error: error.message });
  }
};

module.exports = { paymentMethod };
