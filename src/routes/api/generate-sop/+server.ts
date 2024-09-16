import { supabase } from '$lib/supabaseClient';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { id } = await request.json();
	const { data: sop } = await supabase
		.from('sops')
		.select('*')
		.eq('id', id)
		.single();

	const doc = new Document({
		sections: [
			{
				children: [
					new Paragraph({
						children: [
							new TextRun(`Title: ${sop.title}`),
							new TextRun(`Purpose: ${sop.purpose}`),
						],
					}),
					new Paragraph({ children: [new TextRun(`Scope: ${sop.scope}`)] }),
					new Paragraph({
						children: [
							new TextRun(`Responsibilities: ${sop.responsibilities}`),
						],
					}),
					new Paragraph({
						children: [new TextRun(`Procedure: ${sop.procedure}`)],
					}),
				],
			},
		],
	});

	const buffer = await Packer.toBuffer(doc);

	return new Response(buffer, {
		headers: {
			'Content-Disposition': 'attachment; filename="sop.docx"',
			'Content-Type':
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		},
	});
};
