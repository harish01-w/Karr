// Original images
import sustainableArch from '../assets/blog/sustainable_arch.png';
import constructionTips from '../assets/blog/construction_tips.png';
import solarIntegration from '../assets/blog/solar_integration.png';

// Generated images
import genArch from '../assets/blog/gen/blog_architecture_1777306041771.png';
import genConst from '../assets/blog/gen/blog_construction_1777306059248.png';
import genSolar from '../assets/blog/gen/blog_solar_1777306099624.png';

import visvesvarayaImage from '../../assets/visvesvaraya.webp';
import vis2 from '../../assets/vis2.jpg';
import vis3 from '../../assets/vis3.webp';
import vis4 from '../../assets/vis4.webp';

const templateGallery = [
  { type: 'single', image: sustainableArch },
  { type: 'text', title: 'I. The Core Philosophy', content: 'In every project we undertake, the philosophy remains the same: to create a space that is as functional as it is beautiful. This requires a deep understanding of the materials we use and the environment we build in. Our approach is rooted in traditional wisdom but enhanced by modern technology, ensuring that every home is a masterpiece of sustainable design.' },
  { type: 'double', images: [genArch, genSolar] },
  { type: 'text', title: 'II. Detailed Execution', content: 'The beauty of a home lies in its details. From the way light falls on a textured wall to the sound of footsteps on natural stone, every element is considered. We work closely with master craftsmen to ensure that every finish is perfect. This commitment to quality is what sets a Karrcholai home apart.' }
];

export const blogPosts = [
  // ── ENGINEERING LEGENDS ──
  { 
    id: 601, 
    title: "Sir M. Visvesvaraya – India’s Legendary Engineer and Visionary Builder", 
    category: "Engineering Legends", 
    date: "May 17, 2024", 
    image: visvesvarayaImage, 
    author: "Karrcholai Team", 
    excerpt: "Discover how Sir M. Visvesvaraya’s engineering vision continues to inspire modern residential construction, project management, and sustainable infrastructure development.", 
    gallery: [
      {
        type: 'html',
        content: `<h2 class="text-3xl font-bold mt-10 mb-6 text-[#1a1a1a]">Sir M. Visvesvaraya – The Engineering Visionary Behind Modern Infrastructure</h2>
<h3 class="text-2xl font-semibold mt-8 mb-4 text-[#1a1a1a]">Introduction</h3>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">India’s development in engineering and infrastructure owes a great deal to visionary leaders who transformed ideas into reality. One such legendary personality is Sir M. Visvesvaraya, one of the greatest civil engineers and nation-builders in Indian history.</p>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">For companies involved in residential construction, architecture, project management, and infrastructure development, his life remains a timeless source of inspiration. At Karrcholai, we believe that engineering is not just about constructing buildings — it is about creating lasting value for society, just as Sir Visvesvaraya did throughout his life.</p>

<h3 class="text-2xl font-semibold mt-8 mb-4 text-[#1a1a1a]">Who Was Sir M. Visvesvaraya?</h3>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">Sir Mokshagundam Visvesvaraya was born on September 15, 1861, in Karnataka, India. He was a brilliant civil engineer, statesman, and visionary planner who played a major role in shaping modern India’s infrastructure.</p>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">His dedication, discipline, and engineering excellence earned him the highest respect across the nation. In recognition of his extraordinary contributions, he was awarded the Bharat Ratna, India’s highest civilian honor.</p>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">Today, Engineers’ Day in India is celebrated every year on September 15th in his honor.</p>`
      },
      { type: 'single', image: vis2 },
      {
        type: 'html',
        content: `<h3 class="text-2xl font-semibold mt-8 mb-4 text-[#1a1a1a]">Engineering Excellence That Changed India</h3>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">Sir Visvesvaraya contributed to several landmark engineering projects that improved water management, irrigation, and urban planning.</p>

<h4 class="text-xl font-medium mt-6 mb-3 text-[#1a1a1a]">Krishna Raja Sagara (KRS) Dam</h4>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">One of his most famous achievements was the Krishna Raja Sagara Dam in Karnataka. The project helped transform agriculture and water supply systems for thousands of people.</p>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">Modern construction companies and project consultants continue to learn from such infrastructure planning principles even today.</p>

<h4 class="text-xl font-medium mt-6 mb-3 text-[#1a1a1a]">Innovative Water Management</h4>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">He introduced advanced flood protection systems and automatic sluice gates for dams, showcasing how engineering innovation can solve real-world challenges.</p>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">His approach reminds modern construction professionals that intelligent planning and sustainable engineering are essential for long-term success.</p>`
      },
      { type: 'double', images: [vis3, vis4] },
      {
        type: 'html',
        content: `<h3 class="text-2xl font-semibold mt-8 mb-4 text-[#1a1a1a]">Inspiration for Modern Construction Industry</h3>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">The values followed by Sir Visvesvaraya closely align with the principles required in today’s residential and infrastructure construction industry.</p>

<h4 class="text-xl font-medium mt-6 mb-3 text-[#1a1a1a]">1. Quality Construction</h4>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">He strongly believed in precision and quality. In modern residential construction, maintaining structural quality and engineering standards is equally important.</p>

<h4 class="text-xl font-medium mt-6 mb-3 text-[#1a1a1a]">2. Proper Project Planning</h4>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">Every successful project starts with detailed planning. From site analysis to project execution, proper management helps avoid delays and unnecessary costs.</p>

<h4 class="text-xl font-medium mt-6 mb-3 text-[#1a1a1a]">3. Sustainable Development</h4>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">Sir Visvesvaraya promoted development that benefited society. Today, sustainable construction practices such as rainwater harvesting, energy-efficient homes, and eco-friendly materials follow the same philosophy.</p>

<h4 class="text-xl font-medium mt-6 mb-3 text-[#1a1a1a]">4. Discipline and Professionalism</h4>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">His disciplined lifestyle continues to inspire engineers, architects, and construction professionals across India.</p>

<h3 class="text-2xl font-semibold mt-8 mb-4 text-[#1a1a1a]">Relevance to Residential Construction Today</h3>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">Modern homeowners are looking for homes that combine:</p>
<ul class="list-disc pl-6 mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed space-y-2">
<li>Smart planning</li>
<li>Vastu principles</li>
<li>Functional design</li>
<li>Sustainability</li>
<li>Long-term durability</li>
</ul>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">These ideas reflect the engineering mindset promoted by Sir Visvesvaraya decades ago.</p>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">At Karrcholai, we focus on delivering residential construction and project management solutions that prioritize quality, planning, innovation, and customer satisfaction.</p>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">From modern house construction to vastu-based planning and landscape-focused design, today’s projects require the same engineering commitment and vision that Sir Visvesvaraya represented.</p>

<h3 class="text-2xl font-semibold mt-8 mb-4 text-[#1a1a1a]">Lessons Construction Professionals Can Learn</h3>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">Construction professionals and project consultants can learn several important lessons from Sir Visvesvaraya:</p>
<ul class="list-disc pl-6 mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed space-y-2">
<li>Always prioritize quality over shortcuts</li>
<li>Plan projects with long-term vision</li>
<li>Use engineering to improve people’s lives</li>
<li>Embrace innovation and modern technology</li>
<li>Maintain discipline and professional ethics</li>
</ul>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">These values are essential for creating successful residential and infrastructure projects.</p>

<h3 class="text-2xl font-semibold mt-8 mb-4 text-[#1a1a1a]">Legacy of a Nation Builder</h3>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">Sir M. Visvesvaraya was not just an engineer — he was a visionary who believed that infrastructure and development could transform society.</p>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">His contributions continue to inspire:</p>
<ul class="list-disc pl-6 mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed space-y-2">
<li>Civil engineers</li>
<li>Architects</li>
<li>Builders</li>
<li>Project consultants</li>
<li>Construction companies</li>
<li>Engineering students</li>
</ul>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">Even today, his life stands as a symbol of dedication, innovation, and nation-building.</p>

<h3 class="text-2xl font-semibold mt-8 mb-4 text-[#1a1a1a]">Conclusion</h3>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">The legacy of Sir M. Visvesvaraya continues to influence modern engineering and construction practices across India.</p>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">For the residential construction industry, his life teaches the importance of planning, quality, sustainability, and professionalism. His vision remains highly relevant in today’s world where modern homes require both technical excellence and thoughtful design.</p>
<p class="mb-4 text-lg text-[#1a1a1a]/80 leading-relaxed">At Karrcholai, we are inspired by such engineering legends and strive to bring the same commitment and quality into every residential construction project.</p>`
      }
    ]
  },
];

export const categories = [
  "All Insights",
  "Engineering Legends",
  "Construction Tips",
  "Client Stories",
  "Rainwater Harvesting",
  "Solar Energy",
  "Sustainable Living"
];
