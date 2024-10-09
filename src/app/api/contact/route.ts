import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  const { name, email, message, phone } = await req.json();
  console.log(name, email, message, phone);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.USER,
    subject: `Contact Request from ${name}`,
    replyTo: email,
    html: `
  <div style="background-color: white; color: #4A5568; padding: 24px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); width: 100%; margin-top: 32px;">
    <h2 style="font-size: 24px; font-weight: 600; margin-bottom: 24px;">Contact Request from ${name}</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    <p><strong>Message:</strong></p>
    <p style="border: 1px solid #CBD5E0; padding: 10px; border-radius: 4px;">${message}</p>
</div>

`,
    text: `${message} Send from ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: "Ok" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
};

// Add the GET method for testing
// export const GET = async () => {
//   return NextResponse.json({ message: "GET request received for testing." });
// };
