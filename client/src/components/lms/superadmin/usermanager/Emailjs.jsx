
//import emailjs from 'emailjs-com';
import React from 'react';
import Emailjscom from 'emailjs';


export default function Emailjs(){
    const sendEmail = (e) => {
        e.preventDefault(); 
    
        Emailjscom.sendForm('service_ro299nh', 'template_vu975sl', e.target, 'user_kSAowTg3PYMIY9hPvmot4')
          .then(response => {
            console.log(response)
    
          })    
      }
    // const client = new SMTPClient({
    //     user: 'satheesh',
    //     password: '1234567890',
    //     host: 'satheeshcse1602@gmail.com',
    //     ssl: true,
    // });
    
    // // send the message and get a callback with an error or details of the message that was sent
    // client.send(
    //     {
    //         text: 'i hope this works',
    //         from: 'you <username@your-email.com>',
    //         to: 'someone <someone@your-email.com>, another <another@your-email.com>',
    //         cc: 'else <else@your-email.com>',
    //         subject: 'testing emailjs',
    //     },
    //     (err, message) => {
    //         console.log(err || message);
    //     }    
}