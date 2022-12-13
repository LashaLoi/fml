import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ujnqdewxljiuegdsrbae.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqbnFkZXd4bGppdWVnZHNyYmFlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2OTg5NTQzOCwiZXhwIjoxOTg1NDcxNDM4fQ.5sJB15KfBicGBPQAd2xgE4Gquyp9VsewZSXRDSEN1TI";

export const supabase = createClient(supabaseUrl, supabaseKey);
