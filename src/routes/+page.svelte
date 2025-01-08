<script>
  import './styles.css'

  import GravityUiPerson from '~icons/gravity-ui/person';
  import GravityUiHand from '~icons/gravity-ui/hand';
  import GravityUiBrush from '~icons/gravity-ui/brush';
  import GravityUiFilmstrip from '~icons/gravity-ui/filmstrip';
  import GravityUiMusicNote from '~icons/gravity-ui/music-note';
  import GravityUiBook from '~icons/gravity-ui/book';
  import GravityUiPencil from '~icons/gravity-ui/pencil';
  import GravityUiMapPin from '~icons/gravity-ui/map-pin';
  import GravityUiGraduationCap from '~icons/gravity-ui/graduation-cap';
  import GravityUiChartPie from '~icons/gravity-ui/chart-pie';
  import GravityUiChartAreaStacked from '~icons/gravity-ui/chart-area-stacked';
  import GravityUiSmartphone from '~icons/gravity-ui/smartphone';

  import Accordion from './Accordion.svelte';

  import profilePicture from "$lib/assets/kayla.jpeg";
</script>

<div class="content-wrapper">
  <nav>
    <a href="#about"><GravityUiPerson /><span class="tooltip">About Me</span></a>
    <a href="#education"><GravityUiBook /><span class="tooltip">Education</span></a>
    <a href="#skills"><GravityUiChartPie /><span class="tooltip">Skills</span></a>
    <a href="#experience"><GravityUiChartAreaStacked /><span class="tooltip">Experience</span></a>
    <a href="#references"><GravityUiSmartphone /><span class="tooltip">References</span></a>
  </nav>
  
  <div class="about-wrapper">
    <div class="picture-wrapper">
      <img src={profilePicture} alt="A picture of me">
      <div class="gradient-edges"></div>
    </div>
    <div class="name-title">
      <h2>KAYLA HAARHOFF</h2>
      <p><GravityUiPencil /> kdhaarhoff123@gmail.com</p>
      <p><GravityUiMapPin /> Centurion, Gauteng</p>
      <h3>Hobbies & Interests</h3>
      <div class="hobbies-wrapper">
        <p><GravityUiMusicNote /> Music</p>
        <p><GravityUiFilmstrip /> Movies</p>
        <p><GravityUiBrush /> Art</p>
        <p><GravityUiHand /> Climbing</p>
      </div>
    </div>
  </div>

  <div class="about-content">
    <h1 id="about"><span class="h1-icon"><GravityUiPerson /></span> About Me</h1>
    <p>
      I am a motivated young professional with a keen desire to gain valuable work experience. I possess a strong willingness to learn and am driven to achieve excellence. I thrive both independently and as part of a team, believing firmly in the power of motivation to enhance team performance. Known for my friendly demeanor, I enjoy engaging with others and fostering positive relationships. My reliability, trustworthiness, and organizational skills enable me to effectively tackle any challenges I encounter. I am confident in my ability to contribute meaningfully to any team.
    </p>
    <h1 id="education"><span class="h1-icon"><GravityUiBook /></span> Education</h1>
    <div class="education-wrapper">
      <div class="education-tile">
        <h3>IGCSE - Cambridge Matric</h3>
        <h3><GravityUiGraduationCap /></h3>
      </div>
    </div>
  <h1 id="skills"><span class="h1-icon"><GravityUiChartPie /></span> Strength & Skills</h1>
  <div class="skills-wrapper">
    <div class="skill-tile">
      <ul>
        <li>Always willing to learn</li>
        <li>Environment adaptability</li>
        <li>Excellent communication</li>
        <li>Good telephone etiquette</li>
        <li>Reliable and trustworthy</li>
        <li>Presentable and articulate</li>
        <li>Computer literate</li>
        <li>Honesty and integrity</li>
        <li>Professional conduct</li>
        <li>Customer-centric</li>
        <li>Welcoming and presentable demeanor</li>
        <li>Exuviate product training</li>        
        <li>Punctual</li>        
      </ul>
    </div>
</div>
<h1 id="experience"><span class="h1-icon"><GravityUiChartAreaStacked /></span> Work Experience</h1>
  <Accordion>
    <span slot="head">Skin Experts Aesthetics</span>
    <div slot="details">
      <div class="experience-title">
        <p>2019 – current</p>
        <p><strong>Receptionist</strong></p>
      </div>
      <ul>
        <li>Shop access.</li>
        <li>Workspace hygiene and utility organization.</li>
        <li>Client front desk reception.</li>
        <li>Manage client calls and queries.</li>
        <li>Appointment scheduling.</li>
        <li>Product promotions and sales.</li>
        <li>Team co-ordination.</li>
        <li>Supply procurement.</li>
        <li>Daily fund reconciliation.</li>
      </ul>
    </div>
  </Accordion>
  <h1 id="references"><span class="h1-icon"><GravityUiSmartphone /></span> References</h1>
  <div class="references-wrapper">
    <div class="references-tile">
      <p><GravityUiMapPin /> <strong> Skin Experts Aesthetics</strong></p>
      <p><GravityUiPerson /> Stella Ndlovu</p>
      <p><GravityUiSmartphone /> 071 710 6157</p>
    </div>
  </div>
</div>
</div>
<div class="background-gradient">
  <div class="background-gradient-cover"></div>
</div>