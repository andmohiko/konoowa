import Head from 'next/head'

export const PageHead = (): React.ReactElement => (
  <Head>
    <title>この世の終わりゲーミング</title>
    <meta
      name="description"
      content="ゲーミングチーム「この世の終わりゲーミング」の公式サイトです"
    />
    <link rel="icon" href="/favicon.ico" />

    <link rel="manifest" href="/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#2f245c" />
    <meta name="theme-color" content="#2f245c" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@andmohiko" />

    <meta property="og:url" content={'https://konoowa.vercel.app/'} />
    <meta property="og:title" content={`この世の終わりゲーミング`} />
    <meta
      property="og:description"
      content={'ゲーミングチーム「この世の終わりゲーミング」の公式サイトです'}
    />
    <meta property="og:site_name" content="この世の終わりゲーミング" />
    <meta
      property="og:image"
      content={'https://konoowa.vercel.app/images/konoowa.png'}
    />
  </Head>
)
