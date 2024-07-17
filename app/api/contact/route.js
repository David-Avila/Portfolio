import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);

export async function POST(req){
    try {
      const body = await req.json();
      const { name, email, message } = body;
      const { data, error } = await resend.emails.send({
        from: name +' <requests@davidavila.tech>',
        to: ['aviladurandavid613@gmail.com'],
        subject: "From your portfolio",
        html: `
            <h3>${message}</h3>
            <h3>Reply to ${email}</h3>
        `,
      })
  
  
      if (error) {
        return Response.json({ error }, { status: 500 });
      }
  
      return Response.json(data);
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }
  