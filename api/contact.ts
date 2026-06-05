import { z } from "zod";

// Validation schema for the contact form
const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service: z.string().trim().min(1).max(100),
  message: z.string().trim().min(10).max(2000),
});

/**
 * Vercel API route – POST /api/contact
 *
 * Exported directly so Vercel can treat this as a serverless function.
 */
export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      return Response.json({ error: "Invalid form data" }, { status: 400 });
    }
    const { name, email, company, service, message } = parsed.data;

    // Log the submission – replace with actual email sending later
    console.log("[contact] new submission", {
      name,
      email,
      company,
      service,
      length: message.length,
    });

    return Response.json({ ok: true });
  } catch (e) {
    console.error("[contact] error", e);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
