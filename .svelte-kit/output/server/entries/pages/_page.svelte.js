import { c as create_ssr_component, d as spread, f as escape_object, v as validate_component, h as add_attribute } from "../../chunks/ssr.js";
const Person = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 16 16" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" fill-rule="evenodd" d="M10 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-9 8c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10s3.162.44 4.18 1.041c1.1.65 1.32 1.255 1.32 1.459a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1m5.5-4c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h9a2.5 2.5 0 0 0 2.5-2.5c0-2-3.15-4-7-4" clip-rule="evenodd"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Hand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 16 16" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<g fill="none"><g clip-path="url(#gravityUiHand0)"><path fill="currentColor" fill-rule="evenodd" d="M6.5 3.325v5.971L5 8.921l-.53-.132l-.672-.168l-.205-.051a.478.478 0 0 0-.409.84l.167.13l.547.425l.43.334l2.142 1.666l2.728-.181L12.5 11.5l.667-3.557l.108-.579l.455-2.426l.148-.787l.009-.047a.51.51 0 0 0-.993-.234l-.013.046l-.22.77l-.161.564L12 7h-1V2.023a.523.523 0 0 0-1.043-.048l-.005.048l-.07.775l-.216 2.381l-.147 1.617L9.5 7h-1l-.019-.093l-.329-1.647L8 4.5l-.26-1.298l-.13-.652l-.022-.108A.55.55 0 0 0 6.5 2.55zm-2.543 3.79L5 7.374V2.55a2.05 2.05 0 0 1 3.617-1.321a2.023 2.023 0 0 1 3.883.794v.182a2.01 2.01 0 0 1 2.861 2.176l-1.387 7.395a1.5 1.5 0 0 1-1.346 1.219l-3.302.283l-.028.002l-2.728.182a1.5 1.5 0 0 1-1.02-.313l-3.287-2.555a1.978 1.978 0 0 1 1.694-3.48m9.346 8.383a.75.75 0 0 0-.106-1.496l-7 .5a.75.75 0 1 0 .106 1.496z" clip-rule="evenodd"/></g><defs><clipPath id="gravityUiHand0"><path fill="currentColor" d="M0 0h16v16H0z"/></clipPath></defs></g>`}<!-- HTML_TAG_END --></svg>`;
});
const Brush = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 16 16" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" fill-rule="evenodd" d="M8.922 9.842q.077.425.078.896c0 1.907-1.387 3.66-3.79 3.894a4.78 4.78 0 0 1-4.208-1.774a2 2 0 0 1-.21-.333c-.231-.461-.292-1-.292-1.528c.312.047.599.045.852 0c.635-.112 1.061-.487 1.148-1C2.73 8.637 3.572 7 5.76 7q.224 0 .435.028l3.417-4.784a2.971 2.971 0 1 1 4.145 4.145zm-.56-1.444l2.819-2.013A2.7 2.7 0 0 0 9.615 4.82L7.626 7.605q.43.324.737.793m4.066-2.904l.457-.326a1.471 1.471 0 1 0-2.052-2.052l-.326.457a4.2 4.2 0 0 1 1.921 1.921M3.98 10.247c.086-.507.272-.962.54-1.264c.225-.254.572-.483 1.242-.483c.517 0 .913.197 1.198.523c.297.34.541.906.541 1.715c0 1.121-.786 2.24-2.435 2.4a3.3 3.3 0 0 1-2.63-.922c.76-.337 1.374-.965 1.544-1.969" clip-rule="evenodd"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Filmstrip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 16 16" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" fill-rule="evenodd" d="M11.5 3.5h.5A1.5 1.5 0 0 1 13.5 5v.5h-2zm0 3.5v2h2V7zM15 7v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3zm-1.5 3.5h-2v2h.5a1.5 1.5 0 0 0 1.5-1.5zm-3.5-7H6v9h4zm-5.5 9v-2h-2v.5A1.5 1.5 0 0 0 4 12.5zm0-5.5v2h-2V7zm0-1.5h-2V5A1.5 1.5 0 0 1 4 3.5h.5z" clip-rule="evenodd"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Music_note = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 16 16" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" fill-rule="evenodd" d="M13 5.46v3.08a3 3 0 0 0-.976 0q-.135.022-.274.055C10.231 8.96 9 10.263 9 11.505s1.231 1.955 2.75 1.59c1.519-.364 2.75-1.667 2.75-2.91q0-.057-.004-.113L14.5 10V1.25a.75.75 0 0 0-.932-.728L6.136 2.38l-.568.142A.75.75 0 0 0 5 3.25v7.291a3 3 0 0 0-.976 0q-.135.021-.274.054C2.231 10.96 1 12.263 1 13.506s1.231 1.955 2.75 1.59c1.519-.364 2.75-1.667 2.75-2.91q0-.057-.003-.113L6.5 12V7.086zm0-1.546V2.211L6.5 3.836v1.703l6.136-1.534zm-8.003 8.127a2 2 0 0 0 .003.144c0 .133-.079.419-.396.754a2.5 2.5 0 0 1-1.204.698c-.47.113-.748.023-.844-.032a.2.2 0 0 1-.047-.036l-.001-.002l-.003-.007a.2.2 0 0 1-.005-.054c0-.133.079-.419.396-.754a2.5 2.5 0 0 1 1.204-.698a1.6 1.6 0 0 1 .637-.037q.13.024.26.024m8-2a2 2 0 0 0 .003.144c0 .133-.079.419-.396.754a2.5 2.5 0 0 1-1.204.698c-.47.113-.748.023-.844-.032a.2.2 0 0 1-.047-.036l-.001-.002l-.003-.007a.2.2 0 0 1-.005-.054c0-.133.079-.419.396-.754a2.5 2.5 0 0 1 1.204-.698a1.6 1.6 0 0 1 .637-.037q.13.024.26.024" clip-rule="evenodd"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Book = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 16 16" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" fill-rule="evenodd" d="M3.5 11.937V13a.5.5 0 0 0 .5.5h7a1.5 1.5 0 0 0 1.5-1.5v-.401A3 3 0 0 1 11 12H4q-.26 0-.5-.063M2 10V3q0-.103.01-.204a2 2 0 0 1 .676-1.304A2 2 0 0 1 4 1h7a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a2 2 0 0 1-2-2zm1.5 0a.5.5 0 0 0 .5.5h7A1.5 1.5 0 0 0 12.5 9V4q0-.156-.03-.302A1.5 1.5 0 0 0 11 2.5H4a.5.5 0 0 0-.5.5zm2-4.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Pencil = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 16 16" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" fill-rule="evenodd" d="M11.423 1A3.577 3.577 0 0 1 15 4.577c0 .27-.108.53-.3.722l-.528.529l-1.971 1.971l-5.059 5.059a3 3 0 0 1-1.533.82l-2.638.528a1 1 0 0 1-1.177-1.177l.528-2.638a3 3 0 0 1 .82-1.533l5.059-5.059l2.5-2.5c.191-.191.451-.299.722-.299m-2.31 4.009l-4.91 4.91a1.5 1.5 0 0 0-.41.766l-.38 1.903l1.902-.38a1.5 1.5 0 0 0 .767-.41l4.91-4.91a2.08 2.08 0 0 0-1.88-1.88m3.098.658a3.6 3.6 0 0 0-1.878-1.879l1.28-1.28c.995.09 1.788.884 1.878 1.88z" clip-rule="evenodd"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Map_pin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 16 16" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" fill-rule="evenodd" d="M3.125 7a4.875 4.875 0 1 1 9.75 0c0 1.864-.774 2.962-1.687 3.815c-.385.36-.765.65-1.17.958l-.365.28a9 9 0 0 0-.781.668c-.243.24-.535.575-.73 1.01a.34.34 0 0 1-.095.132l-.015.008s-.01.004-.032.004l-.032-.003l-.015-.009a.34.34 0 0 1-.095-.131a3.4 3.4 0 0 0-.73-1.01a9 9 0 0 0-.781-.668q-.187-.145-.366-.28a15 15 0 0 1-1.169-.96C3.9 9.963 3.125 8.865 3.125 7M14.5 7c0 3.4-2.066 4.975-3.53 6.091c-.634.485-1.156.882-1.345 1.305C9.355 15 8.788 15.5 8 15.5s-1.354-.5-1.625-1.104c-.19-.423-.71-.82-1.346-1.305C3.566 11.975 1.5 10.399 1.5 7a6.5 6.5 0 0 1 13 0m-5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M11 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Graduation_cap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 16 16" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" fill-rule="evenodd" d="M6.836 3.202L1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202M1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.9 1.9 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447" clip-rule="evenodd"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Chart_pie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 16 16" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" fill-rule="evenodd" d="M13.45 8.75a5.501 5.501 0 1 1-6.2-6.2V8c0 .414.336.75.75.75zm0-1.5h-4.7v-4.7a5.5 5.5 0 0 1 4.7 4.7M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" clip-rule="evenodd"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Chart_area_stacked = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 16 16" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<g fill="none"><g clip-path="url(#gravityUiChartAreaStacked0)"><path fill="currentColor" fill-rule="evenodd" d="M10.257 4.2a.86.86 0 0 1-.86.274l-3.103-.776a2.81 2.81 0 0 0-2.796.876L1.242 7.152A3 3 0 0 0 .5 9.127V12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V3.309a1.933 1.933 0 0 0-3.4-1.258l-1.31 1.528zM14 6.48V3.31a.433.433 0 0 0-.762-.282l-1.842 2.15a2.36 2.36 0 0 1-2.362.753L5.93 5.154a1.31 1.31 0 0 0-1.303.408L2.37 8.139a1.5 1.5 0 0 0-.37.988v.685l2.304-1.44a2.59 2.59 0 0 1 2.458-.155l1.923.888a1.58 1.58 0 0 0 1.777-.317l.22-.22l1.575-1.574A1.86 1.86 0 0 1 14 6.479m-12 5.52c0 .277.226.501.5.501h11a.5.5 0 0 0 .5-.5V8.337a.4.4 0 0 0-.683-.283L11.523 9.85a3.08 3.08 0 0 1-3.466.618L6.134 9.58a1.09 1.09 0 0 0-1.035.066L2.353 11.36a.75.75 0 0 0-.353.637" clip-rule="evenodd"/></g><defs><clipPath id="gravityUiChartAreaStacked0"><path fill="currentColor" d="M0 0h16v16H0z"/></clipPath></defs></g>`}<!-- HTML_TAG_END --></svg>`;
});
const Smartphone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 16 16" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" fill-rule="evenodd" d="M12 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 12.5v-9A1.5 1.5 0 0 1 5.5 2h5A1.5 1.5 0 0 1 12 3.5m-1.5-3a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3zM6.25 11a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Arrow_chevron_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 16 16" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" fill-rule="evenodd" d="M8.75 2a.75.75 0 0 0-1.5 0v5.69L4.53 4.97a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 0 0-1.06-1.06L8.75 7.69zM4.53 9.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06L8 12.94z" clip-rule="evenodd"/>`}<!-- HTML_TAG_END --></svg>`;
});
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');div.accordion.svelte-1cieu9h.svelte-1cieu9h{padding-left:20px;padding-top:20px;padding-right:10px;margin-right:15px}div.header.svelte-1cieu9h.svelte-1cieu9h{display:flex;align-items:center;padding:20px;background-color:var(--clr-border-edge-alpha);backdrop-filter:blur(200px);box-shadow:0px 5px 15px var(--clr-shadow);border:1px solid var(--clr-border);border-radius:4px;cursor:pointer;color:var(--clr-black);transition:color 0.15s, box-shadow 0.15s, border 0.15s}div.header.svelte-1cieu9h.svelte-1cieu9h:hover{color:var(--clr-primary);border:1px solid var(--clr-border-edge);box-shadow:0px 5px 5px var(--clr-shadow)}div.header.svelte-1cieu9h:hover button.svelte-1cieu9h{background-color:var(--clr-primary-alpha-2)}div.header.svelte-1cieu9h .text.svelte-1cieu9h{flex:1;margin-right:5px;font-family:'Oswald';font-weight:bold}div.details.svelte-1cieu9h.svelte-1cieu9h{margin-top:20px;color:var(--clr-black);background-color:var(--clr-border-edge-alpha);backdrop-filter:blur(200px);box-shadow:0px 5px 15px var(--clr-shadow);border:1px solid var(--clr-border);padding:1rem;border-radius:4px;font-family:'Source Serif 4'}button.svelte-1cieu9h.svelte-1cieu9h{background-color:var(--clr-secondary-alpha-2);color:var(--clr-secondary);border:2px solid transparent;font-size:1.2rem;height:40px;width:40px;padding:5px;border-radius:50px;transition:background-color 0.3s ease-in-out, border 0.3s ease-in-out}@media all and (max-width: 1440px){div.header.svelte-1cieu9h.svelte-1cieu9h,div.header.svelte-1cieu9h .text.svelte-1cieu9h,div.details.svelte-1cieu9h.svelte-1cieu9h{font-size:0.8rem}}@media all and (max-width: 768px){div.accordion.svelte-1cieu9h.svelte-1cieu9h{padding-left:0px}}@media all and (max-width: 425px){div.accordion.svelte-1cieu9h.svelte-1cieu9h{margin-right:0px;margin:0}}",
  map: `{"version":3,"file":"Accordion.svelte","sources":["Accordion.svelte"],"sourcesContent":["<script>\\n  import GravityUiArrowChevronDown from '~icons/gravity-ui/arrow-chevron-down';\\n\\n  export let open = false;\\n\\timport { slide } from 'svelte/transition';\\n  \\n\\tconst handleClick = () => open = !open\\n<\/script>\\n\\n<div class=\\"accordion\\">\\n  <div class=\\"header\\" on:click={handleClick}>\\n    <div class=\\"text\\">\\n      <slot name=\\"head\\"></slot>\\t\\n\\t\\t</div>\\n\\t\\t\\n\\t\\t<button >\\n      <GravityUiArrowChevronDown />\\n\\t\\t</button>\\n\\t</div>\\n\\t\\n\\t{#if open}\\n\\t<div class=\\"details\\" transition:slide>\\n    <slot name=\\"details\\">\\n    </slot>\\n\\t</div>\\n\\t{/if}\\n</div>\\n\\n<style>\\n  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');\\n  \\n  div.accordion {\\n\\t\\t/* margin: 1rem 0; */\\n    padding-left: 20px;\\n    padding-top: 20px;\\n    padding-right: 10px;\\n    margin-right: 15px;\\n\\t}\\n  \\n  div.header {\\n    display:flex;\\n\\t\\t/* width:100%; */\\n    align-items: center;\\n    padding: 20px;\\n    background-color: var(--clr-border-edge-alpha);\\n    backdrop-filter: blur(200px);\\n    box-shadow: 0px 5px 15px var(--clr-shadow);\\n    border: 1px solid var(--clr-border);\\n    border-radius: 4px;\\n    cursor: pointer;\\n    color: var(--clr-black);\\n    transition: color 0.15s, box-shadow 0.15s, border 0.15s;\\n\\t}\\n  \\n  div.header:hover {\\n  color: var(--clr-primary);\\n  border: 1px solid var(--clr-border-edge);\\n  box-shadow: 0px 5px 5px var(--clr-shadow);\\n  }\\n  \\n  div.header:hover button {\\n    background-color: var(--clr-primary-alpha-2);\\n  }\\n  \\n  div.header .text {\\n    flex: 1;\\n\\t\\tmargin-right: 5px;\\n    font-family: 'Oswald';\\n    font-weight: bold;\\n\\t}\\n  \\n  div.details {\\n    margin-top: 20px;\\n    color: var(--clr-black);\\n    background-color: var(--clr-border-edge-alpha);\\n    backdrop-filter: blur(200px);\\n    box-shadow: 0px 5px 15px var(--clr-shadow);\\n    border: 1px solid var(--clr-border);\\n\\t\\tpadding:1rem;\\n    border-radius: 4px;\\n    font-family: 'Source Serif 4';\\n    \\n\\t}\\n  \\n  button {\\n    background-color: var(--clr-secondary-alpha-2);\\n    color: var(--clr-secondary);\\n    border: 2px solid transparent;\\n    font-size: 1.2rem;\\n    height: 40px;\\n    width: 40px;\\n    padding: 5px;\\n    border-radius: 50px;\\n    transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out;\\n  }\\n  \\n  @media all and (max-width: 1440px) {\\n    div.header,\\n    div.header .text,\\n    div.details {\\n      font-size: 0.8rem;\\n    }\\n  }\\n  \\n  @media all and (max-width: 768px) {\\n    div.accordion {\\n      padding-left: 0px;\\n    }\\n  }\\n  \\n  @media all and (max-width: 425px) {\\n    div.accordion {\\n      margin-right: 0px;\\n      margin: 0;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AA6BE,QAAQ,iGAAiG,CAEzG,GAAG,wCAAW,CAEZ,YAAY,CAAE,IAAI,CAClB,WAAW,CAAE,IAAI,CACjB,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,IACjB,CAEC,GAAG,qCAAQ,CACT,QAAQ,IAAI,CAEZ,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,IAAI,uBAAuB,CAAC,CAC9C,eAAe,CAAE,KAAK,KAAK,CAAC,CAC5B,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,YAAY,CAAC,CAC1C,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,YAAY,CAAC,CACnC,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OAAO,CACf,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,CAAC,UAAU,CAAC,KAAK,CAAC,CAAC,MAAM,CAAC,KACrD,CAEC,GAAG,qCAAO,MAAO,CACjB,KAAK,CAAE,IAAI,aAAa,CAAC,CACzB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,iBAAiB,CAAC,CACxC,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,YAAY,CACxC,CAEA,GAAG,sBAAO,MAAM,CAAC,qBAAO,CACtB,gBAAgB,CAAE,IAAI,qBAAqB,CAC7C,CAEA,GAAG,sBAAO,CAAC,oBAAM,CACf,IAAI,CAAE,CAAC,CACT,YAAY,CAAE,GAAG,CACf,WAAW,CAAE,QAAQ,CACrB,WAAW,CAAE,IAChB,CAEC,GAAG,sCAAS,CACV,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,gBAAgB,CAAE,IAAI,uBAAuB,CAAC,CAC9C,eAAe,CAAE,KAAK,KAAK,CAAC,CAC5B,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,YAAY,CAAC,CAC1C,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,YAAY,CAAC,CACrC,QAAQ,IAAI,CACV,aAAa,CAAE,GAAG,CAClB,WAAW,CAAE,gBAEhB,CAEC,oCAAO,CACL,gBAAgB,CAAE,IAAI,uBAAuB,CAAC,CAC9C,KAAK,CAAE,IAAI,eAAe,CAAC,CAC3B,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CAC7B,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,GAAG,CACZ,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,WAAW,CAAC,CAAC,MAAM,CAAC,IAAI,CAAC,WAC7D,CAEA,OAAO,GAAG,CAAC,GAAG,CAAC,YAAY,MAAM,CAAE,CACjC,GAAG,qCAAO,CACV,GAAG,sBAAO,CAAC,oBAAK,CAChB,GAAG,sCAAS,CACV,SAAS,CAAE,MACb,CACF,CAEA,OAAO,GAAG,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAChC,GAAG,wCAAW,CACZ,YAAY,CAAE,GAChB,CACF,CAEA,OAAO,GAAG,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAChC,GAAG,wCAAW,CACZ,YAAY,CAAE,GAAG,CACjB,MAAM,CAAE,CACV,CACF"}`
};
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  $$result.css.add(css);
  return `<div class="accordion svelte-1cieu9h"><div class="header svelte-1cieu9h"><div class="text svelte-1cieu9h">${slots.head ? slots.head({}) : ``}</div> <button class="svelte-1cieu9h">${validate_component(Arrow_chevron_down, "GravityUiArrowChevronDown").$$render($$result, {}, {}, {})}</button></div> ${open ? `<div class="details svelte-1cieu9h">${slots.details ? slots.details({}) : ` `}</div>` : ``} </div>`;
});
const profilePicture = "/kayla/_app/immutable/assets/me.-BPWMKSw.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="content-wrapper"><nav><a href="#about">${validate_component(Person, "GravityUiPerson").$$render($$result, {}, {}, {})}<span class="tooltip" data-svelte-h="svelte-1ops22f">About Me</span></a> <a href="#education">${validate_component(Book, "GravityUiBook").$$render($$result, {}, {}, {})}<span class="tooltip" data-svelte-h="svelte-y7e4zk">Education</span></a> <a href="#skills">${validate_component(Chart_pie, "GravityUiChartPie").$$render($$result, {}, {}, {})}<span class="tooltip" data-svelte-h="svelte-15i7760">Skills</span></a> <a href="#experience">${validate_component(Chart_area_stacked, "GravityUiChartAreaStacked").$$render($$result, {}, {}, {})}<span class="tooltip" data-svelte-h="svelte-wfhd0m">Experience</span></a> <a href="#references">${validate_component(Smartphone, "GravityUiSmartphone").$$render($$result, {}, {}, {})}<span class="tooltip" data-svelte-h="svelte-8xt20">References</span></a></nav> <div class="about-wrapper"><div class="picture-wrapper" data-svelte-h="svelte-1l26zg0"><img${add_attribute("src", profilePicture)} alt="A picture of me"></div> <div class="name-title"><h2 data-svelte-h="svelte-1pi8wd7">KAYLA HAARHOFF</h2> <p>${validate_component(Pencil, "GravityUiPencil").$$render($$result, {}, {}, {})} kdhaarhoff123@gmail.com</p> <p>${validate_component(Map_pin, "GravityUiMapPin").$$render($$result, {}, {}, {})} Centurion, Gauteng</p> <h3 data-svelte-h="svelte-48lsp5">Hobbies &amp; Interests</h3> <div class="hobbies-wrapper"><p>${validate_component(Music_note, "GravityUiMusicNote").$$render($$result, {}, {}, {})} Music</p> <p>${validate_component(Filmstrip, "GravityUiFilmstrip").$$render($$result, {}, {}, {})} Movies</p> <p>${validate_component(Brush, "GravityUiBrush").$$render($$result, {}, {}, {})} Art</p> <p>${validate_component(Hand, "GravityUiHand").$$render($$result, {}, {}, {})} Climbing</p></div></div></div> <div class="about-content"><h1 id="about"><span class="h1-icon">${validate_component(Person, "GravityUiPerson").$$render($$result, {}, {}, {})}</span> About Me</h1> <h2 data-svelte-h="svelte-ri821w">Experienced Sales Representative with a Decade of Industry Expertise</h2> <p data-svelte-h="svelte-z6rzqk">I am a motivated young professional with a keen desire to gain valuable work experience. I possess a strong willingness to learn and am driven to achieve excellence. I thrive both independently and as part of a team, believing firmly in the power of motivation to enhance team performance. Known for my friendly demeanor, I enjoy engaging with others and fostering positive relationships. My reliability, trustworthiness, and organizational skills enable me to effectively tackle any challenges I encounter. I am confident in my ability to contribute meaningfully to any team.</p> <h1 id="education"><span class="h1-icon">${validate_component(Book, "GravityUiBook").$$render($$result, {}, {}, {})}</span> Education</h1> <div class="education-wrapper"><div class="education-tile"><h3 data-svelte-h="svelte-1vylzig">IGCSE - Cambridge Matric</h3> <h3>${validate_component(Graduation_cap, "GravityUiGraduationCap").$$render($$result, {}, {}, {})}</h3></div></div> <h1 id="skills"><span class="h1-icon">${validate_component(Chart_pie, "GravityUiChartPie").$$render($$result, {}, {}, {})}</span> Strength &amp; Skills</h1> <div class="skills-wrapper" data-svelte-h="svelte-1vc4l6i"><div class="skill-tile"><ul><li>Always willing to learn</li> <li>Environment adaptability</li> <li>Excellent communication</li> <li>Good telephone etiquette</li> <li>Reliable and trustworthy</li> <li>Presentable and articulate</li> <li>Computer literate</li> <li>Honesty and integrity</li> <li>Professional conduct</li> <li>Customer-centric</li> <li>Welcoming and presentable demeanor</li> <li>Exuviate product training</li> <li>Punctual</li></ul></div></div> <h1 id="experience"><span class="h1-icon">${validate_component(Chart_area_stacked, "GravityUiChartAreaStacked").$$render($$result, {}, {}, {})}</span> Work Experience</h1> ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    details: () => {
      return `<div slot="details" data-svelte-h="svelte-1osdybg"><div class="experience-title"><p>2019 – current</p> <p><strong>Receptionist</strong></p></div> <ul><li>Shop access.</li> <li>Workspace hygiene and utility organization.</li> <li>Client front desk reception.</li> <li>Manage client calls and queries.</li> <li>Appointment scheduling.</li> <li>Product promotions and sales.</li> <li>Team co-ordination.</li> <li>Supply procurement.</li> <li>Daily fund reconciliation.</li></ul></div>`;
    },
    head: () => {
      return `<span slot="head" data-svelte-h="svelte-87ig1x">Stella&#39;s Beauty Bar</span>`;
    }
  })} <h1 id="references"><span class="h1-icon">${validate_component(Smartphone, "GravityUiSmartphone").$$render($$result, {}, {}, {})}</span> References</h1> <div class="references-wrapper"><div class="references-tile"><p>${validate_component(Map_pin, "GravityUiMapPin").$$render($$result, {}, {}, {})} <strong data-svelte-h="svelte-rnzr64">Stella&#39;s Beauty Bar</strong></p> <p>${validate_component(Person, "GravityUiPerson").$$render($$result, {}, {}, {})} Stella Ndlovu</p> <p>${validate_component(Smartphone, "GravityUiSmartphone").$$render($$result, {}, {}, {})} 071 710 6157</p></div></div></div></div> <div class="background-gradient" data-svelte-h="svelte-1f61unn"><div class="background-gradient-cover"></div></div>`;
});
export {
  Page as default
};
