'use client'

import Link from 'next/link'
import newsData from '../../devcamp_news.json';

interface News {
  id: number;
  title: string;
  description: string;
  url: string;
  datems: number;
}

export default function NewsList() {
  const news: News[] = newsData;

  return (
    <div className="flex-col w-full max-w-5xl items-center justify-between p-6 bg-slate-50">
      {news.map((topic) =>
        <div className="flex" key={topic.id}>
            <div className="pt-1 pb-1">
              {new Date(topic.datems).toLocaleDateString("ja-JP")}
            </div>
            <div className="grow pt-1 pb-1 pl-4">
              <Link href={`/news/${topic.id}`}>{topic.title}</Link>
            </div>
        </div>
      )}
    </div>
  )
}