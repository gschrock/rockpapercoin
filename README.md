See [the deployed project here](https://rockpapercoin-gabrielschrock.vercel.app/).

Considerations:

- This project is missing the font `Brandon Grotesque` and I chose not to find a substitute, instead opting to fall back on `sans-serif`.
- No unit tests, but if I were to add unit tests I would first focus on component behavior testing of the input fields and their interaction with the disabled state of the `Sign In` button.
- In considering extending the functionality I would next address proper email and password validation, most likely as part of the `handleFormSubmit` within the `loginForm` component. It would be beneficial from a UX perspective to check for valid input on submit of the form and surface user feedback mesages (e.g. "a password must contain x, y, z..."). If the form validation fails on submit we could also block the application from making an unecesssary api call to login.
  - If I were to do this I would probably extend the `formState` object to include keys for tracking validation separately for each field.
- For simplicity I'm passing the submitted email and password to the success page using `router.push()` and query params. I can't imagine this being a reasonable practice with an actual email and password. It is just to satisfy requirements of rendering the form data on another page.

### Gif of Deployed App Behavior

![example](example.gif)

# Standard Generated Readme

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
