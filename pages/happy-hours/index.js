import Head from 'next/head'
import Link from 'next/link'
import commonStyles from '../../styles/common.module.css'

export default function HappyHoursHome() {
  return (
    <div className={commonStyles.container}>
      <Head>
        <title>Happy Hours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={commonStyles.main}>
        <h1 className={commonStyles.title}>Happy Hours</h1>
        <nav className={commonStyles.nav}>
          <ul>
            <li>
              <Link href="/happy-hours/rules">Rules</Link>
            </li>
            <li>
              <Link href="/happy-hours/events-sharing">Events Sharing</Link>
            </li>
            <li>
              <Link href="/happy-hours/budgets">Budgets</Link>
            </li>
          </ul>
        </nav>
      </main>
      <footer className={commonStyles.footer}>I&apos;m Footer 😂</footer>
    </div>
  )
}
