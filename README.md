# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Environment Variables

Create a `.env` file in the root directory of your project using the variables in the `.env.example` file


## Pocketbase
This starterkit requires you to have a running pocketbase instance, either [locally](https://pocketbase.io/docs/), on PaaS solution like [fly.io](https://github.com/pocketbase/pocketbase/discussions/537) or by using for instance [pockethost.io](https://pockethost.io/).


# Planned features
- [ ] Dashboard page with overview and a clock in / out button. ("no clockin registered so far today")
  - [ ] Total days, expected hours and actual hours. 
  - [ ] Sum + time. 
- [ ] API Route to clock inn and out.
- [ ] Edit/delete a timeslot.
- [ ] Auto "clock out" after 8 hours. But overidden by manual clock out.
- [ ] Access token for API, to be used with i.e. Raycast.
- [ ] Settings
  - [ ] Break, auto-apply or manual.
  - [ ] Working hours.
  - [ ] Working days.
  - [ ] Locale??
- [ ] Organized in Month, week and day breakdown.
- [ ] "progress bar to show today"
- [ ] USING TEMPORAL API POLYFILL. (https://www.npmjs.com/package/temporal-polyfill)

## Bonus

- [ ] Offline PWA with sync.
- [ ] Export to PDF/CSV
- [ ] Calendar integration?

User
- id
- email
- name

Settings
- User.id
- LunchHours
- LunchAutoApply
- DaysInAWeek

Timestamp
- id
- User.id
- date
- clock_in (datetime)
- clock_out (datetime)
- lunch_break_override
- edited_manually

flexitimeBalance
- id
- User.id
- total_minutes
- last_updated



## Decisions:
- Multi-checkins are combined for a day. 
- Check-ins spanning over midnight will be "cut". The minutes still count for a total, but split over 2 days when overflowing.
- The server controls the timezone, frontend submits timezone/locale used when submitting so server can diff.