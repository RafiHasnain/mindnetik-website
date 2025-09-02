import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  console.log("Server side post method run");
  const origin = req.headers.get("origin") || "https://itzb-uc-web.vercel.app";

  try {
    const data = await req.json(); // Parse the incoming request body
    const { email, fullName, phone, comment } = data;

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mindnetik@gmail.com",
      subject: `Website contact Request from ${fullName}`,
      html: `<p>Name: ${fullName}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Comment: ${comment}</p>`,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent!" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": origin,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": origin,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  }
}

// Handle preflight OPTIONS requests
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function GET(req: any) {
  console.log("GET handler triggered for testing");

  const origin = req.headers.get("origin") || "*";

  return new Response(
    JSON.stringify({
      success: true,
      message: "GET request successful!",
      timestamp: new Date().toISOString(),
      origin,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
