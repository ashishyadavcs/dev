import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
const Page = ({ cards }) => {
  const router = useRouter();
  return (
    <div className="container my-4">
      <style jsx>{`
        .cards {
          display: grid;
          margin: 2rem 0;
          grid-gap: 2rem;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
        .cardd::-webkit-scrollbar {
          width: 3px;
        }
        .cardd {
          box-shadow: 0 4px 4px rgb(155, 152, 152);
          overflow: hidden;
          border-radius: 4px;
          min-height: 370px;
          background: #00c9ff; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #92fe9d,
            #00c9ff
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #92fe9d,
            #00c9ff
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
      `}</style>
      <NextSeo
        title="Random Tarot Card Generator"
        description="The random tarot card generator emerged as an offshoot of the digital
        age, where technology met the spiritual realm.generate random tarot card with this online tool"
      />
      <h1>Random Tarot Card Generator</h1>
      <p>
        While traditional tarot readings involve shuffling and drawing cards
        from a physical deck, the advent of technology has given rise to
        innovative tools such as the random tarot card generator. Tarot cards
        have captivated mystics, seekers, and curious minds for centuries. These
        ancient cards, often associated with divination and introspection, hold
        the power to offer insights into our lives, unravel mysteries, and
        inspire self-reflection. In this article, we delve into the captivating
        world of the random tarot card generator, exploring its origins,
        functions, benefits, and how it adds a modern twist to the mystical art
        of tarot.
      </p>
      <button
        className="theme-btn d-block mx-auto"
        onClick={(e) =>
          router.push(`/random-tarot-card-generator?card=${Math.random(10)}`)
        }
      >
        generate cards
      </button>
      <div className="cards">
        {cards.map((card, i) => (
          <div key={i} className="cardd">
            <div
              className="card p-2 m-2"
              style={{ height: "300px", overflow: "auto" }}
            >
              <h3>{card.name}</h3>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>The Birth of the Random Tarot Card Generator </h2>
      <p>
        The random{" "}
        <a href="https://www.tarot.com/tarot/cards" style={{ color: "#555" }}>
          tarot card
        </a>{" "}
        generator emerged as an offshoot of the digital age, where technology
        met the spiritual realm. It became a means to make tarot accessible to a
        wider audience, transcending geographical barriers. Developed by
        software engineers and tarot enthusiasts, these generators employ
        algorithms to replicate the process of shuffling and drawing cards
        virtually, providing users with instant readings and guidance.
      </p>
      <Image
        objectFit="contain"
        src="/dev/random-tarot-card-generator.png"
        alt="random-tarot-card-generator"
        height="400"
        width="600"
      />
      <h2>How Does It Work?</h2>
      <p>
        At the heart of the random tarot card generator lies intricate
        programming designed to simulate the traditional shuffling and card
        selection process. The algorithm incorporates the symbolism, meanings,
        and positions of each card in the tarot deck, ensuring a diverse and
        authentic reading experience. Users can often customize their reading by
        choosing a specific spread or area of focus, such as love, career, or
        personal growth.
      </p>
      <h2>The Advantages of the Random Tarot Card Generator</h2>
      <p>
        The random tarot card generator offers numerous advantages that enhance
        the tarot experience for both beginners and seasoned practitioners.
        Firstly, it provides accessibility and convenience, allowing users to
        access tarot readings anytime, anywhere, without the need for physical
        cards. Additionally, it eliminates the need for extensive knowledge of
        tarot symbolism and interpretation, making it approachable for
        newcomers.
      </p>
      <h2>Embracing the Digital Age: Modernizing Tarot </h2>
      <p>
        The random tarot card generator represents a blending of tradition and
        technology, embracing the modern era while honoring the ancient practice
        of tarot. Its existence not only attracts tech-savvy individuals but
        also encourages the integration of technology in the spiritual realm. It
        opens doors to new possibilities, such as combining artificial
        intelligence and machine learning to refine the accuracy and
        personalization of tarot readings.
      </p>
      <h2>Exploring Limitations and Ethical Considerations</h2>
      <p>
        While the random tarot card generator offers remarkable benefits, it's
        essential to be aware of its limitations and the ethical considerations
        associated with its usage. The absence of human intuition and the
        potential for misinterpretation highlight the importance of approaching
        generated readings with a discerning mindset. Additionally, the privacy
        and security of user data are vital aspects that developers must
        prioritize.
      </p>
      <h2>Conclusion</h2>
      <p>
        The random tarot card generator represents a fascinating fusion of
        ancient wisdom and modern technology. By leveraging algorithms to
        simulate the traditional tarot experience, it has become an accessible
        and convenient tool for those seeking guidance and introspection.{" "}
      </p>
    </div>
  );
};

export default Page;

export async function getStaticProps() {
  const data = await fetch(
    `https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=9`
  )
    .then((res) => res.json())
    .catch((err) => "");
  return {
    props: {
      cards: data.cards || [],
    },
  };
}
