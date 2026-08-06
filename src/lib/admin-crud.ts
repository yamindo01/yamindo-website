import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

const ALLOWED_MODELS = [
  "heroSlide",
  "service",
  "cause",
  "counter",
  "teamMember",
  "galleryImage",
  "testimonial",
  "blogPost",
  "partner",
  "footerEvent",
  "aboutInfo",
  "donationPreset",
  // Sub-page models
  "aboutSection",
  "serviceDetail",
  "programDetail",
  "galleryPageItem",
  "newsArticle",
  "contactMessage",
] as const;

type ModelName = (typeof ALLOWED_MODELS)[number];

function getModel(model: string) {
  const models: Record<string, any> = {
    heroSlide: db.heroSlide,
    service: db.service,
    cause: db.cause,
    counter: db.counter,
    teamMember: db.teamMember,
    galleryImage: db.galleryImage,
    testimonial: db.testimonial,
    blogPost: db.blogPost,
    partner: db.partner,
    footerEvent: db.footerEvent,
    aboutInfo: db.aboutInfo,
    donationPreset: db.donationPreset,
    aboutSection: db.aboutSection,
    serviceDetail: db.serviceDetail,
    programDetail: db.programDetail,
    galleryPageItem: db.galleryPageItem,
    newsArticle: db.newsArticle,
    contactMessage: db.contactMessage,
  };
  return models[model];
}

export async function handleGet(model: string, filters?: Record<string, any>) {
  const prismaModel = getModel(model);
  if (!prismaModel) return NextResponse.json({ error: "Invalid model" }, { status: 400 });
  const data = await prismaModel.findMany({ where: filters || {}, orderBy: { createdAt: "desc" } });
  return NextResponse.json(data);
}

export async function handlePost(model: string, body: Record<string, any>) {
  const prismaModel = getModel(model);
  if (!prismaModel) return NextResponse.json({ error: "Invalid model" }, { status: 400 });
  const data = await prismaModel.create({ data: body });
  return NextResponse.json(data, { status: 201 });
}

export async function handlePut(model: string, id: string, body: Record<string, any>) {
  const prismaModel = getModel(model);
  if (!prismaModel) return NextResponse.json({ error: "Invalid model" }, { status: 400 });
  try {
    const data = await prismaModel.update({ where: { id }, data: body });
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}

export async function handleDelete(model: string, id: string) {
  const prismaModel = getModel(model);
  if (!prismaModel) return NextResponse.json({ error: "Invalid model" }, { status: 400 });
  try {
    await prismaModel.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
