**This repo is a minimal reproduction of supavisor not working as expected**

- client/src/pages/api/health.ts -> a route that just returns "success"
- client/src/pages/api/test.ts -> a route that returns a simple db query

Relevant discord thread: https://discord.com/channels/839993398554656828/1186753547522543616

**How to set up this repo**

- Fork this repo
- Create a vercel project with the same settings outlined in .vercel/repo.json
- Set a DATABASE_URL in your vercel env using the pooler supabase url with query params for `?pgbouncer=true&connection_limit=1`
- Search for all instances of "`<Your"` and update each instance to use your own key/code
- Push a commit with the new data and it will trigger a github action to deploy your project to vercel
- Go the URL for the deployed project in vercel and run the following command:
  `(await Promise.allSettled([...Array(500)].map(async (v) => {await fetch('https://<projecturl>.vercel.app/api/test');}))).filter(({status}) => status !== 'fulfilled').length;`
  You will see that this fails and your supavisor DB reaches a connection limit
