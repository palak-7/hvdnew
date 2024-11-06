import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";
import pool from "@/helper/db";

export const POST = async (req) => {
  const fileData = await req.formData();
  const unique_id = uuid();
  const file = await fileData.get("myFile");
  const name = await fileData.get("name");
  const phone = await fileData.get("phone");
  const email = await fileData.get("email");
  const message = await fileData.get("message");

  // Folder path for storing files
  const folderPath = path.join(process.cwd(), "public/documents", unique_id);

  try {
    // Create folder if it doesn't exist
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    // Define the filename with an extension and save the file to the path
    const medical = `${unique_id}medical${path.extname(file.name)}`;
    const filePath = path.join(folderPath, medical);

    // Save file to disk
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, fileBuffer);

    let connection;
    try {
      // Get a connection from the pool
      connection = await pool.getConnection();

      // Insert data into MySQL database
      const [rows] = await connection.query(
        "INSERT INTO contact (id, name, phone, email, medical_report, message) VALUES (?, ?, ?, ?, ?, ?)",
        [unique_id, name, phone, email, medical, message]
      );

      // Nodemailer configuration for sending emails
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_PASSWORD,
        },
      });

      // Send email to admin
      await transporter.sendMail({
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: "Health Vista Diagnostic Center Contact form",
        attachments: [
          {
            filename: medical,
            path: filePath, // Use the file path to attach the file
          },
        ],
        html: `<html>
                  <body>
                    <h3>You've got a new mail from ${name}, their email is: ✉️${email}, their phone number is: ${phone}</h3>
                    <p>Message:</p>
                    <p>${message}</p>
                  </body>
                </html>`,
      });

      // Send confirmation email to the user
      await transporter.sendMail({
        from: process.env.MY_EMAIL,
        to: email,
        subject: "Thank You for Contacting Health Vista Diagnostic Center!",
        html: `<html>
                <body>
                  <h2>Hey ${name},</h2>
                  <p>Your query is noted! Our team will contact you as soon as possible.</p>
                </body>
               </html>`,
      });

      // Return success response
      return NextResponse.json({ Message: "Success", success: true });
    } catch (dbError) {
      console.error("Database error occurred:", dbError);
      return NextResponse.json({ Message: "Database Error", success: false });
    } finally {
      if (connection) connection.release();
    }
  } catch (error) {
    console.error("File system error occurred:", error);
    return NextResponse.json({ Message: "File System Error", success: false });
  }
};
