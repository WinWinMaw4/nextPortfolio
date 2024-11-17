import prisma from '@/lib/db'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const posts = await prisma.post.findMany({
    where: {
      title: {
        endsWith: "post",
      }
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true
    },
    take: 10,
    // skip:10
  })

  const postsCount = await prisma.post.count();
  return (
    <main className='flex flex-col items-center gap-y-5 pt-24'>
      <div className="">
        <h1 className='text-3xl font-bold'>All Post ({postsCount})</h1>

        <ul className='border-t border-b border-black/10 py-5 leading-8'>
          {posts?.map((post) => (
            <li key={post.id} className=' text-xl flex items-center justify-between px-5'>
              <Link href={`posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default page