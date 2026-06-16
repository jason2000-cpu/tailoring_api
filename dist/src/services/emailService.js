"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactMailConfirmation = sendContactMailConfirmation;
exports.sendPassResetInstructionsMail = sendPassResetInstructionsMail;
exports.sendUserLoginDetails = sendUserLoginDetails;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
const async_retry_1 = __importDefault(require("async-retry"));
// import type SMTPTransport from 'nodemailer/lib/smtp-transport';
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
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
function sendContactMailConfirmation(name, email, subject, message) {
    return __awaiter(this, void 0, void 0, function* () {
        yield transporter.sendMail({
            from: 'GOYMAREY <goymarecompany@gmail.com',
            to: 'jacksonmuturi2000@gmail.com',
            subject: message,
            html: `<h3>Message</h3><p>${subject}<br></br> Regards <br></br> ${email} <br></br> ${name}</p>`
        });
    });
}
function sendPassResetInstructionsMail(to, reset_password_token) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(to, reset_password_token  )
        try {
            yield transporter.sendMail({
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
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
;
function sendUserLoginDetails(user) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, async_retry_1.default)(() => __awaiter(this, void 0, void 0, function* () {
            try {
                const info = yield transporter.sendMail({
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
            }
            catch (error) {
                console.error('Retrying email due to error:', error.message);
                throw error;
            }
        }), {
            retries: 3,
        });
    });
}
