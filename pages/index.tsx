import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Tabs from '../components/Tabs'
import { useState } from 'react'
import TabContentComponent from '../components/TabbedContent'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  var tabs = ["Customer Profile", "In Activity Prediction", "Fraude Predication","Network Activity Prediction"]
  
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Netix</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex w-full flex-1 flex-col px-3 py-3">
        <Navbar logoSrc = "logo.png"/>
        {/* Tabs Component */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
      <TabContentComponent activeTab={activeTab} />
      </main>

    </div>
  )
}

export default Home
