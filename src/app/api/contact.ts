import type { NextApiRequest, NextApiResponse } from 'next';  
import nodemailer from 'nodemailer';  

// Configure Nodemailer  
const transporter = nodemailer.createTransport({  
   host: 'smtp.gmail.com', // Use your email service’s SMTP server  
   port: 587,  
   secure: false, // true for 465, false for other ports  
   auth: {  
      user: process.env.EMAIL_USER, // Your email address  
      pass: process.env.EMAIL_PASS, // Your email password  
   },  
});  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {  
   if (req.method === 'POST') {  
      const { parentName, email, phoneNumber, studentName, studentAge, program, message } = req.body;  

      try {  
         await transporter.sendMail({  
            from: `"${parentName}" <${email}>`, // sender address  
            to: 's4mujtaba555@gmail.com', // receiver's email  
            subject: 'New Student Information Inquiry', // Subject line  
            text: `  
               Parent Name: ${parentName}  
               Email: ${email}  
               Phone Number: ${phoneNumber}  
               Student Name: ${studentName}  
               Student Age: ${studentAge}  
               Program of Interest: ${program}  
               Message: ${message}  
            `, // plain text body  
         });  

         return res.status(200).json({ success: true });  
      } catch (error) {  
         console.error('Error sending email:', error);  
         return res.status(500).json({ success: false, error: 'Internal Server Error' });  
      }  
   }  

   res.setHeader('Allow', ['POST']);  
   res.status(405).end(`Method ${req.method} Not Allowed`);  
}