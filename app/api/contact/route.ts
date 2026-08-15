import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: "RESEND_API_KEY is missing.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      /*
       * IMPORTANT:
       * Until you verify your own domain in Resend,
       * use Resend's testing sender.
       */
      from: "XORA Website <onboarding@resend.dev>",

      /*
       * Your XORA email
       */
      to: ["teamxorahq@gmail.com"],

      subject: `New XORA Website Inquiry — ${name}`,

      replyTo: email,

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <title>New XORA Inquiry</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background: #030303;
              font-family: Arial, Helvetica, sans-serif;
              color: #ffffff;
            "
          >
            <div
              style="
                max-width: 650px;
                margin: 40px auto;
                background: #0a0a0a;
                border: 1px solid #242424;
                border-radius: 16px;
                overflow: hidden;
              "
            >

              <div
                style="
                  padding: 28px 30px;
                  background: #0d0d0d;
                  border-bottom: 1px solid #242424;
                "
              >
                <div
                  style="
                    font-size: 13px;
                    letter-spacing: 3px;
                    color: #c8ff00;
                    font-weight: bold;
                    margin-bottom: 10px;
                  "
                >
                  XORA
                </div>

                <h1
                  style="
                    margin: 0;
                    font-size: 25px;
                    color: #ffffff;
                  "
                >
                  New Website Inquiry
                </h1>

                <p
                  style="
                    margin: 8px 0 0;
                    color: #888888;
                    font-size: 14px;
                  "
                >
                  Someone submitted the contact form on your website.
                </p>
              </div>

              <div style="padding: 30px;">

                <div style="margin-bottom: 22px;">
                  <div
                    style="
                      font-size: 12px;
                      color: #c8ff00;
                      margin-bottom: 6px;
                      text-transform: uppercase;
                      letter-spacing: 1px;
                    "
                  >
                    Name
                  </div>

                  <div
                    style="
                      font-size: 16px;
                      color: #ffffff;
                    "
                  >
                    ${escapeHtml(name)}
                  </div>
                </div>

                <div style="margin-bottom: 22px;">
                  <div
                    style="
                      font-size: 12px;
                      color: #c8ff00;
                      margin-bottom: 6px;
                      text-transform: uppercase;
                      letter-spacing: 1px;
                    "
                  >
                    Email
                  </div>

                  <div
                    style="
                      font-size: 16px;
                      color: #ffffff;
                    "
                  >
                    ${escapeHtml(email)}
                  </div>
                </div>

                <div style="margin-bottom: 22px;">
                  <div
                    style="
                      font-size: 12px;
                      color: #c8ff00;
                      margin-bottom: 6px;
                      text-transform: uppercase;
                      letter-spacing: 1px;
                    "
                  >
                    Company
                  </div>

                  <div
                    style="
                      font-size: 16px;
                      color: #ffffff;
                    "
                  >
                    ${escapeHtml(company || "Not provided")}
                  </div>
                </div>

                <div style="margin-bottom: 22px;">
                  <div
                    style="
                      font-size: 12px;
                      color: #c8ff00;
                      margin-bottom: 6px;
                      text-transform: uppercase;
                      letter-spacing: 1px;
                    "
                  >
                    Service
                  </div>

                  <div
                    style="
                      font-size: 16px;
                      color: #ffffff;
                    "
                  >
                    ${escapeHtml(service || "Not selected")}
                  </div>
                </div>

                <div
                  style="
                    margin-top: 28px;
                    padding: 20px;
                    background: #111111;
                    border: 1px solid #242424;
                    border-radius: 10px;
                  "
                >
                  <div
                    style="
                      font-size: 12px;
                      color: #c8ff00;
                      margin-bottom: 10px;
                      text-transform: uppercase;
                      letter-spacing: 1px;
                    "
                  >
                    Message
                  </div>

                  <div
                    style="
                      font-size: 15px;
                      line-height: 1.7;
                      color: #dddddd;
                      white-space: pre-wrap;
                    "
                  >
                    ${escapeHtml(message)}
                  </div>
                </div>

                <div
                  style="
                    margin-top: 28px;
                    padding-top: 20px;
                    border-top: 1px solid #242424;
                    font-size: 12px;
                    color: #666666;
                  "
                >
                  Sent from the XORA website contact form.
                </div>

              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message: error.message || "Resend could not send the email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      id: data?.id,
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message.",
      },
      { status: 500 }
    );
  }
}

/*
 * Prevent HTML injection inside the email.
 */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}