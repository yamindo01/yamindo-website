const { Pool } = require('pg');

async function main() {
  const pool = new Pool({
    connectionString: 'postgresql://postgres.qvytwlokojsupyvebpsw:4IQipHqioIQRujE9@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true',
  });
  const res = await pool.query('SELECT id, title, raised, goal, percent FROM "Cause"');
  console.log(JSON.stringify(res.rows, null, 2));
  await pool.end();
}
main().catch(e => { console.error(e); process.exit(1); });
