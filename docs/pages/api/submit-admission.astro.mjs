import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../renderers.mjs';

const supabase = createClient(
  "https://hvkmtdkzzmmkpgkvqcvw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2a210ZGt6em1ta3Bna3ZxY3Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1ODMzNTAsImV4cCI6MjA1NzE1OTM1MH0.thu9omXC-2l0Iy_wH8aoQQCshU8iamPVdt3wBHpkAOQ"
);
async function POST({ request }) {
  try {
    const formData = await request.json();
    const { error } = await supabase.from("admissions").insert([formData]);
    if (error) {
      console.error("Database error:", error);
      return new Response(JSON.stringify({ success: false, message: error.message }), { status: 400 });
    }
    return new Response(JSON.stringify({ success: true, message: "Application submitted successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Server error:", error);
    return new Response(JSON.stringify({ success: false, message: "Internal Server Error" }), { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
