const { Pool } = require('pg');

async function main() {
  const pool = new Pool({
    connectionString: 'postgresql://postgres.qvytwlokojsupyvebpsw:4IQipHqioIQRujE9@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true',
  });

  // Insert SMP with order 3
  await pool.query(
    `INSERT INTO "EducationService" ("id", "title", "en_title", "description", "en_description", "image", "icon", "order", "active", "createdAt", "updatedAt")
     VALUES ('edu-smp', 'SMP', 'Junior High School', 'Sekolah menengah pertama dengan pendidikan karakter dan akademik yang kokoh.', 'Junior high school with strong character and academic education.', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80', 'School', 3, true, NOW(), NOW())`
  );

  // Rearrange: TK=1, SMP=3, Pesantren=4, Tahfidz=5
  await pool.query(`UPDATE "EducationService" SET "order" = 1 WHERE title = 'TK'`);
  await pool.query(`UPDATE "EducationService" SET "order" = 4 WHERE title = 'Pesantren'`);
  await pool.query(`UPDATE "EducationService" SET "order" = 5 WHERE title = 'Rumah Tahfidz'`);

  const res = await pool.query(`SELECT title, active, "order" FROM "EducationService" WHERE active = true ORDER BY "order"`);
  console.log(res.rows);
  console.log('Done!');
  await pool.end();
}
main().catch(e => { console.error(e); process.exit(1); });