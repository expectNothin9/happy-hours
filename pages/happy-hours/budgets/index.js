import Head from 'next/head'
import Link from 'next/link'
import commonStyles from '../../../styles/common.module.css'
import budgetsStyles from '../../../styles/happy-hours/budgets.module.css'

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_PB_HOST}/api/collections/budgets/records`)
  const budgetsRecords = await res.json()

  // Pass data to the page via props
  return { props: { budgetsRecords } }
}

export default function HappyHoursBudgets({ budgetsRecords }) {
  const sum = budgetsRecords.items.reduce(
    (acc, cur) => ({
      used: acc.used + cur.used,
      remaining: acc.remaining + (cur.total - cur.used),
    }),
    { used: 0, remaining: 0 }
  )
  const usedRate = ((sum.used / (sum.used + sum.remaining)) * 100).toFixed(1)
  const remainingRate = ((sum.remaining / (sum.used + sum.remaining)) * 100).toFixed(1)
  return (
    <div className={commonStyles.container}>
      <Head>
        <title>Budgets - Happy Hours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={commonStyles.main}>
        <h1 className={commonStyles.title}>2022 Happy Hours Budgets</h1>
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
        <table className={budgetsStyles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Used Budget</th>
              <th>Remaining</th>
            </tr>
          </thead>
          <tbody>
            {budgetsRecords.items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.used}</td>
                <td>{item.total - item.used}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className={budgetsStyles.total}>
              <td>Total</td>
              <td>{sum.used}</td>
              <td>{sum.remaining}</td>
            </tr>
            <tr className={budgetsStyles.rate}>
              <td>Rate</td>
              <td>{usedRate}%</td>
              <td>{remainingRate}%</td>
            </tr>
          </tfoot>
        </table>
      </main>
      <footer className={commonStyles.footer}>I&apos;m Footer ????</footer>
    </div>
  )
}
