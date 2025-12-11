import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fullName, email, mobile, course, country, recaptchaToken } = req.body;

  if (!recaptchaToken) {
    return res.status(400).json({ error: "Captcha token missing" });
  }

  const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
  const captchaResponse = await fetch(verifyUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });
  console.log("🟢 Captcha Verification Response Status:", captchaResponse);
  const captchaData = await captchaResponse.json();
  if (!captchaData.success || captchaData.score < 0.5) {
    return res.status(400).json({ error: "Captcha verification failed. Please try again." });
  }

  if (!fullName || !mobile) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Configure your SMTP transport (use a real SMTP service in production)
  const gmailUser = process.env.EMAIL_USER;
  const gmailReceiver = process.env.EMAIL_RECEIVER;
  const gmailPass = process.env.EMAIL_PASS;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  const mailOptions = {
    from: `Skill Up <${gmailUser}>`,
    to: gmailReceiver,
    replyTo: email,
    subject: "📩 Enquiry Form Submission - Skillup Study Abroad",
    html: `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 16px;">
      <h2 style="color: #030303;">You've Got a New Enquiry!</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
      <p><strong>Mobile:</strong> ${mobile}</p>
       ${course ? `<p><strong>Course:</strong> ${course}</p>` : ""}
       ${country ? `<p><strong>Country:</strong> ${country}</p>` : ""}
      <hr style="margin: 16px 0;">
      <p style="font-size: 12px; color: #777;">This email was sent automatically from the Skillup Study Abroad website.</p>
    </div>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(res); // Add this line
    return res.status(200).json({ message: "Enquiry sent successfully" });
  } catch (error) {
    console.error(error); // Add this line
    return res.status(500).json({ error: "Failed to send email" });
  }
}
