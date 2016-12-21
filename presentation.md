class: center, middle

# Databases

???
- I am Simon Vetter and I am going to tell you something about databases
- Has anyone of you used one?
   - yes you have, I bet you indirectly used at least 3 today

---

# Agenda

1. Types of Databases

--
2. Postgres

--
3. Postgres example

--
4. Questions

--
5. Quiz

--
6. Sources

---

# Types of Databases
- relational/SQL - databases

--
  - Postgres (Zanlando, Skype, Instagram)
  - MySql (Facebook, Symantec, Uber)

--
- NoSQL - databases

--
  - document databases

--
        - MongoDB (Bosch, Expedia)
        - CouchDB (LHC, BBC) 
--
  - graph databases
        - Neo4j (ebay, Walmart)
        - Core Data (Apple)
--
  - key-value-databases
        - Google Big Table
        - memcached (many vendors for caching)

---
class: center
# Postgres
<img src="https://www.postgresql.org/media/img/about/press/elephant.png" width="60%">

---
# Postgres
- SQL

--
- object/relational

--
- structured/unstructured data store

--
- ACID(atomicity, consistency, isolation und durability)

--
- user defined functions (psql, JavaScript, C, C++, ...)

--
- trigger

--
- views (materialized)

--
- inheritence

--
- advanced type system

--
- extensions

--
  - foreign tables

---

# Postgres example
Todolist database
- assign tasks to user
- track time
- tagging for tasks
- assign tasks to users
- plan a task

---

# Postgres example
![](/schema.png)

---

# Postgres example
```sql
CREATE TABLE task(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL CHECK( char_length(title) <= 100 ),
  description TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  assigned_to INTEGER REFERENCES user(id),
  planned DATE,
  estimated_time INTERVAL,
  done BOOLEAN NOT NULL DEFAULT false
);
```
---

# Postgres example
```sql
*CREATE TABLE task(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL CHECK( char_length(title) <= 100 ),
  description TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  assigned_to INTEGER REFERENCES user(id),
  planned DATE,
  estimated_time INTERVAL,
  done BOOLEAN NOT NULL DEFAULT false
);
```
???
we create a new table with the name `task`

---

# Postgres example
```sql
CREATE TABLE task(
* id SERIAL PRIMARY KEY,
  title TEXT NOT NULL CHECK( char_length(title) <= 100 ),
  description TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  assigned_to INTEGER REFERENCES user(id),
  planned DATE,
  estimated_time INTERVAL,
  done BOOLEAN NOT NULL DEFAULT false
);
```

???
define the id column
it has the type serial, this is a special postgres type.
This way postgress will automatically assign a unique number to this field.
the columns is also a `PRIMARY KEY` this way it is gurantied to be unique
for this row.

---

# Postgres example
```sql
CREATE TABLE task(
  id SERIAL PRIMARY KEY,
* title TEXT NOT NULL CHECK( char_length(title) <= 100 ),
  description TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  assigned_to INTEGER REFERENCES user(id),
  planned DATE,
  estimated_time INTERVAL,
  done BOOLEAN NOT NULL DEFAULT false
);
```

???
define a title that has the property text `NOT NULL` sais it must contain
some values.

---

# Postgres example
```sql
CREATE TABLE task(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL CHECK( char_length(title) <= 100 ),
* description TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  assigned_to INTEGER REFERENCES user(id),
  planned DATE,
  estimated_time INTERVAL,
  done BOOLEAN NOT NULL DEFAULT false
);
```

???
an optional description what to do

---

# Postgres example

```sql
CREATE TABLE task(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL CHECK( char_length(title) <= 100 ),
  description TEXT,
* tags TEXT[] NOT NULL DEFAULT '{}',
  assigned_to INTEGER REFERENCES user(id),
  planned DATE,
  estimated_time INTERVAL,
  done BOOLEAN NOT NULL DEFAULT false
);
```

---

# Postgres example
```sql
CREATE TABLE task(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL CHECK( char_length(title) <= 100 ),
  description TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
* assigned_to INTEGER REFERENCES user(id),
  planned DATE,
  estimated_time INTERVAL,
  done BOOLEAN NOT NULL DEFAULT false
);
```
???
this field is used to say who has to do this job 

---

# Postgres example
```sql
CREATE TABLE task(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL CHECK( char_length(title) <= 100 ),
  description TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  assigned_to INTEGER REFERENCES user(id),
* planned DATE,
  estimated_time INTERVAL,
  done BOOLEAN NOT NULL DEFAULT false
);
```
???
when the task should be done

---

# Postgres example
```sql
CREATE TABLE task(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL CHECK( char_length(title) <= 100 ),
  description TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  assigned_to INTEGER REFERENCES user(id),
  planned DATE,
* estimated_time INTERVAL,
  done BOOLEAN NOT NULL DEFAULT false
);
```
???
the time that you propably need to complete the task

---

# Postgres example
```sql
CREATE TABLE task(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL CHECK( char_length(title) <= 100 ),
  description TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  assigned_to INTEGER REFERENCES user(id),
  planned DATE,
  estimated_time INTERVAL,
* done BOOLEAN NOT NULL DEFAULT false
);
```
???
weather the task is doen


```sql
CREATE TABLE tasks.user(
  id SERIAL PRIMARY KEY,
  email TEXT not null check( char_length(email) <= 150)
);
```

---
class: center, middle
# Any Questions?

---
# Quiz

- When would you use a database


---
# Sources

- http://readwrite.com/2010/08/26/lhc-couchdb/