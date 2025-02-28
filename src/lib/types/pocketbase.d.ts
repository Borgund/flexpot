type StampEvent = CollectionResponse & {
	comment: string;
	pauseMinutes: number;
	start: boolean;
	timeStamp: string;
	user: string;
};

type CollectionResponse = {
	id: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
	user: string;
};

type Settings = {
	id?: string;
	autoApplyLunch: boolean;
	daysInWeek: number;
	lunchMinutes: number;
	user: string;
};

type User = {
	id: string;
	email: string;
	emailVisibility: boolean;
	verified: boolean;
	name?: string;
	avatar?: string;
	created: string;
	updated: string;
};
