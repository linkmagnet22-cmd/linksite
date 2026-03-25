import { useState, useEffect, useRef } from "react";

const B = "#E8552D";
const W = "https://static.wixstatic.com/media/";

// ── Hooks ──
function useCounter(end, dur = 2000, go = true) {
  const [c, setC] = useState(0);
  useEffect(() => {
    if (!go) return;
    let v = 0;
    const s = end / (dur / 16);
    const t = setInterval(() => { v += s; if (v >= end) { setC(end); clearInterval(t); } else setC(Math.floor(v)); }, 16);
    return () => clearInterval(t);
  }, [go, end, dur]);
  return c;
}

function useInView(th = 0.2) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: th });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, vis];
}

// ── Data ──
const logos = [
  { n: "Sri Ganapathy Silks", s: W+"8769ca_ea7f2d53f3c2447c8ec83cd3b9347b7f~mv2.avif/v1/fill/w_400,h_200,al_c,q_80,enc_avif,quality_auto/8769ca_ea7f2d53f3c2447c8ec83cd3b9347b7f~mv2.avif" },
  { n: "Saivai", s: W+"8769ca_5c026ba4aad24d8a9c26f42c594318e1~mv2.webp/v1/fill/w_400,h_215,al_c,q_80,enc_avif,quality_auto/8769ca_5c026ba4aad24d8a9c26f42c594318e1~mv2.webp" },
  { n: "The Trampoline", s: W+"8769ca_8cf117139129425b82daa180252b96eb~mv2.avif/v1/fill/w_400,h_125,al_c,q_80,enc_avif,quality_auto/8769ca_8cf117139129425b82daa180252b96eb~mv2.avif" },
  { n: "Hidden Loops", s: W+"8769ca_7cb8c7b3d5dc44b5aff1da3649f17a7a~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,enc_avif,quality_auto/8769ca_7cb8c7b3d5dc44b5aff1da3649f17a7a~mv2.jpg" },
  { n: "Lakshmiram's", s: W+"8769ca_6ebb37c2f835482dbc776b841653551f~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,enc_avif,quality_auto/8769ca_6ebb37c2f835482dbc776b841653551f~mv2.jpg" },
  { n: "Sheela's Kitchen", s: W+"8769ca_8d23fac98fcc4bfda6b0354861178435~mv2.avif/v1/fill/w_400,h_150,al_c,q_80,enc_avif,quality_auto/8769ca_8d23fac98fcc4bfda6b0354861178435~mv2.avif" },
  { n: "La Casa Bella", s: W+"8769ca_7e395ce7b79b4e398d24e8b2f6e157d5~mv2.avif/v1/fill/w_300,h_300,al_c,q_80,enc_avif,quality_auto/8769ca_7e395ce7b79b4e398d24e8b2f6e157d5~mv2.avif" },
  { n: "Taaramitra", s: W+"8769ca_7ff919baabff46e98cb07772118f9fe3~mv2.avif/v1/fill/w_300,h_290,al_c,q_80,enc_avif,quality_auto/8769ca_7ff919baabff46e98cb07772118f9fe3~mv2.avif" },
];

const cases = [
  { img: W+"8769ca_1eb80569a8fd46fcad5adf15ec6b5144~mv2.png/v1/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/1.png", m:"₹0 → ₹3L", p:"in 30 days", b:"Lifestyle Brand", t:"₹0 to ₹3 Lacs sale in one month", d:"From onboarding to over ₹2.7 lakh in sales and 270+ purchases in just 30 days — data-driven D2C growth." },
  { img: W+"8769ca_3b13b6c0cfa34587a75867ba80b7db43~mv2.png/v1/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/Digital%20marketing%20case%20studies.png", m:"₹8.7L Revenue", p:"at 3.5x returns", b:"Fashion Brand", t:"₹8.7 Lacs revenue for a leading fashion brand", d:"Optimised full-funnel targeting, creatives, and conversion tracking to maximise revenue per ad rupee." },
  { img: W+"8769ca_22ba979764cb4d858176e4749be05594~mv2.png/v1/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/Digital%20marketing%20case%20studies%20(1).png", m:"4.76x Returns", p:"with video production", b:"D2C Fashion", t:"Video + performance marketing = 4.76x returns", d:"In-house video production paired with performance marketing. CPA under ₹364 through high-converting creatives." },
  { img: W+"8769ca_d04d801a79c94f7ea237dfad59a8eff6~mv2.png/v1/fill/w_800,h_800,al_c,q_85,enc_avif,quality_auto/Digital%20marketing%20case%20studies%20(2).png", m:"4.25x Returns", p:"from day one", b:"New Fashion Brand", t:"4.25x returns right after onboarding", d:"Maintained healthy CPA through rapid creative testing. Strong, scalable performance baseline from day one." },
];

const svcs = [
  { i:"📈", t:"Performance Marketing", d:"Meta & Google Ads that drive revenue, not just impressions. Full-funnel strategy from awareness to purchase.", tag:"Core Service" },
  { i:"🎯", t:"Digital Strategy", d:"Custom growth roadmaps for D2C brands. We map your path from ₹0 to ₹5 Lacs/month.", tag:"Strategy" },
  { i:"🎬", t:"Content Production", d:"Product shoots, brand films, and ad creatives that stop the scroll and drive clicks.", tag:"Creative" },
  { i:"💻", t:"Web Design & Dev", d:"High-converting Shopify and custom websites designed to turn visitors into buyers.", tag:"Design" },
  { i:"✦", t:"Branding & Identity", d:"Logo design, brand guidelines, and visual identity systems that make your brand unforgettable.", tag:"Branding" },
  { i:"⚙️", t:"Website Maintenance", d:"Ongoing updates, performance monitoring, and technical support to keep your site running smooth.", tag:"Support" },
];

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [ac, setAc] = useState(0);
  const [sr, si] = useInView(0.3);
  const [fail, setFail] = useState(new Set());

  const bc = useCounter(30, 1800, si);
  const rc = useCounter(2, 1800, si);
  const pc = useCounter(50, 1800, si);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const mf = (k) => setFail(p => new Set([...p, k]));

  return (
    <>
      {/* NAV */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"0 48px",height:72,display:"flex",alignItems:"center",justifyContent:"space-between",background:scrollY>60?"rgba(255,255,255,.95)":"transparent",backdropFilter:scrollY>60?"blur(16px)":"none",boxShadow:scrollY>60?"0 2px 24px rgba(0,0,0,.06)":"none",transition:"all .3s" }}>
        <a href="/" style={{ display:"flex",alignItems:"center",gap:14 }}>
          <div style={{ width:40,height:40,borderRadius:10,background:B,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:18 }}>L</div>
          <span style={{ fontSize:18,fontWeight:700,color:"#1a1a2e",letterSpacing:-.5 }}>Link Magnet</span>
        </a>
        <div className="nav-links" style={{ display:"flex",gap:36,alignItems:"center" }}>
          {["Services","Work","Case Studies","Contact"].map(l=>(
            <a key={l} href={`#${l.toLowerCase().replace(/ /g,"-")}`} style={{ fontSize:14,fontWeight:500,color:"#666",transition:"color .2s" }} onMouseEnter={e=>e.target.style.color=B} onMouseLeave={e=>e.target.style.color="#666"}>{l}</a>
          ))}
          <a href="https://www.link-magnet.com/book-online" style={{ background:B,color:"#fff",padding:"10px 24px",borderRadius:10,fontSize:14,fontWeight:600,transition:"all .25s" }}>Book a Call</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight:"100vh",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",background:"linear-gradient(165deg,#FFF7F3 0%,#FFE9E0 20%,#FFF0F5 45%,#F2ECFF 70%,#E8F0FF 100%)" }}>
        <div style={{ position:"absolute",top:-120,right:-120,width:500,height:500,borderRadius:"50%",background:`${B}08` }}/>
        <div style={{ position:"absolute",bottom:-80,left:-80,width:400,height:400,borderRadius:"50%",background:"rgba(200,170,255,.08)" }}/>
        <div style={{ position:"absolute",top:"40%",right:"15%",width:200,height:200,borderRadius:"50%",background:"rgba(255,180,170,.06)",animation:"float 6s ease-in-out infinite" }}/>

        <div className="hero-pad" style={{ maxWidth:1200,margin:"0 auto",padding:"140px 48px 100px",position:"relative",zIndex:1,width:"100%" }}>
          <div className="fade-up" style={{ display:"inline-flex",alignItems:"center",gap:8,background:`${B}0d`,border:`1.5px solid ${B}20`,borderRadius:40,padding:"8px 20px",marginBottom:32 }}>
            <div style={{ width:8,height:8,borderRadius:"50%",background:B,animation:"pulse 2s infinite" }}/>
            <span style={{ fontSize:14,color:B,fontWeight:600,letterSpacing:1,textTransform:"uppercase" }}>0 → 1 Growth Specialists</span>
          </div>
          <h1 className="fade-up-d1 hero-title" style={{ fontFamily:"'Playfair Display',serif",fontSize:76,fontWeight:900,lineHeight:1.05,color:"#1a1a2e",marginBottom:24,maxWidth:800,letterSpacing:-1 }}>
            We take brands from <span style={{ color:B }}>₹0</span> to <span style={{ color:B }}>₹5 Lacs/month</span>.
          </h1>
          <p className="fade-up-d2" style={{ fontSize:22,color:"#6a6a7a",lineHeight:1.6,maxWidth:560,marginBottom:44 }}>
            Performance marketing, web design, branding & content — everything your D2C brand needs to go from zero to revenue in 6 months.
          </p>
          <div className="fade-up-d3 cta-buttons" style={{ display:"flex",gap:16,alignItems:"center",flexWrap:"wrap" }}>
            <a href="https://www.link-magnet.com/book-online" style={{ background:B,color:"#fff",padding:"16px 36px",borderRadius:14,fontSize:17,fontWeight:700,display:"inline-block",transition:"all .25s" }}>Get Your Free Audit →</a>
            <a href="#case-studies" style={{ color:"#1a1a2e",padding:"16px 28px",fontSize:17,fontWeight:600,display:"inline-flex",alignItems:"center",gap:8,borderRadius:14,border:"1.5px solid #e0e0e0" }}>See Our Results</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={sr} style={{ background:"#1a1a2e",padding:"56px 48px" }}>
        <div className="stats-grid" style={{ maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:40 }}>
          {[
            {n:`${bc}+`,l:"Brands Scaled",s:"D2C, SMEs & growing businesses"},
            {n:`₹${rc}Cr+`,l:"Revenue Generated",s:"For our clients across India"},
            {n:`${pc}+`,l:"Projects Delivered",s:"Web, ads, branding & more"},
            {n:"6 Mo",l:"Avg. Time to ₹5L",s:"Our proven 0→1 timeline"},
          ].map((x,i)=>(
            <div key={i} style={{ textAlign:"center",padding:"0 20px" }}>
              <div style={{ fontSize:48,fontWeight:800,color:B,lineHeight:1,marginBottom:8 }}>{x.n}</div>
              <div style={{ fontSize:16,fontWeight:600,color:"#fff",marginBottom:4 }}>{x.l}</div>
              <div style={{ fontSize:13,color:"rgba(255,255,255,.4)" }}>{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-pad" style={{ padding:"100px 48px",background:"#fff" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div style={{ marginBottom:56 }}>
            <div style={{ fontSize:14,fontWeight:700,color:B,letterSpacing:2,textTransform:"uppercase",marginBottom:12 }}>What We Do</div>
            <h2 className="section-title" style={{ fontFamily:"'Playfair Display',serif",fontSize:48,fontWeight:800,color:"#1a1a2e",lineHeight:1.15,maxWidth:600 }}>Services that move the needle.</h2>
            <p style={{ fontSize:18,color:"#8a8a9a",marginTop:16,maxWidth:520 }}>More eyeballs and clicks on your brand that convert into meaningful results.</p>
          </div>
          <div className="services-grid" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24 }}>
            {svcs.map((s,i)=>(
              <div key={i} style={{ background:"#fafafa",border:"1px solid #f0f0f0",borderRadius:20,padding:"36px 32px",cursor:"default",transition:"all .3s" }} onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow="0 20px 60px rgba(0,0,0,.08)"}} onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20 }}>
                  <div style={{ fontSize:36 }}>{s.i}</div>
                  <span style={{ fontSize:11,fontWeight:600,color:B,background:`${B}0d`,border:`1px solid ${B}1a`,padding:"4px 12px",borderRadius:20,letterSpacing:.5,textTransform:"uppercase" }}>{s.tag}</span>
                </div>
                <h3 style={{ fontSize:20,fontWeight:700,color:"#1a1a2e",marginBottom:10 }}>{s.t}</h3>
                <p style={{ fontSize:15,color:"#8a8a9a",lineHeight:1.6 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="work" style={{ padding:"80px 0",background:"linear-gradient(180deg,#fff 0%,#FFF7F3 100%)",overflow:"hidden" }}>
        <div style={{ maxWidth:1200,margin:"0 auto",padding:"0 48px" }}>
          <div style={{ textAlign:"center",marginBottom:48 }}>
            <div style={{ fontSize:14,fontWeight:700,color:B,letterSpacing:2,textTransform:"uppercase",marginBottom:12 }}>Trusted By</div>
            <h2 className="section-title" style={{ fontFamily:"'Playfair Display',serif",fontSize:48,fontWeight:800,color:"#1a1a2e" }}>Working with the best.</h2>
            <p style={{ fontSize:18,color:"#8a8a9a",marginTop:12 }}>30+ D2C brands, SMEs & growing businesses trust us to grow their revenue.</p>
          </div>
        </div>
        {/* Marquee */}
        <div style={{ position:"relative",width:"100%",overflow:"hidden",padding:"24px 0" }}>
          <div style={{ position:"absolute",left:0,top:0,bottom:0,width:100,background:"linear-gradient(90deg,#FFF7F3,transparent)",zIndex:2 }}/>
          <div style={{ position:"absolute",right:0,top:0,bottom:0,width:100,background:"linear-gradient(270deg,#FFF7F3,transparent)",zIndex:2 }}/>
          <div className="logo-strip">
            {[...logos,...logos].map((l,i)=>(
              <div key={i} style={{ flex:"0 0 auto",background:"#fff",border:"1px solid #f0f0f0",borderRadius:18,padding:"16px 32px",margin:"0 14px",display:"flex",alignItems:"center",justifyContent:"center",minWidth:200,height:110,boxShadow:"0 2px 16px rgba(0,0,0,.03)" }}>
                {fail.has(`l${i}`) ? <span style={{ fontSize:15,fontWeight:600,color:"#999",textAlign:"center" }}>{l.n}</span> :
                <img src={l.s} alt={l.n} onError={()=>mf(`l${i}`)} style={{ maxWidth:160,maxHeight:75,objectFit:"contain" }}/>}
              </div>
            ))}
          </div>
        </div>
        {/* Grid */}
        <div style={{ maxWidth:1200,margin:"32px auto 0",padding:"0 48px" }}>
          <div className="logo-grid" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20 }}>
            {logos.map((l,i)=>(
              <div key={`g${i}`} style={{ background:"#fff",border:"1px solid #f0f0f0",borderRadius:16,padding:"24px 20px",display:"flex",alignItems:"center",justifyContent:"center",height:100,boxShadow:"0 1px 8px rgba(0,0,0,.02)" }}>
                {fail.has(`g${i}`) ? <span style={{ fontSize:14,fontWeight:600,color:"#999",textAlign:"center" }}>{l.n}</span> :
                <img src={l.s} alt={l.n} onError={()=>mf(`g${i}`)} style={{ maxWidth:150,maxHeight:65,objectFit:"contain" }}/>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="section-pad" style={{ padding:"100px 48px",background:"#0f0f1a",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",top:-100,right:-100,width:400,height:400,borderRadius:"50%",background:`${B}06` }}/>
        <div style={{ maxWidth:1200,margin:"0 auto",position:"relative",zIndex:1 }}>
          <div style={{ marginBottom:56 }}>
            <div style={{ fontSize:14,fontWeight:700,color:B,letterSpacing:2,textTransform:"uppercase",marginBottom:12 }}>Proof, Not Promises</div>
            <h2 className="section-title" style={{ fontFamily:"'Playfair Display',serif",fontSize:48,fontWeight:800,color:"#fff",lineHeight:1.15 }}>Real dashboards. Real numbers.</h2>
            <p style={{ fontSize:18,color:"rgba(255,255,255,.4)",marginTop:16,maxWidth:520 }}>Actual Meta Ads Manager screenshots from our client campaigns.</p>
          </div>

          <div className="case-layout" style={{ display:"grid",gridTemplateColumns:"320px 1fr",gap:32 }}>
            <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
              {cases.map((c,i)=>(
                <div key={i} onClick={()=>setAc(i)} style={{ background:ac===i?`${B}15`:"rgba(255,255,255,.03)",border:ac===i?`1.5px solid ${B}40`:"1.5px solid rgba(255,255,255,.06)",borderRadius:16,padding:"20px 22px",cursor:"pointer",transition:"all .2s" }}>
                  <div style={{ fontSize:13,fontWeight:600,color:ac===i?B:"rgba(255,255,255,.35)",marginBottom:6,textTransform:"uppercase",letterSpacing:1 }}>{c.b}</div>
                  <div style={{ fontSize:26,fontWeight:800,color:ac===i?B:"rgba(255,255,255,.7)",lineHeight:1,marginBottom:6 }}>{c.m}</div>
                  <div style={{ fontSize:14,color:"rgba(255,255,255,.35)" }}>{c.p}</div>
                </div>
              ))}
            </div>

            <div style={{ background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",borderRadius:24,overflow:"hidden",display:"flex",flexDirection:"column" }}>
              <div style={{ width:"100%",aspectRatio:"1/1",background:"#fff",position:"relative",overflow:"hidden" }}>
                <img src={cases[ac].img} alt={cases[ac].t} style={{ width:"100%",height:"100%",objectFit:"contain" }}/>
                <div style={{ position:"absolute",top:16,right:16,background:"rgba(0,0,0,.7)",backdropFilter:"blur(8px)",borderRadius:10,padding:"6px 14px",fontSize:12,fontWeight:600,color:"#fff",letterSpacing:.5,display:"flex",alignItems:"center",gap:6 }}>
                  <div style={{ width:6,height:6,borderRadius:"50%",background:"#4ADE80" }}/> Meta Ads Dashboard
                </div>
              </div>
              <div style={{ padding:"28px 32px" }}>
                <h3 style={{ fontSize:22,fontWeight:700,color:"#fff",marginBottom:10,lineHeight:1.3 }}>{cases[ac].t}</h3>
                <p style={{ fontSize:16,color:"rgba(255,255,255,.5)",lineHeight:1.6,marginBottom:20 }}>{cases[ac].d}</p>
                <div style={{ display:"flex",gap:12,flexWrap:"wrap" }}>
                  <span style={{ background:`${B}15`,border:`1px solid ${B}30`,borderRadius:10,padding:"8px 16px",fontSize:13,fontWeight:600,color:B }}>{cases[ac].m}</span>
                  <span style={{ background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.08)",borderRadius:10,padding:"8px 16px",fontSize:13,fontWeight:600,color:"rgba(255,255,255,.5)" }}>{cases[ac].p}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="case-thumbs" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,marginTop:32 }}>
            {cases.map((c,i)=>(
              <div key={`t${i}`} onClick={()=>setAc(i)} style={{ borderRadius:14,overflow:"hidden",cursor:"pointer",border:ac===i?`2px solid ${B}`:"2px solid rgba(255,255,255,.06)",opacity:ac===i?1:.5,transition:"all .2s",background:"#fff" }}>
                <img src={c.img} alt={c.t} style={{ width:"100%",height:140,objectFit:"cover",objectPosition:"top",display:"block" }}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ padding:"100px 48px",background:"linear-gradient(165deg,#FFF7F3 0%,#FFE9E0 30%,#FFF0F5 60%,#F2ECFF 100%)",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",top:-60,left:-60,width:300,height:300,borderRadius:"50%",background:`${B}06` }}/>
        <div style={{ maxWidth:800,margin:"0 auto",textAlign:"center",position:"relative",zIndex:1 }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:`${B}0d`,border:`1.5px solid ${B}20`,borderRadius:40,padding:"8px 20px",marginBottom:28 }}>
            <span style={{ fontSize:14,color:B,fontWeight:600,letterSpacing:1,textTransform:"uppercase" }}>Limited Spots</span>
          </div>
          <h2 className="section-title" style={{ fontFamily:"'Playfair Display',serif",fontSize:52,fontWeight:800,color:"#1a1a2e",lineHeight:1.15,marginBottom:20 }}>Ready to go from ₹0 to ₹5 Lacs/month?</h2>
          <p style={{ fontSize:20,color:"#8a8a9a",lineHeight:1.6,marginBottom:40 }}>We only take 3 new brands per month to give each one our full attention. Get your free performance audit and custom growth roadmap.</p>
          <a href="https://www.link-magnet.com/book-online" style={{ background:B,color:"#fff",padding:"18px 48px",borderRadius:14,fontSize:19,fontWeight:700,display:"inline-block",transition:"all .25s" }}>Get Your Free Audit →</a>
          <p style={{ fontSize:14,color:"#bcbccc",marginTop:16 }}>No long-term contracts • Results or we part ways</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" style={{ background:"#0f0f1a",padding:"64px 48px 40px" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div className="footer-grid" style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:60,marginBottom:48 }}>
            <div>
              <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:20 }}>
                <div style={{ width:40,height:40,borderRadius:10,background:B,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:800,fontSize:18 }}>L</div>
                <span style={{ fontSize:18,fontWeight:700,color:"#fff" }}>Link Magnet</span>
              </div>
              <p style={{ fontSize:15,color:"rgba(255,255,255,.4)",lineHeight:1.7,maxWidth:320 }}>Growth-driven brand builders. We specialise in taking D2C brands from ₹0 to ₹5 Lacs/month through performance marketing, web design, and branding.</p>
            </div>
            <div>
              <h4 style={{ fontSize:14,fontWeight:600,color:"#fff",marginBottom:20,letterSpacing:1,textTransform:"uppercase" }}>Services</h4>
              {["Performance Marketing","Web Design","Branding","Content Production"].map(s=>(
                <div key={s} style={{ fontSize:14,color:"rgba(255,255,255,.4)",marginBottom:12 }}>{s}</div>
              ))}
            </div>
            <div>
              <h4 style={{ fontSize:14,fontWeight:600,color:"#fff",marginBottom:20,letterSpacing:1,textTransform:"uppercase" }}>Company</h4>
              {[{l:"Portfolio",h:"/portfolio"},{l:"Blog",h:"/blog"},{l:"Book a Call",h:"https://www.link-magnet.com/book-online"},{l:"Privacy Policy",h:"/privacy"}].map(s=>(
                <a key={s.l} href={s.h} style={{ display:"block",fontSize:14,color:"rgba(255,255,255,.4)",marginBottom:12 }}>{s.l}</a>
              ))}
            </div>
            <div>
              <h4 style={{ fontSize:14,fontWeight:600,color:"#fff",marginBottom:20,letterSpacing:1,textTransform:"uppercase" }}>Contact</h4>
              <div style={{ fontSize:14,color:"rgba(255,255,255,.4)",marginBottom:12 }}>+91 9944668489</div>
              <a href="mailto:linkmagnet22@gmail.com" style={{ display:"block",fontSize:14,color:"rgba(255,255,255,.4)",marginBottom:12 }}>linkmagnet22@gmail.com</a>
              <div style={{ fontSize:14,color:"rgba(255,255,255,.4)",marginBottom:20 }}>Coimbatore, India</div>
              <div style={{ display:"flex",gap:12 }}>
                <a href="https://www.instagram.com/linkmagnet/" target="_blank" rel="noopener noreferrer" style={{ width:36,height:36,borderRadius:10,background:"rgba(255,255,255,.06)",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,.5)",fontSize:14,fontWeight:600 }}>IG</a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ width:36,height:36,borderRadius:10,background:"rgba(255,255,255,.06)",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,.5)",fontSize:14,fontWeight:600 }}>IN</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop:"1px solid rgba(255,255,255,.06)",paddingTop:24,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12 }}>
            <span style={{ fontSize:13,color:"rgba(255,255,255,.25)" }}>© 2026 Link Magnet (VBS Enterprises). All rights reserved.</span>
            <span style={{ fontSize:13,color:"rgba(255,255,255,.25)" }}>Growth-driven brand builders from Coimbatore.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
