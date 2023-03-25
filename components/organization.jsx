import {
  LocalBusinessJsonLd,
  NextSeo,
  OrganizationJsonLd,
  SocialProfileJsonLd,
} from "next-seo";

const Seo = () => {
  return (
    <>
      <NextSeo
        title={process.env.NEXT_PUBLIC_APP_NAME}
        description={`welcome to Frontendzone, your ultimate destination
            for all things of front-end development. Frontendzone is a
            destination to learn all frontend technologies practically with
            industry experience.`.slice(0, 150)}
        key="webdesign,web developer"
        canonical={process.env.NEXT_PUBLIC_APP_URL}
        openGraph={{
          type: "website",
          url: `${process.env.NEXT_PUBLIC_APP_URL}`,
          title: process.env.NEXT_PUBLIC_APP_NAME,
          description: `welcome to Frontendzone, your ultimate destination
            for all things of front-end development. Frontendzone is a
            destination to learn all frontend technologies practically with
            industry experience `,

          images: [
            {
              url: "/dev/favicon.svg",
              width: "100",
              height: "100",
              alt: "frontendzone",
              type: "image/jpeg",
            },
            {
              url: "/dev/favicon.svg",
            },
          ],
          siteName: process.env.NEXT_PUBLIC_APP_NAME,
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "Frontendzone | web developement services",
          },
        ]}
      />
      <OrganizationJsonLd
        type="Corporation"
        id={`${process.env.NEXT_PUBLIC_APP_URL}`}
        logo={`${process.env.NEXT_PUBLIC_APP_URL}/dev/logo.svg`}
        legalName="Frontendzone"
        name="Frontendzone"
        address={{
          streetAddress: "Ehill Company Road, Mahangipur",
          addressLocality: "Mirzapur",
          addressRegion: "UP",
          postalCode: "231312",
          addressCountry: "IN",
        }}
        contactPoint={[
          {
            telephone: "+91-7068513356",
            contactType: "customer service",
            email: "admin@frontendzone.com",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        ]}
        sameAs={[`${process.env.NEXT_PUBLIC_APP_URL}`]}
        url={process.env.NEXT_PUBLIC_APP_URL}
      />

      <LocalBusinessJsonLd
        type="Store"
        id={process.env.NEXT_PUBLIC_APP_URL}
        name="Frontendzone"
        description="Dave's latest department store in San Jose, now open"
        url={process.env.NEXT_PUBLIC_APP_URL}
        telephone="+91-7068513356"
        address={{
          streetAddress: "Ehill Company Road, Mahangipur",
          addressLocality: "Mirzapur",
          addressRegion: "UP",
          postalCode: "231312",
          addressCountry: "IN",
        }}
        geo={{
          latitude: "37.293058",
          longitude: "-121.988331",
        }}
        images={[
          {
            url: "/dev/favicon.svg",
            width: "100",
            height: "100",
            alt: "frontendzone",
            type: "image/jpeg",
          },
          {
            url: "/dev/favicon.svg",
          },
        ]}
        sameAs={["https://www.frontendzone.com"]}
        openingHours={[
          {
            opens: "08:00",
            closes: "23:59",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            validFrom: "2019-12-23",
            validThrough: "2020-04-02",
          },
          {
            opens: "14:00",
            closes: "20:00",
            dayOfWeek: "Sunday",
            validFrom: "2019-12-23",
            validThrough: "2020-04-02",
          },
        ]}
        rating={{
          ratingValue: "4.5",
          ratingCount: "508",
        }}
        review={[
          {
            author: "John Doe",
            datePublished: "2006-05-04",
            name: "A masterpiece of literature",
            reviewBody:
              "I really enjoyed this book. It captures the essential challenge people face as they try make sense of their lives and grow to adulthood.",
            reviewRating: {
              bestRating: "5",
              worstRating: "1",
              reviewAspect: "Ambiance",
              ratingValue: "4",
            },
          },
          {
            author: "Bob Smith",
            datePublished: "2006-06-15",
            name: "A good read.",
            reviewBody:
              "Catcher in the Rye is a fun book. It's a good book to read.",
            reviewRating: {
              ratingValue: "4",
            },
          },
        ]}
        makesOffer={[
          {
            priceSpecification: {
              type: "UnitPriceSpecification",
              priceCurrency: "EUR",
              price: "1000-10000",
            },
            itemOffered: {
              name: "Motion Design Services",
              description:
                "We are the expert of animation and motion design productions.",
            },
          },
          {
            priceSpecification: {
              type: "UnitPriceSpecification",
              priceCurrency: "EUR",
              price: "2000-10000",
            },
            itemOffered: {
              name: "Branding Services",
              description:
                "Real footage is a powerful tool when it comes to show what the business is about. Can be used to present your company, show your factory, promote a product packshot, or just tell any story. It can help create emotional links with your audience by showing punchy images.",
            },
          },
        ]}
        areaServed={[
          {
            geoMidpoint: {
              latitude: "41.108237",
              longitude: "-80.642982",
            },
            geoRadius: "1000",
          },
          {
            geoMidpoint: {
              latitude: "51.108237",
              longitude: "-80.642982",
            },
            geoRadius: "1000",
          },
        ]}
        action={{
          actionName: "potentialAction",
          actionType: "ReviewAction",
          target: "https://www.example.com/review/this/business",
        }}
      />
      <SocialProfileJsonLd
        type="Organization"
        name="Frontendzone"
        url="https://www.frontendzone.com"
        sameAs={[
          "http://www.facebook.com/frontendzonedotcom",
          "http://instagram.com/frontendzone",
          "https://www.linkedin.com/company/frontendzone",
        ]}
      />
    </>
  );
};

export default Seo;
