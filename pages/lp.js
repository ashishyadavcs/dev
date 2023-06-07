import Image from "next/image";

const Page = () => {
  return (
    <>
      <style>
        {`
           .overlay{
            position:relative;
           }

           .overlay>*:not(:before){z-index:2}
           .overlay::before{
            content:"";
            position:absolute;
            height:100%;
            width:100%;
            background:rgba(0,0,0,0.8);
           }
            .banner{min-height:300px}
            .key-highlight{background:#0e0e41;min-height:300px}
            .gallery .container{
            display:flex;
            gap:20px;
            flex-wrap:wrap;
            justify-content:center
            }
            .key-highlight{
              min-height:300px;
            }
            .key-highlight .overlay{
              pointer-events:none;
              object-fit:cover;
            }
            .gallery img{border-radius:8px;}
            @media (max-width:767px){
            .gallery span{min-width:100%;}
              .gallery .container{flex-wrap:nowrap;overflow:auto;justify-content:unset}
            }
            `}
            
      </style>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>ghd sport apk download </h1>
              <p>lorem</p>
            </div>
            <div className="col-md-6">
              <Image priority src="/ashish.jpg" objectFit="cover" layout="fill" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Image src="/ashish.jpg" objectFit="cover" layout="fill" alt="" />
            </div>
            <div className="col-md-6">
              <h2>About us</h2>
              <b>Sub headung</b>
              <p>lorem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="key-highlight overlay position-relative">
       <Image src="/ashish.jpg" alt="" layout="fill" />
        <div className="container">
          <h1>Ky points</h1>
        </div>
      </div>
      <div className="gallery">
        <div className="container my-4">
        {[...Array(6)].map((img, i) => (
          <Image key={i} src="/ashish.jpg" alt="" height={300} width={300} />
        ))}
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
