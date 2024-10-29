// import nodemailer from "nodemailer";
// import pool from "@/helper/db";
// import { NextResponse } from "next/server";
// import { v4 as uuidv4 } from "uuid";
// export async function POST(request) {
//   try {
//     const { name, email, phone, message } = await request.json();
//     const unique_id = uuidv4();
//     {
//       console.log({ name, email, phone, message });
//     }
//     // Use pool.query with async/await for promises

//     const [results] = await pool.query(
//       "INSERT INTO contact(id, name ,email ,phone , message ) VALUES (?, ?, ?, ?, ?)",
//       [unique_id, name, email, phone, message]
//     );
//     {
//       console.log(unique_id);
//     }
//     // Send email using nodemailer
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       host: "smtp.gmail.com",
//       secure: true,
//       auth: {
//         user: process.env.MY_EMAIL,
//         pass: process.env.MY_PASSWORD,
//       },
//     });

//     // Send email to admin
//     await transporter.sendMail({
//       from: process.env.MY_EMAIL,
//       to: process.env.MY_EMAIL,
//       subject: "Health Vista Diagnostics Center contact Form",
//       html: `<html>
//               <body>
//                 <h3>You've got a new mail from ${name}, their email is: ✉️${email} And phone Number is ${phone} </h3>
//                 <p>Message:</p>
//                 <p>${message}</p>
//               </body>
//              </html>`,
//     });

//     // Send confirmation email to the user
//     await transporter.sendMail({
//       from: process.env.MY_EMAIL,
//       to: email,
//       subject: "Thank You for contacting Health Vista Diagnostics Center!",
//       html: `<html>
//               <body>
//                 <h2>Hey ${name}!</h2>
//                 <p>Your query is noted! Our team will contact you as soon as possible.</p>
//               </body>
//              </html>`,
//     });

//     // Return success response
//     return NextResponse.json({
//       message: "Message Sent",
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({
//       message: "Failed to send query",
//       success: false,
//     });
//   }
// }

import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";
import pool from "@/helper/db"; // Ensure this points to your connection pool

export const POST = async (req) => {
  const fileData = await req.formData();
  const unique_id = uuid();
  const file = await fileData.get("myFile");
  const identityFile = await fileData.get("identity");
  const firstName = await fileData.get("firstName");
  const lastName = await fileData.get("lastName");
  const phone = await fileData.get("phone");
  const email = await fileData.get("email");
  const message = await fileData.get("message");

  // Folder path for storing files
  const folderPath = path.join(process.cwd(), "public/documents", unique_id);
  fs.mkdirSync(folderPath, { recursive: true });

  // Convert file data to buffer
  const buffer = Buffer.from(await file.arrayBuffer());
  const buffer2 = Buffer.from(await identityFile.arrayBuffer());

  // Define filenames with extensions
  const medical = `${unique_id}medical${path.extname(file.name)}`;
  const iden = `${unique_id}identity${path.extname(identityFile.name)}`;

  let connection; // Declare a variable to hold the connection
  try {
    // Write files to disk
    await writeFile(path.join(folderPath, medical), buffer);
    await writeFile(path.join(folderPath, iden), buffer2);

    // Get a connection from the pool
    connection = await pool.getConnection();

    // Insert data into MySQL database
    const [rows] = await connection.query(
      "INSERT INTO contact (id, name, phone, email, medical_report, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
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
      subject: "HVD contact form",
      attachments: [
        {
          filename: medical,
          path: path.join(folderPath, medical),
        },
        {
          filename: iden,
          path: path.join(folderPath, iden),
        },
      ],
      html: `<html>
                <body>
                  <h3>You've got a new mail from ${firstName} , their email is: ✉️${email}, their phone number is: ${phone}</h3>
                  <p>Message:</p>
                  <p>${message}</p>
                </body>
              </html>`,
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: email,
      subject: "Thank You for contacting Health Vista Diagnostics!",
      html: `<html>
              <body>
                <h2>Hey ${firstName},</h2>
                <p>Your query is noted! Our team will contact you as soon as possible.</p>
              </body>
             </html>`,
    });

    // Return success response
    return NextResponse.json({ Message: "Success", success: true });
  } catch (error) {
    console.error("Error occurred: ", error);
    return NextResponse.json({ Message: "Failed", success: false });
  } finally {
    if (connection) connection.release(); // Always 
  }
};