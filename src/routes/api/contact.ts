import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  service: z.string().min(1).max(100),
  message: z.string().trim().min(10).max(2000),
});

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const parsed = schema.safeParse(json);
          if (!parsed.success) {
            return Response.json({ error: "Invalid form data" }, { status: 400 });
          }
          const { name, email, company, service, message } = parsed.data;

          // Log the submission. Once an email provider is wired,
          // call the transactional send route here.
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
      },
    },
  },
});
