import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fullName, email, mobile, course, country } = req.body;

  if (!fullName || !email || !mobile || !course || !country) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Configure your SMTP transport (use a real SMTP service in production)
  const gmailUser = process.env.GMAIL_USER;
  const gmailReceiver = process.env.GMAIL_RECEIVER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  const mailOptions = {
    from: gmailUser,
    to: gmailReceiver,
    replyTo: email,
    subject: "📩 New Enquiry Form Submission - Skillup Study Abroad",
    html: `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 16px;">
      <h2 style="color: #030303;">New Enquiry Received</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Country:</strong> ${country}</p>
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
