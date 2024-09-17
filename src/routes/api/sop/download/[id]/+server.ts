import { supabase } from '$lib/supabaseClient';
import docx from 'docx';
const { Document, Packer, Paragraph, TextRun } = docx;

export async function GET({ params }) {
	const { id } = params;

	const { data: sop, error } = await supabase.from('sops').select('*').eq('id', id).single();

	if (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 400 });
	}

	const doc = new Document({
		sections: [
			{
				children: [
					new Paragraph({
						children: [new TextRun(`Title: ${sop.title}`)]
					}),
					new Paragraph({
						children: [new TextRun(`Purpose: ${sop.purpose}`)]
					}),
					new Paragraph({
						children: [new TextRun(`Scope: ${sop.scope}`)]
					}),
					new Paragraph({
						children: [new TextRun(`Responsibilities: ${sop.responsibilities}`)]
					}),
					new Paragraph({
						children: [new TextRun(`Procedure: ${sop.procedure}`)]
					})
				]
			}
		]
	});

	const buffer = await Packer.toBuffer(doc);

	return new Response(buffer, {
		headers: {
			'Content-Disposition': `attachment; filename="${sop.title}.docx"`,
			'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
		}
	});
}
