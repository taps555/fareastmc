// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lrmieoavpamsxpezvrty.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxybWllb2F2cGFtc3hwZXp2cnR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNTk4NzYsImV4cCI6MjA2NTYzNTg3Nn0.AF0eQNSRv0gfZmspNO9yFUjPpF-dZ1-v-AXBu6tF0Ss";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
