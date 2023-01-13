const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = 5000

function sendEmail(){
    return new Promise((resolve,reject) =>{

        var transporter = nodemailer.createTransport({
            service : 'gmail',
            auth:{
                user:'visualmatrix13@gmail.com',
                pass : 'gpwxsdbcsrgcqhxy'
            }
    })
    
    const mail_configs ={
        from :'visualmatrix13@gmail.com',
        to : 'navathu811@gmail.com',
        subject : 'Birthday Email',
        text : 'Hi Dear, A true friend is someone who will go to the ends of the earth to make the other person happy. You’ve done that for me countless times — thank you and happy birthday!'
    };
    transporter.sendMail(mail_configs , function(error , info){
        if(error){
            console.log(error)
            return reject({message:`An error has occured`})
        }
        return resolve({message:"Email send successfully"})
    })

    })
}

app.get('/',(req,res)=>{

    sendEmail()
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message))

})
app.listen(port,() => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`)
})