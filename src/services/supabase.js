import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://knegpbbalqygxcxgjmcb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuZWdwYmJhbHF5Z3hjeGdqbWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5ODY3OTEsImV4cCI6MjA0MDU2Mjc5MX0.nXchBm6K81WsfMQgE-L7DsYRrt1gxWHwLJbWD-GtDC4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
