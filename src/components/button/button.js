import { useNavigate, Link } from 'react-router-dom';
import styled, { css } from 'styled-components'

function Button() {

  return (
    <></>
  );
}

export default Button;

// import { useState,useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import LocomotiveScroll from 'locomotive-scroll';
// import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
// import styled,{ createGlobalStyle } from 'styled-components'
// import './home.module.css'

// import { Homest, Button } from './homest';




// {/* <div style="translate: none; rotate: none; scale: none; transform: translate(-99.68%, 0%) translate3d(0px, 0px, 0px);"> */}




  
//     const pageContainerRef = useRef(null);
//     const scrollerRef = useRef(null);
  
//     useEffect(() => {
//       const pageContainer = pageContainerRef.current;
//       const pinWrap = document.querySelector('.pin-wrap');
//       const pinWrapWidth = pinWrap.offsetWidth;
//       const horizontalScrollLength = pinWrapWidth - window.innerWidth;
  
//       const scroller = new LocomotiveScroll({
//         el: pageContainer,
//         smooth: true,
//       });
//       scroller.on('scroll', ScrollTrigger.update);
  
//       ScrollTrigger.scrollerProxy(pageContainer, {
//         scrollTop(value) {
//           return arguments.length
//             ? scroller.scrollTo(value, 0, 0)
//             : scroller.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//           return {
//             left: 0,
//             top: 0,
//             width: window.innerWidth,
//             height: window.innerHeight,
//           };
//         },
//         pinType: pageContainer.style.transform ? 'transform' : 'fixed',
//       });
  
//       gsap.to('.pin-wrap', {
//         scrollTrigger: {
//           scroller: pageContainer,
//           scrub: true,
//           trigger: '#sectionPin',
//           pin: true,
//           start: 'top top',
//           end: pinWrapWidth,
//         },
//         x: -horizontalScrollLength,
//         ease: 'none',
//       });
  
//       ScrollTrigger.addEventListener('refresh', () => scroller.update());
  
//       ScrollTrigger.refresh();
  
//       // Store the scroller reference
//       scrollerRef.current = scroller;
  
//       // Clean up
//       return () => {
//         scroller.destroy();
//       };
//     }, []);
  
//   return (
//   <>

//   <>
//       <GlobalStyles />
//       <Section>
//         {/* Add your content within the Section component */}
//       </Section>
//       <SectionPin id="sectionPin">
//         <PinWrap className="pin-wrap">
//           {/* Add your content within the PinWrap component */}
//         </PinWrap>
//       </SectionPin>
//       <Paragraph>Sample paragraph</Paragraph>
//     </>
//     <GlobalStyles />
//     <section data-bgcolor="#bcb8ad" data-textcolor="#032f35">
//       <div>
//         <H1 data-scroll data-scroll-speed="1"><span>Horizontal</span> <span>scroll</span> <span>section</span></H1>
//         <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">with GSAP ScrollTrigger & Locomotive Scroll</p>
//       </div>

//     </section>
//     <SectionPin>
//       <PinWrap>
//         <H2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</H2>
//         <Image src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="" />
//         <Image src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="" />
//         <Image src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="" />
//       </PinWrap>
//     </SectionPin>
//     <section data-bgcolor="#e3857a" data-textcolor="#f1dba7"><img src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
//       <h2 data-scroll data-scroll-speed="1" class="credit"><a href="https://thisisadvantage.com" target="_blank">Made by Advantage</a></h2>
//     </section>
    
      
//         <Section>
//           {/* Place your content within the Section component */}
//         </Section>
      
//   </Homest>
//   </>
  
//   );
// }


// // <div className="ens">
// // <p>Search for ENS 
// // <span>&</span>
// // Create your own awesome ENS</p>
// // <div>
// // <input type="text"/><button>Search Now</button>
// // </div>
// // </div>

// // <div className="market">
// // <div>
// //     <p>Create & Sell
// //     Your Best ENS
// //     <span>Trade in a nice ENS you made!</span></p>
// // </div>
// // <div></div>
// // </div>
// // <div>
// // <button>GO Market</button>
// // </div>
// // <div class="community">
// // <p>Show off your assets
// //     &
// //     Communicate with people</p>
// // </div>
// // <div>
// // <Button>Go Community</Button>
// // </div> 
// export default Home;