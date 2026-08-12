const { Pool } = require('pg');

async function main() {
  const pool = new Pool({
    connectionString: 'postgresql://postgres.qvytwlokojsupyvebpsw:4IQipHqioIQRujE9@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true',
  });

  // Deactivate all except TK (2), Boarding School (4), Rumah Tahfidz (9)
  await pool.query(`UPDATE "EducationService" SET active = false WHERE "order" NOT IN (2, 4, 9)`);

  // Rename Boarding School to Pesantren
  await pool.query(`UPDATE "EducationService" SET title = 'Pesantren', "en_title" = 'Islamic Boarding School', description = 'Pondok pesantren yang membentuk kedisiplinan, akhlak mulia, dan keunggulan akademik.', "en_description" = 'Islamic boarding school building discipline, noble character, and academic excellence.' WHERE "order" = 4`);

  const res = await pool.query(`SELECT title, active FROM "EducationService" ORDER BY "order"`);
  console.log(res.rows);
  console.log('Done!');
  await pool.end();
}
main().catch(e => { console.error(e); process.exit(1); });