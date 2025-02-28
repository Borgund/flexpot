import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const list: StampEvent[] = await locals.pb.collection('stampEvents').getFullList();
	return {
		list
	};
};
