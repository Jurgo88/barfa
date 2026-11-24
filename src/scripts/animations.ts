import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  // Úvod na domovskej stránke: riadky nadpisu vyjdú zdola, potom text a fotka
  const lines = gsap.utils.toArray<HTMLElement>('.hero .line > span');
  const heroBits = gsap.utils.toArray<HTMLElement>('.hero [data-hero]');
  const heroMedia = document.querySelector<HTMLElement>('.hero__media');
  if (lines.length) {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.fromTo(lines, { yPercent: 110, autoAlpha: 1 }, { yPercent: 0, duration: 1.1, stagger: 0.12 })
      .fromTo(heroBits, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.1 }, '-=0.7');
    if (heroMedia) {
      tl.fromTo(heroMedia, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'expo.inOut' }, 0.15);
      const img = heroMedia.querySelector('img');
      if (img) {
        tl.fromTo(img, { scale: 1.25 }, { scale: 1, duration: 1.6, ease: 'expo.out' }, 0.3);
        gsap.to(img, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: heroMedia, start: 'top top', end: 'bottom top', scrub: true } });
      }
    }
  }

  // Prvky s data-reveal sa pri scrollovaní postupne zobrazia
  const reveal = (els: Element[]) =>
    gsap.fromTo(els, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out', overwrite: true });
  // Prvky, ktoré sa preskočili rýchlym scrollom alebo odkazom (#reels), sa zobrazia hneď
  const show = (els: Element[]) => gsap.set(els, { y: 0, autoAlpha: 1, overwrite: true });
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: reveal,
    onEnterBack: reveal,
    onLeave: show,
  });

  // Fotky na kartách sa pri vstupe jemne odkryjú
  gsap.utils.toArray<HTMLElement>('.card__img img, .service__img img').forEach((img) => {
    gsap.fromTo(img, { scale: 1.15 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'center center', scrub: true } });
  });

  // Veľký nadpis vo výzve na kontakt sa posúva s scrollom
  gsap.utils.toArray<HTMLElement>('.cta .display').forEach((el) => {
    gsap.fromTo(el, { xPercent: -6 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom 60%', scrub: true } });
  });

  root.classList.add('anim-ready');
});

// Ak sa animácie nespustia (alebo je pohyb obmedzený), obsah sa zobrazí hneď
mm.add('(prefers-reduced-motion: reduce)', () => {
  root.classList.remove('anim');
});
