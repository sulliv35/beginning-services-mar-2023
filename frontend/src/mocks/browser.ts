import { setupWorker, rest } from 'msw';

export const mocks = [
  rest.get('http://localhost:1337/locations', (req, res, ctx) => {
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
