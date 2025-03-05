import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
import retry from 'async-retry';
// import type SMTPTransport from 'nodemailer/lib/smtp-transport';


dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    // port: 465,
    // secure: false, 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    // logger: true,
    // debug: true,
    // connectionTimeout: 60000,
    // tls: {
    //     rejectUnauthorized: false
    // }
});

export async function sendContactMailConfirmation( name: string, email: string, subject: string,  message: string) {
    await transporter.sendMail({
        from: 'GOYMAREY <goymarecompany@gmail.com',
        to: 'jacksonmuturi2000@gmail.com',
        subject: message,
        html: `<h3>Message</h3><p>${subject}<br></br> Regards <br></br> ${email} <br></br> ${name}</p>`
    })
}


export async function sendPassResetInstructionsMail(to: string, reset_password_token: string) {
    // console.log(to, reset_password_token  )
    try {
        await transporter.sendMail({
            from: '"GOYMAREY" <goymarecompany@gmail.com',
            to,
            subject: 'Reset password instructions',
            html: `
                    <p>Hello ${to}!</p>
                    <p>Someone has requested a link to change your password. You can do this through the link below</p>
                    <a href='https://antiago.goymarey.com/changepassword/${reset_password_token}'>Change my password</a>
                    <p>or copy and open this link in your browser: https://antiago.goymarey.com/changepassword/${reset_password_token}</p>
                    <p>If you didn't request this, please ignore this email.</p>
                    <p>Your password won't change untill you access the link above and create a new one.</p>
                `
        });
    } catch (error: any) {
        throw new Error(error.message)
    }
};


export async function sendUserLoginDetails(user: any) {

    await retry(async () => {
        try {
            const info = await transporter.sendMail({
                from: '"GOYMAREY" <info@goymarey.com>',
                to: user.email,
                subject: 'Account Login Details',
                html: `
                    <p>Hello ${user.Fname}</p>
                    <p>We have created a user account for you</p>
                    <p>Use the below details to access your client </p>
                    <a href="https://antiago.goymarey.com/" target="_blank">Account Here</a>
                    <p>Password : <strong>${user.password}</strong></p>
                    <p>Email:  <strong>${user.email}</strong></p>
                    <br></br>
                    <br></br>
                    <p>For any inquiries feel free to reply to this email</p>
                    <p>Thank You For Being Our Valued Customer</p>
                `
            });
            console.log('Email sent:', info.response);
        } catch (error: any) {
            console.error('Retrying email due to error:', error.message);
            throw error;
        }
    }, {
        retries: 3,
    });
}

