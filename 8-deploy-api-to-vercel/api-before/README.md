---
marp: true
---

# Deploy av API med - Vercel

## Idag

- Detta är inte krav för kursen
- Deploy med Vercel
- Integrera Vercel med MongoDb

---

## Vercel

- Platform som underlättar bygge och deploy av frontend och backend
- Nackdelen är att det är svårare att anpassa om man har specifika behov
- Ej "long lived", stödjer inte t.ex. Websockets
- Liknade tjänster Netlify, Heroku, Firebase (Google)
- Tjänster som AWS (Amazon) och Azure (Microsoft) kan även användas med kräver mer jobb

---

## Bygge och deploy

- Build/bygge är processen som förbereder koden för deploy
  - Ex. test av kod, minimering, kompilering
- Deploy är när man flyttar "bygget" till en server
- Vercel både bygger och deployar

---

## Setup project with Vercel

- Create a directory named `/api` in root
- Create `vercel.json` in root and add the following:

```json
    { "version": 2, "rewrites": [{ "source": "/(.*)", "destination": "/api" }] }
```

---

- Create folder `public` in root and in it add empty file `.gitkeep`

- Install `vercel` globally on your system with the command (choose GitHub)

    ```bash
    npm i -g vercel
    ```

- Create a Vercel account at <https://vercel.com>
- Login in to your account using the CLI in the terminal with the command

    ```bash
    vercel login
    ```

---

- If you have a `build` command in `package.json`, `vercel-build` need to be added. This is because Vercel will try to run the normal build command otherwise.

```json
"scripts": {
    "build": "tsc",
    "vercel-build": "echo 'vercel-build'"
},
```

---

- Rename `index.ts` to `app.ts`
- Use cors in `app.ts`
- Add catch all GET-endpoint in app.ts
- Create new index.ts and move `app.listen` to it

```javascript
app.get("/", (req, res) => {
    res.json({
        message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
    });
});
```

---
  
- Export `app` as `export default app`
- Create new file `index.ts` in root folder `/api` and import `app` from `app.ts`

---

### Caveats

Had issues with `"type": "module"` in `package.json` and `"target": "ES2020"` and `"module": "ESNext"` in `tsconfig.json`.

Remove `"type": "module"` and in `tsconfig.json` use  

```json
  "target": "esnext",
  "module": "commonjs",
```

---

### Integrate with MongoDB Atlas

- Install npm package `dotenv`
  
  ```bash
    npm i dotenv 
  ```

- Add `.env` file and add environmental variable `MONGODB_URI`

```env
MONGODB_URI="mongodb+srv://username:password@yoururl.x4lmd.mongodb.net/yourCollection"
```


- Update `.env` and use it where you connect to your database
- Add `import 'dotenv/config'` in `app.ts`

---

### Follow these guides to integrate Vercel and MongoDB

- Add integration with Vercel in MongoDb Atlas
  - [Vercel Integration in MongoDB Atlas](https://www.mongodb.com/docs/atlas/reference/partner-integrations/vercel/#add-a-vercel-integration)
  - Use the default selections
- Add integration with MongoDb Atlas in Vercel
  - [Connect MongoDB Atlas to Vercel](https://vercel.com/integrations/mongodbatlas)

---

### Länkar

- [Using Express.js with Vercel](https://vercel.com/guides/using-express-with-vercel)
- [Short video clip](https://www.youtube.com/watch?v=B-T69_VP2Ls)