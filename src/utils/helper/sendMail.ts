import nodemailer from "nodemailer";
export const mailSender = async (email: string, title: string , body: any) => {
	try {
		var transport = nodemailer.createTransport({
			host: "sandbox.smtp.mailtrap.io",
			port: 2525,
			auth: {
			  user: "e7a5de1b147ba9",
			  pass: "c224c85b5c16d0"
			}
		  });
  
	  let info = await transport.sendMail({
		from: "kushagrarai83@gmail.com", // sender address
		to: `${email}`, // list of receivers
		subject: `${title}`, // Subject line
		html: `${body}`, // html body
	  })
	  console.log(info.response)
	  return info
	} catch (error: any) {
	  console.log(error.message)
	  return error.message
	}
  }


