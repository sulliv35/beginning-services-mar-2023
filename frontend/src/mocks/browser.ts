import { setupWorker, rest } from 'msw';
import * as cuid from 'cuid';
const url = 'http://localhost:1337/';
export const mocks = [

  rest.get(url + 'support', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        "contactInfo": {
          "name": "Andrew Mervkin",
          "phone": "888-1212",
          "email": "merv@pumpkin.com"
        },
        uptime: {
          days: 13,
          hours: 12,
          minutes: 38
        }
      })
    )
  }),

  rest.post(url + 'locations', async (req, res, ctx) => {
    const reqBody = await req.json();
    const authHeader = (req.headers.get('Authorization')?.split('.')[1] || 'none');
    const sub = JSON.parse(atob(authHeader)).sub;
    return res(
      ctx.status(201),
      ctx.json({
        id: cuid(),
        addedBy: sub,
        addedOn: new Date().toISOString(),
        ...reqBody

      })
    )
  }),
  rest.get(url + 'locations', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _embedded: [
          {
            id: '1',
            name: "Aladdin's Eatery",
            description:
              'On Mayfield, good lunch time - lots of options for vegetarians',
            addedBy: 'Bob',
            addedOn: '2023-01-01',
          },
          {
            id: '2',
            name: "McDonald's",
            description: 'On SOM, burgers. No description needed.',
            addedBy: 'Sue',
            addedOn: '2023-03-01',
          },
        ],
      })
    );
  }),
];
const worker = setupWorker(...mocks);
worker.start();
export { worker, rest };
