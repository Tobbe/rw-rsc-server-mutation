# Redwood RSC Demo 3

Repo demonstrating the RedwoodJS React Server Components implementation

This app shows mutation of server state

## How to run

### GitPod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)

### Locally

`yarn install`

`yarn rw build -v && yarn rw serve`

## What to do

1. Look at the source and see how the `ServerActionCounter.tsx` component uses
   the `'use client'` directive.
2. Notice also how it uses the `mutate()` function to tell the server that it's
   mutating state. This tells RW that the app will need to be refreshed to show
   the new state
3. Look at the source of `funcs.ts`. It uses `'use server'` to tell RW (and
   Vite) that this is a React Server Function aka Server Action
4. Run the app and click "Increment server counter by X". Observe the "Server
   counter: Y" text updating
5. Click "Increment client counter" - We can still use regular React hooks
   mixed with the server-side functionality
6. Now click "Increment server counter by X" again. Notice how we can use
   client side state to influence what happens on the server.

## List of Redwood RSC demos

 1. https://github.com/Tobbe/rw-rsc-client-counter
 2. https://github.com/Tobbe/rw-rsc-suspense
 3. https://github.com/Tobbe/rw-rsc-server-mutation
 4. https://github.com/Tobbe/rw-rsc-rsf-return-value
 5. https://github.com/Tobbe/rw-rsc-form-server-action
 6. https://github.com/Tobbe/rw-rsc-ai-jsx
