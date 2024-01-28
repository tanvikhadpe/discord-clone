<h1 align="center" id="title">Full Stack Discord Clone: Next.js 14, React, Socket.io, Prisma, Tailwind, MySQL</h1>

<p></p>
<p id="description">This is a repository for Full Stack Discord Clone using Next.js 14, React, Socket.io, Prisma, Tailwind, MySQL</p>

<h2>Project Screenshots:</h2>
<p></p>
<img src="https://utfs.io/f/22e579d8-c7ba-4910-95c5-4c0e94ff207c-q3qjid.jpg" alt="project-screenshot" width="100%" height="100%/">

<p></p>
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   Real-time messaging using Socket.io
*   Send attachments as messages using UploadThing
*   Delete & Edit messages in real time for all users
*   Create Text Audio and Video call Channels
*   1:1 conversation between members
*   1:1 video calls between members
*   Member management (Kick Role change Guest / Moderator)
*   Unique invite link generation & full working invite system
*   Infinite loading for messages in batches of 10 (tanstack/query)
*   Server creation and customization
*   Beautiful UI using TailwindCSS and ShadcnUI
*   Full responsivity and mobile UI
*   Light / Dark mode
*   Websocket fallback: Polling with alerts
*   ORM using Prisma
*   MySQL database using Filess.io
*   Authentication with Clerk
<p></p>
<h2>🛠️ Installation Steps:</h2>
<p></p>
<p>1. Cloning the repository</p>

```
https://github.com/tanvikhadpe/discord-clone.git
```
<p></p>
<p>2. Install packages</p>

```
npm i
```
<p></p>
<p>3. Setup .env file</p>

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
DATABASE_URL=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```
<p></p>
<p>4. Setup Prisma</p>

```
npx prisma generate
```
```
npx prisma db push
```
<p></p>
<p>5. Running the app</p>

```
npm run dev
```

  <p></p>
  
<h2>💻 Built with</h2>
<p></p>
Technologies used in the project:

*   NextJS
*   React
*   MySQL
*   Prisma
*   Tailwind
*   Socket.io
