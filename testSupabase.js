import { createClient } from '@supabase/supabase-js';
import 'dotenv/config'; // Ensure dotenv loads env variables

const SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.PUBLIC_SUPABASE_ANON_KEY;

console.log("🔍 Checking Environment Variables:");
console.log("SUPABASE_URL:", SUPABASE_URL);
console.log("SUPABASE_ANON_KEY:", SUPABASE_ANON_KEY ? "✅ Key Loaded" : "❌ Key Missing");

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("❌ Supabase URL or Key is missing. Check your .env file.");
}

// Initialize Supabase Client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

(async () => {
  try {
    // Fetch Existing Data
    const { data, error } = await supabase.from('admissions').select('*').limit(5);
    if (error) throw error;
    console.log("✅ Supabase Connection Successful! Data:", data);
  } catch (error) {
    console.error("❌ Supabase Connection Error:", error.message);
  }
})();

// Insert Data into Supabase (Separate Function)

    const { data, error } = await supabase.from("admissions").insert([
        { full_name: "John Doe", father_name: "Doe Sr.", email: "john@example.com", campus: "Gambar" }
      ]);

    if (error) throw error;
    console.log("✅ Insert Successful!", data);
  } try (error) {
    console.error("❌ Insert Failed:", error.message);
  }
})();
