import type { LayoutServerLoad } from './$types';
import { serializeNonPOJOs } from '$lib/utils';

export const load = (async ({ locals }) => {
	const user = locals.pb.authStore.record;
	const userAvatar = locals.pb.files.getURL({ ...user }, user?.avatar);

	return { user: serializeNonPOJOs(user), userAvatar };
}) satisfies LayoutServerLoad;
