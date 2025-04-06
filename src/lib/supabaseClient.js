
import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project credentials
const SUPABASE_URL = 'https://hvkmtdkzzmmkpgkvqcvw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2a210ZGt6em1ta3Bna3ZxY3Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1ODMzNTAsImV4cCI6MjA1NzE1OTM1MH0.thu9omXC-2l0Iy_wH8aoQQCshU8iamPVdt3wBHpkAOQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);