import Link from 'next/link';

function Home() {
  return (
    <>
      <h1>HOME</h1>
      <Link href='/sobre'>
        <a>Acessa a paágina Sobre</a>
      </Link>
    </>
  )
}

export default Home;