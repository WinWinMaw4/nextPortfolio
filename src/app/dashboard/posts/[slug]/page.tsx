import prisma from '@/lib/db'
import Link from 'next/link'
import React from 'react'

interface PostPageProps {
    params: {
        slug: string;
    };
}

export default async function PostPage({ params }: PostPageProps) {
    const post = await prisma.post.findUnique({
        where: {
            slug: params.slug, // Use params.id directly since Prisma expects a string
        },
    });

    return (
        <main className="flex flex-col items-center gap-y-5 pt-24">
            <div>
                <h3 className="text-3xl font-semibold">{post?.title}</h3>
                <p className='text-lg'>{post?.content}</p>
            </div>
        </main>
    );
}
