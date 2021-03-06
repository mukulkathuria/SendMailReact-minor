const mailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const app = express();
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = mailer.createTransport(sendgridTransport({
	auth:{
		api_key:'Your API Key For Sending the Mail Generated By SendGrid'
	}
}));

//MiddleWares 
app.use(express.json());
app.use(cors());

app.post('/mail',async(req,res) =>{
	const email=req.body.email;
	const subject= req.body.subject;
	const message=req.body.message;

	if(email && subject && message){
		const sendMail = async() =>{
			let info =	await transporter.sendMail({
							to:email,
							from:'Your Email Address registered with SendGrid',
							subject:subject,
							html:`<p>${message}</p>`
						});
	console.log(info);
		}
		sendMail().catch(err => console.log(err));
		res.send({email,subject,message});
	}else{
		res.status(403).send('Email subject and Message all Required');
	}
})

app.listen(9000,() =>{
	console.log('listen to port 9000');
})
