import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();
const g = await db.galleryPageItem.findMany({ where: { active: true }, select: { id: true, category: true, en_category: true, type: true } });
console.log('GALLERY:');
g.forEach(i => console.log(i.id, i.type, i.category, i.en_category));
const n = await db.newsArticle.findMany({ where: { active: true }, select: { id: true, slug: true, featured: true } });
console.log('NEWS:');
n.forEach(i => console.log(i.id, i.slug, i.featured));
await db.$disconnect();
