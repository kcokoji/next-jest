This is a [Next.js](https://nextjs.org/) and jest project bootstrapped with[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and ci/cd pipeline integration.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## How to set up

### Jest Setup

- Go to next js website and follow the instructions

- Add "test:watch": "jest --watch" to your scripts in package.json

- Install this dev dependencies for linting
  eslint-plugin-jest-dom,eslint-plugin-testing-library,jest-canvas-mock,jest-fail-on-console,resize-observer-polyfill,ts-node,ts-jest

- Create a jest set up file to extend jest with custom matchers

-Add this to your tsconfig.json for remove type errors "types": ["@testing-library/jest-dom"],Then npm install dev dependency @types-jest

- Create a test folder **test** write your tests with **.test.tsx**

### CI/CD Pipeline setup

- Setup your github folder and workflow file
- Create a yml file for the work flow
- Install vercel cli
- Create a token in vercel to handle deployments
- Set the token in the secrets of the github repo
- link your vercel project and deploy

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
