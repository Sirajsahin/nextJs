import Head from "next/head"
import Banner from "./Banner"
import FifthSection from "./fifthSection"
import ForthSection from "./forthSection"
import SeventhSection from "./seventhSection"
import Second from "./Second"

const Index=()=>{
    return (
        <>
        <Head>
        <title>Home</title>
        <meta name="siraj" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://vetic-css.s3.ap-south-1.amazonaws.com/style.css" />

        <script type="application/ld+json">
        {JSON.stringify({
    "@context": "http://schema.org",
    "@type": "Organization",
    "url": "https://gomechanic.in",
    "name": "GoMechanic",
    "logo": "https://gomechanic.in/assets/img/advertisepage/new-gomech-logo-seo.png",
    "address": {
    "@type": "PostalAddress",
    "addressLocality": "Gurugram, Haryana",
    "postalCode": "122008",
    "streetAddress": " 3rd Floor, Landmark Tower, Moti VIhar, Ashok Marg, South City I, Sector 41, Gurgaon 122008"
  },
    "email": "info@gomechanic.in",
    "telephone": "+91-8398-970970",
    "sameAs": [
    "https://www.facebook.com/gomechanic.in",
    "https://www.instagram.com/gomechanic.in",
    "https://www.twitter.com/gomechanicindia",
    "https://www.linkedin.com/company/gomechanic",
    "https://www.youtube.com/channel/UCGfHTDcSpvHVORkNdRwfdyQ",
    "https://www.crunchbase.com/organization/gomechanic"
    ],
    "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+91-8398-970970",
    "contactType": "Customer Service"
  }
    ],
    "foundingDate": "2016",
    "founders": [
  {
    "@type": "Person",
    "name": "Rishabh Karwa",
    "id": "https://www.linkedin.com/in/rishabh-karwa-60b419a3"
  },
  {
    "@type": "Person",
    "name": "Kushal Karwa",
    "id": "https://www.linkedin.com/in/kushal-karwa-b60b8125"
  },
  {
    "@type": "Person",
    "name": "Nitin Rana",
    "id": "https://www.linkedin.com/in/nitin-rana-164bba21"
  },
  {
    "@type": "Person",
    "name": "Amit Bhasin",
    "id": "https://www.linkedin.com/in/amit-bhasin-b42990a2"
  }
    ],
    "funder": [
  {
    "@type": "Corporation",
    "legalName": "Sequoia Capital",
    "url": "https://www.sequoiacap.com",
    "sameAs": "https://en.wikipedia.org/wiki/Sequoia_Capital"
  }
    ]
})}
</script>         
        <script type="application/ld+json">
        {JSON.stringify({
            "@context": "http://schema.org",
                "@type": "WebSite",
            "url": "https://gomechanic.in",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://gomechanic.in/?s={car_service_gurgaon}",
                "query-input": "required name=car_service_gurgaon"
            }
          })}</script>
      
       </Head>
       <h1>I am at home page</h1>
        <Second />
        <Banner />
        <ForthSection />
        <FifthSection />
        <SeventhSection />
        </>
    )
}

export default Index