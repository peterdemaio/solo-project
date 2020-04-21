
CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "favorites"
(
    "id" SERIAL PRIMARY KEY,
    "label" VARCHAR (255),
    "url" VARCHAR(255),
    "image" VARCHAR(255),
    "ingredients" text,
    "user_id" integer REFERENCES "user",
    "source" VARCAHR(255),
    "notes" text
);

CREATE TABLE "health"
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255)
);
INSERT INTO "health"
    ("name")
VALUES
    ('balanced'),
    ('high-protein'),
    ('low-fat'),
    ('low-carb'),
    ('vegan'),
    ('vegetarian'),
    ('sugar-conscious'),
    ('peanut-free'),
    ('tree-nut-free'),
    ('alcohol-free');

CREATE TABLE "user_health"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" integer REFERENCES "user",
    "health_id" integer REFERENCES "health",
    "status" boolean
);

CREATE TABLE "meal_plan"
(
    "id" SERIAL PRIMARY KEY,
    "fav_id" integer REFERENCES favorites(id),
    "user_id" integer REFERENCES "user"
);

CREATE TABLE "grocery_list"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" integer REFERENCES "user",
    "item" VARCHAR(255),
    "checked" boolean DEFAULT false
);

