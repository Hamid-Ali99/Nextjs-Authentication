import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationUrl = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify your email",
    html: `<p>Please verify your email by clicking the link below:</p>
    <p><a href="${confirmationUrl}">click here</a></p>`,
  });
};
