const nodemailer = require("nodemailer");
const emailSend =async (req , res) => {
    try {
        const { sendTo} = req.body;
        
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "melat.mesele@aait.edu.et",
            pass: "akmnhm@123!",
          },
        });
        
        const mailOption = {
          from: "melat.mesele@aait.edu.et",
          to: `${sendTo}`,
          subject: "room reservation",
          text: "your room reservation process is approved !",
          
        };

        transporter.sendMail(mailOption, function (err, data) {
          if (err) {
            console.log("Error:", err);
          } else {
            console.log("Data:", data);
          }
        });
        return res.status(200).json(mailOption)


        
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
        
    }
    
    
}
module.exports = { emailSend };
