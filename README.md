<img width="1440" alt="nourished-homepage-screenshot" src="https://github.com/jamie-c/nourished/assets/5421944/0452f3ce-d315-4350-a951-fa6f729a8486">

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

I am currently in the process of migrating our site from Squarespace to Next.js. This is a work in progress!

## Getting Started

Clone the repository and install dependencies:

```bash
git clone git@github.com:jamie-c/nourished.git
cd nourished
npm install
```

If you want to test out the form functionality on the contact page, you'll need to create a .env.local file in the root directory of the project and add the following environment variables with your own values. See [nodemailer](https://nodemailer.com/about/) for more information.

```bash
EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASS=
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load a custom font.

## Introduction

This project is a recreation of the nourishedfood.co website. The current version that the domain points to is a squarespace site.

Run this site locally to compare the two.

This version will eventually be deployed and replace the current site.

## Technologies

-   Next.js
-   Tailwind CSS
-   TypeScript
