/**
 * Creeaza tabelul `calculations` in Neon. Se ruleaza o singura data (e sigur
 * si de mai multe ori -- nu sterge nimic):
 *
 *   node --env-file=.env.local scripts/setup-db.mjs
 */
import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("DATABASE_URL lipseste. Ruleaza intai `vercel env pull .env.local`.");
  process.exit(1);
}

const sql = neon(databaseUrl);

await sql`
  create table if not exists calculations (
    id              bigint generated always as identity primary key,
    created_at      timestamptz not null default now(),

    -- configuratia aleasa de client
    kind            text not null,          -- text | logo
    text            text,                   -- doar pentru kind = text
    size            text,                   -- mic | standard | mare | xl
    stroke          text,                   -- single | double
    graphic         boolean,
    logo_width_cm   integer,                -- doar pentru kind = logo
    logo_complexity text,                   -- simplu | mediu | detaliat
    category        text not null,          -- afacere | personal | eveniment
    rgb             boolean not null,
    delivery        text not null,          -- bucuresti | tara

    -- ce i-a aratat calculatorul
    letters         integer,
    width_cm        integer not null,
    price_low       integer not null,
    price_high      integer not null,
    price_mid       integer not null,
    floored         boolean not null,       -- ridicat la comanda minima
    needs_consult   boolean not null,

    model_version   text not null           -- commit-ul de pe Vercel
  )
`;
await sql`create index if not exists calculations_created_at_idx on calculations (created_at)`;

console.log("Tabelul `calculations` e gata.");
