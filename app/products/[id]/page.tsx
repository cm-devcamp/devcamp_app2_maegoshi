import Image from 'next/image'
import Link from 'next/link'

import products from '../../../devcamp_products.json';

import Header from '../../components/header';
import Footer from '../../components/footer';

interface Products {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  photo: string;
  datems: number;
}

export async function generateStaticParams() {
  const productList: Products[] = products;
  return productList.map((product) => ({
    id: product.id.toString(),
  }))
}

export default function Page({ params }: { params: { id: string } }) {
  const productList: Products[] = products;
  const product = productList.find((product) => params.id == product.id.toString()) ??
    {
      'name':"Not found",
      'description':"商品が見つかりませんでした",
      'price':0,
      'photo':"/images/notfound.png"
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Header />
      <div className="flex-col w-full min-h-screen max-w-5xl items-center justify-between p-6 bg-slate-50">
        <Link href={`/products/`}>
          <h1 className="text-4xl font-bold mb-6">Products</h1>
        </Link>
        <h2 className="text-2xl font-bold mb-6">{product.name}</h2>
        <p className="p-12">{product.description}</p>
        <p className="p-12">価格: {product.price}円(税別)</p>
        <Image className="p-12"
          src={product.photo}
          width={960}
          height={480}
          alt={product.name}
        />
      </div>
      <Footer />
    </main>
  );
}