import { supabase } from '$lib/supabaseClient';

export async function POST({ request, params }) {
	const { id } = params;
	const updatedSop = await request.json();

	const { data, error } = await supabase.from('sops').update(updatedSop).eq('id', id);

	if (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 400 });
	}

	return new Response(JSON.stringify(data), { status: 200 });
}
