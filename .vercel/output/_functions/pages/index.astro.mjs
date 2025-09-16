/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, h as renderScript, b as createAstro } from '../chunks/astro/server_DTu46K8G.mjs';
import 'kleur/colors';
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_hGP8Cuey.mjs';
import { $ as $$Card } from '../chunks/Card_CUJbtTT_.mjs';
import { b as $$Section, c as $$SectionTitle, $ as $$Sponsors, a as $$Services } from '../chunks/Services_Ds7SJ9PB.mjs';
import { l as larrow } from '../chunks/icon3_Oh9nsfgO.mjs';
/* empty css                                 */
import 'clsx';
import { $ as $$MainLayout } from '../chunks/MainLayout_DW6rHmzk.mjs';
export { renderers } from '../renderers.mjs';

const $$Cases = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      index: 0,
      title: "Completed a full electrical rewiring for a local restaurant, improving safety and reducing energy costs by 30%.",
      link: "#"
    },
    {
      index: 1,
      title: "Installed a modern lighting system for a commercial office, enhancing workspace brightness and lowering monthly bills.",
      link: "#"
    },
    {
      index: 2,
      title: "Provided 24/7 emergency repair for a residential building, restoring power within hours and preventing further damage.",
      link: "#"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "cases" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Case Studies", "description": "Discover real-life examples of our trusted electrical work, showcasing successful installations, repairs, and emergency solutions we\u2019ve delivered for homes and businesses." })} ${maybeRenderHead()}<div class="flex flex-col lg:flex-row justify-between rounded-[45px] p-1"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="flex p-[60px] h-full bg-dark text-gray rounded-[45px] m-[1px]"> <div class="flex flex-col gap-5"> <p>${card.title}</p> <a${addAttribute(card.link, "href")} class="flex items-center gap-[15px]"> <span class="text-green">Case Info</span> <picture> ${renderComponent($$result3, "Image", $$Image, { "src": larrow, "alt": "Arrow pointing up right" })} </picture> </a> </div> </div> ` })}`)} </div> ` })}`;
}, "/Users/abeni/Desktop/Positivus-main/src/components/sections/Cases.astro", void 0);

const decorForm = new Proxy({"src":"/_astro/contact-pic.BrB0SfUf.png","width":692,"height":649,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/abeni/Desktop/Positivus-main/src/assets/pics/contact-pic.png";
							}
							
							return target[name];
						}
					});

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex relative justify-start items-center p-[60px] bg-[#F3F3F3] rounded-[45px] overflow-hidden" data-astro-cid-2lkv3ujd> <form class="bg-gray sm:p-6 h-full w-full lg:max-w-lg" data-astro-cid-2lkv3ujd> <div class="flex flex-col sm:flex-row gap-[35px] sm:items-center mb-10" data-astro-cid-2lkv3ujd> <div class="flex items-center gap-[14px]" data-astro-cid-2lkv3ujd> <input type="checkbox" id="checkbox1" name="checkbox1" class="form-checkbox text-black" data-astro-cid-2lkv3ujd> <label for="checkbox1" class="text-black" data-astro-cid-2lkv3ujd>Say Hi</label> </div> <div class="flex items-center gap-[14px]" data-astro-cid-2lkv3ujd> <input type="checkbox" id="checkbox2" name="checkbox2" class="form-checkbox text-black" data-astro-cid-2lkv3ujd> <label for="checkbox2" class="flex items-center text-black" data-astro-cid-2lkv3ujd>Get a Quote</label> </div> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="name" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Name*</label> <input type="text" id="name" name="name" placeholder="Name" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="email" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Email*</label> <input type="email" id="email" name="email" placeholder="Email" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="message" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Message*</label> <textarea id="message" name="message" placeholder="Message" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd></textarea> </div> <button type="submit" name="submit" class="btn-primary w-full" data-astro-cid-2lkv3ujd>Send</button> </form> <picture class="absolute right-[-25%] top-[2%] bottom-[2%] hidden lg:block" data-astro-cid-2lkv3ujd> ${renderComponent($$result, "Image", $$Image, { "src": decorForm, "alt": "decor", "data-astro-cid-2lkv3ujd": true })} </picture> </div>  ${renderScript($$result, "/Users/abeni/Desktop/Positivus-main/src/components/ui/Form.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/abeni/Desktop/Positivus-main/src/components/ui/Form.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-[140px] relative"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Contact Us", "description": "Connect with Us: Let's Discuss Your Electrical Needs" })} ${renderComponent($$result2, "Form", $$Form, {})} </div> ` })}`;
}, "/Users/abeni/Desktop/Positivus-main/src/components/sections/Contact.astro", void 0);

const HeroIlust = new Proxy({"src":"/_astro/pexels-aizat-ramlan-1291546-9679179.B7oZwtUt.jpg","width":3024,"height":4032,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/abeni/Desktop/Positivus-main/src/components/sections/pexels-aizat-ramlan-1291546-9679179.jpg";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-5xl font-medium leading-none md:text-6xl text-center md:text-left">Certified Local Electrician In <br>Croydon</h1> <p class="mt-6 mb-8 text-lg font-normal leading-7 sm:mb-12 text-center md:text-left md:pr-12">Call us 24/7 for fast, reliable electrical service—whether you need a general electrician or urgent emergency assistance. Our experienced team is ready to handle most electrical issues quickly, safely, and efficiently, ensuring your home or business is back to normal in no time.</p> <div class="w-full justify-center md:justify-start items-center inline-flex"> <a href="https://github.com/manulthanura/Positivus" target="_blank" class="px-8 py-5 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7" style="background-color: #f47629;">Call 020 3519 9989
</a> </div> </div> </div> <div class="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> ${renderComponent($$result2, "Image", $$Image, { "src": HeroIlust, "alt": "Hero Ilustration", "loading": "eager", "style": { height: "600px" } })} </div> </div> ` })}`;
}, "/Users/abeni/Desktop/Positivus-main/src/components/sections/Hero.astro", void 0);

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { index, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="accordion__item" class="accordion__item group h-[160px] bg-[#F3F3F3] overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]" data-astro-cid-kq6n5brs> <button class="accordion__toggle w-full h-[160px] flex items-center justify-between p-[60px] cursor-pointer"${addAttribute(`${title} accordion__item menu button`, "id")} aria-expanded="false"${addAttribute(`${title} accordion__item menu content`, "aria-controls")} data-astro-cid-kq6n5brs> <div class="flex items-center gap-[25px]" data-astro-cid-kq6n5brs> <span class="hidden sm:block sm:text-6xl" data-astro-cid-kq6n5brs>0${index}</span> ${title} </div> <div class="bg-gray w-[58px] h-[58px] flex justify-center items-center rounded-full border border-dark" data-astro-cid-kq6n5brs> <div class="accordion__icon h-10 w-10 transition-transform duration-300 flex justify-center items-center relative" aria-hidden="true" data-astro-cid-kq6n5brs></div> </div> </button> <div${addAttribute(`${title} accordion__item menu content`, "id")}${addAttribute(`${title} accordion__item menu button `, "aria-labelledby")} class="accordion__content px-[60px]" data-astro-cid-kq6n5brs> <div class="w-full h-[2px] bg-black" data-astro-cid-kq6n5brs></div> <p class="prose mb-4 mt-1 max-w-full pt-5 pb-[60px] transition-[height]" data-astro-cid-kq6n5brs> ${description} </p> </div> </div>  ${renderScript($$result, "/Users/abeni/Desktop/Positivus-main/src/components/ui/AccordionItem.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/abeni/Desktop/Positivus-main/src/components/ui/AccordionItem.astro", void 0);

const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const content = [
    {
      index: 1,
      title: "What is the best way to discover a good electrician in Croydon?",
      description: "Word of mouth is a powerful tool. Asking around is the first step in locating a good electrician Ask to see their electrical qualifications. Get at least three quotes from different electricians."
    },
    {
      index: 2,
      title: "How much does an electrician in the Croydon cost?",
      description: "We discovered that the average hourly wage in the UK is around \xA380 per hour, albeit this can vary significantly around the country, with London and the south-east being the most expensive."
    },
    {
      index: 3,
      title: "What are the requirements for an electrician?",
      description: "This varies wildly based on the job being completed but in general a basic of three- to four-year apprenticeship and possesses a Level 3 technical and vocational qualification or a Level 3 Diploma."
    }
  ];
  return renderTemplate`${content.map((item) => {
    return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { "index": item.index, "title": item.title, "description": item.description })}`;
  })}`;
}, "/Users/abeni/Desktop/Positivus-main/src/components/ui/Accordion.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "process" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Frequently Asked Questions" })} ${renderComponent($$result2, "Accordion", $$Accordion, {})} </div> ` })}`;
}, "/Users/abeni/Desktop/Positivus-main/src/components/sections/Process.astro", void 0);

const c7 = new Proxy({"src":"/_astro/Electrician-1.D0jhqo_h.webp","width":560,"height":550,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/abeni/Desktop/Positivus-main/src/assets/pics/Electrician-1.webp";
							}
							
							return target[name];
						}
					});

const $$Proposal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex bg-[#F3F3F3] rounded-[45px] p-[60px] relative mt-[123px] mb-[100px]"> <div class="w-full md:w-[100%] flex flex-col gap-[26px]"> <h1 class="text-4xl font-bold">Croydon Electricians</h1> <p>
Our electricians are available 24 hours a day, 7 days a week to handle any situation, including electrical test inspections, diagnostics, fault identification, and more. They are completely certified to perform all forms of domestic and commercial electrical work, from a new plug outlet to a complete or partial rewiring of your home, in a professional and timely manner.

          Any electrical work on your home must be done by a licensed electrician. To satisfy installation and safety laws, all CR9 Electrician Croydon electricians are NICEIC approved and work to British Standard BS 7671.
          
          Our electricians make every effort to cause the least amount of interruption possible and to leave your property clean and tidy after their visit.
</p> <button class="btn-primary md:w-[20%]">Call us now</button> </div> </div> ` })} ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center"> <div class=" rounded-2xl p-8"> ${renderComponent($$result3, "Image", $$Image, { "src": c7, "alt": "alt", "class": "h-[300px] w-auto sm:h-auto sm:w-4/4 object-cover" })} </div> <div> <h2 class="text-3xl font-medium mb-6">Electrical installation service</h2> <p class="mb-6">
Our Electricians are qualified to install many kinds of electrical installations such as
</p> <ul class="space-y-3 mb-8"> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-[#f47629]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Electrical Relocations</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-[#f47629]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Data Center Electrics</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-[#f47629]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Electrical Generator Installations</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-[#f47629]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Audio and Visual</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-[#f47629]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Data Cabling</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-[#f47629]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>PON Networks</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-[#f47629]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Electric Cooker Installation</span> </li> <li class="flex items-start"> <svg class="mr-2 w-5 h-5 mt-1 text-[#f47629]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span>Lights and Switches</span> </li> </ul> </div> </div> ` })} ` })}`;
}, "/Users/abeni/Desktop/Positivus-main/src/components/sections/Proposal.astro", void 0);

const Testimonials = [
	{
		index: 1,
		name: "David Miller",
		role: "Homeowner in South Wales",
		comment: "We called their team for an emergency power outage late at night. They arrived quickly, fixed the issue, and ensured everything was safe before leaving. Professional, friendly, and reliable service!"
	},
	{
		index: 2,
		name: "Emily Roberts",
		role: "Small Business Owner",
		comment: "They rewired our office and installed new lighting perfectly. The job was completed on time, with great attention to detail and clear communication throughout the process."
	},
	{
		index: 3,
		name: "James Carter",
		role: "Restaurant Manager",
		comment: "Our kitchen needed urgent electrical repairs. Their electricians were fast, efficient, and incredibly professional. We were back to business the same day!"
	},
	{
		index: 4,
		name: "Sarah Williams",
		role: "Landlord",
		comment: "From upgrading our rental properties to routine inspections, their team has always delivered excellent work. Dependable, courteous, and competitively priced."
	},
	{
		index: 5,
		name: "Mark Thompson",
		role: "Construction Project Lead",
		comment: "We hired them for a full electrical installation on a new build. Everything was completed to the highest standards, and they kept us informed every step of the way."
	},
	{
		index: 6,
		name: "Rachel Evans",
		role: "Home Renovator",
		comment: "They installed new outdoor lighting and updated our circuit breaker. The results were flawless, and the team made the whole process stress-free."
	}
];

const $$SwiperSlider = createComponent(($$result, $$props, $$slots) => {
  const processedTestimonials = Testimonials.map((item, index, array) => ({
    ...item,
    index: index + 1,
    length: array.length
  }));
  return renderTemplate`${maybeRenderHead()}<div id="ProjectSlider" class="swiper mt-10"${addAttribute({
    "--swiper-pagination-color": "var(--green)",
    "--swiper-pagination-bullet-inactive-color": "#fff",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "19px",
    "--swiper-pagination-bullet-horizontal-gap": "10px"
  }, "style")} data-astro-cid-klye6o2m> <div class="swiper-wrapper mt-[84px] mb-[124px]" data-cursor="swipe" data-astro-cid-klye6o2m> ${processedTestimonials.map((item) => renderTemplate`<div class="swiper-slide text-gray flex flex-col" role="group"${addAttribute(`${item.index} / ${item.length}`, "aria-label")} data-astro-cid-klye6o2m> <div class="flex flex-col justify-center items-center py-[48px] px-6 sm:px-[52px]" data-astro-cid-klye6o2m> <p class="bubble" data-astro-cid-klye6o2m>
"${item.comment}"
</p> </div> <div class="w-full px-10 sm:px-20 " data-astro-cid-klye6o2m> <div class="text-green font-medium" data-astro-cid-klye6o2m>${item.name}</div> <div data-astro-cid-klye6o2m>${item.role}</div> </div> </div>`)} </div> <div class="flex justify-around lg:justify-center mb-[68px] lg:gap-[189px]" data-astro-cid-klye6o2m> <div class="swiper-button-prev w-7 h-7 sm:w-10 sm:h-10" data-astro-cid-klye6o2m> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-astro-cid-klye6o2m><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-klye6o2m></path></svg> </div> <div class="swiper-pagination" data-astro-cid-klye6o2m></div> <div class="swiper-button-next w-7 h-7 sm:w-10 sm:h-10 rotate-180" data-astro-cid-klye6o2m> <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 448 512" data-astro-cid-klye6o2m> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-klye6o2m></path></svg> </div> </div> </div> ${renderScript($$result, "/Users/abeni/Desktop/Positivus-main/src/components/ui/SwiperSlider.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/abeni/Desktop/Positivus-main/src/components/ui/SwiperSlider.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "testimonials" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-20"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Testimonials", "description": "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Services" })} <div class="rounded-[45px] bg-dark mb-[150px] text-gray"> ${renderComponent($$result2, "SwiperSlider", $$SwiperSlider, {})} </div> </div> ` })}`;
}, "/Users/abeni/Desktop/Positivus-main/src/components/sections/Testimonials.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Positivus", "description": "A beautiful and functional landing page design created specifically for digital marketing agencies. With its clean and modern design, Positivus is the perfect template to showcase your agency's services and case studies to potential clients. Built with astro and tailwindcss" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Proposal", $$Proposal, {})} ${renderComponent($$result2, "Cases", $$Cases, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "/Users/abeni/Desktop/Positivus-main/src/pages/index.astro", void 0);

const $$file = "/Users/abeni/Desktop/Positivus-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
