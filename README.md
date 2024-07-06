Devcamp Products Webサイト(Next.js版)
====================================

当Webサイトのリポジトリです。Next.jsのSSGによって `out/` ディレクトリ配下に静的ファイルを生成し、ドキュメントルートとします。

![workflow](https://github.com/cm-devcamp/devcamp_app2_prod/actions/workflows/nextjs.yml/badge.svg)

### 利用ライブラリ

- create-next-app
- TypeScript
- Tailwind CSS

## リポジトリ運用ルール

mainブランチへの直接のコミットは控えてください。作業用ブランチを作成し、Pull Requestでレビューののちmainにマージします。

## ローカル環境での動作方法

ローカル環境にNode.jsおよびnpmをインストールし、以下のコマンドでライブラリをインストールします。

```
npm install
```

以下のコマンドで `out/` 以下に静的ファイルをビルドします。

```
npm run build
```

生成された `out/index.html` をLive Previewなどで表示してデバッグします。

## 主なファイル

- `devcamp_news.json` : ニュースデータのJSONファイル
- `devcamp_products.json` : 商品データのJSONファイル
- `app/layout.tsx` : ページレイアウト
- `app/components/*.tsx` : ページのコンポーネント
- `app/page.tsx` : ホーム

## ライブラリなどのライセンス利用について

商用ライセンスやOSSのライブラリ、画像などを利用する場合は各ライセンス規定を遵守してください。表記既定のあるものは、HTMLファイルや他のファイルに含めて構いません。


----
以下create-next-appのREADME

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
