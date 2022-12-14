import Head from 'next/head'
import Link from 'next/link'
import commonStyles from '../../styles/common.module.css'
import adminStyles from '../../styles/admin/index.module.css'
import { useRef } from 'react'

export default function Admin() {
  const formRef = useRef()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const fields = Array.from(formRef.current.elements).reduce((acc, cur) => {
      if (cur.type !== 'submit') {
        return { ...acc, [cur.name]: cur.value }
      }
      return acc
    }, {})
    const resp = await fetch('/api/admin/budgets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields),
    })
    // FIXME: response handling
    console.log(resp)
  }
  return (
    <div className={commonStyles.container}>
      <Head>
        <title>Admin - Happy Hours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={commonStyles.main}>
        <h1 className={commonStyles.title}>Admin</h1>
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
        <form ref={formRef} className={adminStyles.form} onSubmit={handleSubmit}>
          <label htmlFor="name-input">
            Name
            <input id="name-input" name="name" value="Darcy" readOnly />
          </label>
          <label htmlFor="email-input">
            Email
            <input
              id="email-input"
              type="email"
              name="email"
              value="dwuang@netbasequid.com"
              readOnly
            />
          </label>
          <label htmlFor="total-input">
            Budget Total
            <input id="total-input" type="number" name="total" value="10000" readOnly />
          </label>
          <label htmlFor="used-input">
            Budget Used
            <input id="used-input" type="number" name="used" value="8715" readOnly />
          </label>
          <label htmlFor="used-on-sports-input">
            Used on sports
            <input
              id="sed-on-sports-input"
              type="number"
              name="usedOnSports"
              value=""
              placeholder="Used on sports"
              readOnly
            />
          </label>
          <label htmlFor="year-input">
            Year
            <input id="year-input" name="year" value="2022" readOnly />
          </label>
          <div className={adminStyles['submit-button-box']}>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </main>
      <footer className={commonStyles.footer}>I&apos;m Footer ????</footer>
    </div>
  )
}
