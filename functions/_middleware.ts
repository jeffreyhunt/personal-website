import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Jeffrey Hunt", email: "jeffrey@jeffreyhunt.com.au" }],
    },
  ],
  from: { name: "Enquiry", email: "no-reply@example.com" },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" },
    }),
});