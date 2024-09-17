import { supabase } from '$lib/supabaseClient';

export async function GET({ params }) {
	const { id } = params;

	const { data: sop, error } = await supabase
		.from('sops') // Assuming your table is called 'sops'
		.select('*')
		.eq('id', id)
		.single();

	if (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 400 });
	}

	return new Response(JSON.stringify(sop), { status: 200 });
}
