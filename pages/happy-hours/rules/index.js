import Head from 'next/head'
import Link from 'next/link'
import commonStyles from '../../../styles/happy-hours/common.module.css'
import rulesStyles from '../../../styles/happy-hours/rules.module.css'

export default function HappyHoursRules() {
  return (
    <div className={commonStyles.container}>
      <Head>
        <title>Rules - Happy Hours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={commonStyles.main}>
        <h1 className={commonStyles.title}>2022 Happy Hours Rules</h1>
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
        <article className={rulesStyles.article}>
          <h2 className={rulesStyles.title}>背景</h2>
          <p className={rulesStyles.content}>
            本屆的 Happy Hour Committee 對 Happy Hour的實施方式進行一些改變。經過討論決定 2022 的
            Happy Hour 基本上延續 2021 的補助辦法進行，之後再根據 2021
            實施中所遇到的經驗新增修正與說明。Happy Hour 最重要的目的是希望大家在 Netbase Quid
            工作能夠開心，也希望能增進員工私下的交流和建立彼此的私交，如果活動可以增進跨團隊之間的交流將會更好。
          </p>
        </article>
        <article className={rulesStyles.article}>
          <h2 className={rulesStyles.title}>實施辦法</h2>
          <ol className={rulesStyles['rules-list']}>
            <li>
              <p className={rulesStyles['rule-title']}>
                公司將提供 10K NTD 和 3 天 的 Happy Hour 假。新進 Full-time
                員工之補助獎金將依報到日期以季(三個月)為比例調整：
              </p>
            </li>
            <li>
              <p className={rulesStyles['rule-title']}>
                Intern/PT 員工之補助獎金將依合約期間調整：合約期間內，每月補助 500 元整。
              </p>
            </li>
            <li>
              <p className={rulesStyles['rule-title']}>活動類型與成團條件</p>
            </li>
            <li>...TBD</li>
          </ol>
        </article>
      </main>
      <footer className={commonStyles.footer}>I&apos;m Footer 😂</footer>
    </div>
  )
}