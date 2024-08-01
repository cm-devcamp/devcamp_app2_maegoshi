import newsData from '../../../devcamp_news.json';

import Header from '../../components/header';
import Footer from '../../components/footer';

interface News {
  id: number;
  title: string;
  description: string;
  url: string;
  datems: number;
}

export async function generateStaticParams() {
  const news: News[] = newsData;
  return news.map((news) => ({
    id: news.id.toString(),
  }))
}

export default function Page({ params }: { params: { id: string } }) {
  const newsList: News[] = newsData;
  const news = newsList.find((news) => params.id == news.id.toString()) ?? {'title':"Not found", 'description':"ニュースが見つかりませんでした"}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Header />
      <div className="flex-col w-full min-h-screen max-w-5xl items-center justify-between p-6 bg-slate-50">
        <h1 className="text-4xl font-bold mb-6">News</h1>
        <p>{news.description}</p>
      </div>
      <Footer />
    </main>
  );
}