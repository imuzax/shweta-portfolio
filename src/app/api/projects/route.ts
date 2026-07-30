import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    // In a real app, verify admin session/token here
    const body = await req.json();
    const { title, category, client, role, duration, overview, challenge, solution, heroImage, gallery } = body;

    if (!title || !category || !heroImage) {
      return NextResponse.json({ error: 'Missing required fields (title, category, heroImage)' }, { status: 400 });
    }

    const project = await prisma.project.create({
      data: {
        title,
        category,
        client,
        role,
        duration,
        overview,
        challenge,
        solution,
        heroImage,
        gallery: gallery || [],
      },
    });

    return NextResponse.json({ success: true, data: project }, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}