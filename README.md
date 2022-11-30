## Next.js

The React Framework for Production. [Next.js](https://nextjs.org/) gives you
- the best developer experience
- hybrid static & server rendering
- TypeScript support
- smart bundling
- route pre-fetching
- no config needed

### Client and Server

In the context of web applications
- client:
  - browser on a user's device
  - an interface the user can interact with
- server:
  - computer in a data centre that stores your application code
  - receives requests from a client
  - does some computation, and sends back an appropriate response

### Rendering

With Next.js, three types of [rendering](https://nextjs.org/learn/foundations/how-nextjs-works/rendering) methods are available:
- Server-Side Rendering ([`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props))
- Static Site Generation ([`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching/get-static-props))
- Client-Side Rendering (`useEffect`)

### Routing

Next.js has a [file-system based router](https://nextjs.org/docs/routing/introduction) built on the concept of pages. When a file is added to the `pages` directory, it's automatically available as a route.

### API Routes

Any file inside the folder `pages/api` is mapped to `/api/*` and will be treated as an [API endpoint](https://nextjs.org/docs/api-routes/introduction) instead of a page.

```js
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
```

### Environment Variables

Next.js comes with built-in support for [environment variables](https://nextjs.org/docs/basic-features/environment-variables), which allows you to do the following:
- Use `.env.local` to load environment variables
- Expose environment variables to the browser by prefixing with `NEXT_PUBLIC_`

## PocketBase

Open Source backend for your next SaaS and Mobile app in 1 file.

[PocketBase](https://pocketbase.io/) is an open source backend consisting of 
- embedded database (SQLite)
- built-in auth management
- convenient dashboard UI
- simple REST-ish API.

## How-to host PocketBase on Fly.io

[Fly.io](https://fly.io/) is a global application distribution platform.

- need payment info to get free Hobby plan
- check [Host for free on Fly.io](https://github.com/pocketbase/pocketbase/discussions/537) for details
  - [notice](https://community.fly.io/t/scp-a-file-into-a-persistent-volume/2729/8): `scp` files from `local` to `remote` is not working properly
  - workaround: `flyctl ssh console` access into the instance and `wget` files from other public storage (like google drive)

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
