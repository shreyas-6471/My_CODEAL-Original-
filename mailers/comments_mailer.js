const nodeMailer=require('../config/nodemailer');
exports.newComment = (commento) => {
    console.log('inside newComment mailer', commento);

    nodeMailer.transporter.sendMail({
       from: 'slshreyas4@gmail.com',
       to: commento.user.email,
       subject: "New Comment Published!",
       html: '<h1>Yup, your comment is now published!</h1>' 
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }

        console.log('Message sent', info);
        return;
    });
}