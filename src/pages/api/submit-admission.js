import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client
const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);

export async function POST({ request }) {
  try {
    const formData = await request.json(); // Get form data from request

    // Insert into Supabase
    const { error } = await supabase.from('admissions').insert([formData]);

    if (error) {
      console.error('Database error:', error);
      return new Response(JSON.stringify({ success: false, message: error.message }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true, message: 'Application submitted successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), { status: 500 });
  }
}
