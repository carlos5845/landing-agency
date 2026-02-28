"use server";

import nodemailer from "nodemailer";

export async function sendContactMessage(formData: {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}) {
  // 1. Validaciones básicas
  if (
    !formData.name ||
    !formData.email ||
    !formData.message ||
    !formData.service
  ) {
    return {
      success: false,
      message: "Por favor, complete todos los campos requeridos.",
    };
  }

  try {
    // 2. Configuración del transportador (Gmail en este caso)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Contraseña de aplicación
      },
    });

    // 3. Configuración del correo
    const mailOptions = {
      from: `"${formData.name}" <${process.env.EMAIL_USER}>`,
      to: "martinescarlos154@gmail.com",
      replyTo: formData.email,
      subject: `Nuevo mensaje de contacto: ${formData.service}`,
      text: `
        Nombre: ${formData.name}
        Email: ${formData.email}
        Empresa: ${formData.company || "No especificada"}
        Servicio: ${formData.service}
        Mensaje: ${formData.message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #044783;">Nuevo Mensaje de Contacto</h2>
          <p><strong>Nombre:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Empresa:</strong> ${formData.company || "No especificada"}</p>
          <p><strong>Servicio:</strong> ${formData.service}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
      `,
    };

    // 4. Enviar el correo
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "¡Gracias! Tu mensaje ha sido enviado correctamente.",
    };
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return {
      success: false,
      message:
        "Hubo un error al procesar el envío. Intente de nuevo más tarde.",
    };
  }
}
