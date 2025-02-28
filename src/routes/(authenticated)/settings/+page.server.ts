import type { AuthRecord, ClientResponseError } from 'pocketbase';
import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	const user: AuthRecord = await locals.pb.authStore.record;
	const settings: Settings[] = await locals.pb.collection('settings').getFullList();
	if (!settings[0]) {
		const defaultSettings: Settings = {
			autoApplyLunch: true,
			daysInWeek: 5,
			lunchMinutes: 30,
			user: user?.id ?? ''
		};
		await locals.pb.collection('settings').create(defaultSettings);
	}
	return {
		settings: settings?.[0]
	};
};

export const actions: Actions = {
	updateSettings: async ({ locals, request }) => {
		const data = await request.formData();
		console.log('updateSettings', data);
		const id = data.get('id')?.toString();
		const autoApplyLunch = data.get('autoApplyLunch') === 'on';
		const daysInWeek = parseInt(data.get('daysInWeek')?.toString() ?? '5');
		const lunchMinutes = parseInt(data.get('lunchMinutes')?.toString() ?? '30');

		try {
			if (id) {
				console.log('updateSettings', id, autoApplyLunch, daysInWeek, lunchMinutes);
				const result = await locals.pb.collection('settings').update(id, {
					autoApplyLunch,
					daysInWeek,
					lunchMinutes
				});
				if (result.id) {
					return result;
				}
			}
		} catch (error) {
			console.error(error);
			const errorObj = error as ClientResponseError;
			return fail(500, { fail: true, message: errorObj.data.message });
		}
	}
};
