---
marp: true
theme: default
class: invert
paginate: true
---

# Mongoose

## Backendutveckling och APIer del 2

---

### Förra föreläsningen

- Introduktion MongoDB
- Övningar Mongo Shell

---

## Dagens agenda

- Mongoose
  - Vad är det?
  - Connection
  - Schema
  - Model
  - Queries
- Komma igång med morgondagens Workshop - fortsättning imorgon under workshopdagen

---

## Mongoose

- npm-paket som vi använder i nodeJS
- ODM – Object document mapping
  - Motsvarar ORM för SQL som t.ex. Prisma
- Ansluter till MongoDB
- Mappar Document i databasen mot Object i JavaScript / TypeScript
- Mer info: [https://mongoosejs.com/](https://mongoosejs.com/)

```npm install mongoose```

---

## Mongoose - Connection

- För att ansluta mot MongoDB krävs en anslutning (connection string/kopplingssträng)
- Connection string är en URI som innehåller all information om databasen man ska ansluta till, t.ex:
  - Host (mongodb+srv://cluster0.x4lmd.mongodb.net)
  - Databasnamn (i exemplet zoo)
  - Användaruppgifter (username/password)

---

## Mongoose - Schema och model

- I kod definieras ett **schema**
- Varje schema mappas mot ett dokument i MongoDB
- Med schemat så skapar vi model-objekt som representerar ett dokument i vår collection

---

## Mongoose - Queries

- När vi skapat ett schema och ett model-objekt kan vi använda **queries** för att:
  - GET med .find() och findById(id)
  - CREATE med .save()
  - PUT med .findByIdAndUpdate(id)
  - DELETE med .deleteAnimal(id)

---

## Mongoose - Queries

- I Mongoose-dokumentationen finns exempel på alla queries:
  - [https://mongoosejs.com/docs/queries.html](https://mongoosejs.com/docs/queries.html)

---

## Demo

---

## Workbook

- Nu är det dags för er att skapa ett REST-api med Mongoose
- Följ instruktionerna som ligger i readme i Workbook-repot:
  - [https://github.com/flindr2/mongoose](https://github.com/flindr2/mongoose)
