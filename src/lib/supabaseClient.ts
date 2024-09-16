import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://faqxcrwcqhuptexxfvsi.supabase.co'; // Your actual Supabase URL
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhcXhjcndjcWh1cHRleHhmdnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1MTE0NjYsImV4cCI6MjA0MjA4NzQ2Nn0.e-qqK7QAVzGpgKQtiJlUibNAqsdHhQlRaQaW89bpwNk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
