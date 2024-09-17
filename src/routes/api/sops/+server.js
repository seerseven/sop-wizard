import { supabase } from '$lib/supabaseClient';

export async function GET() {
	// Fetch all SOPs from the 'sops' table in Supabase
	const { data: sops, error } = await supabase.from('sops').select('*');

	if (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 400 });
	}

	return new Response(JSON.stringify(sops), { status: 200 });
}
