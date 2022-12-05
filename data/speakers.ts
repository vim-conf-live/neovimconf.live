export interface Speaker {
  name: string;
  about: string;
  profile: string;
  order?: number;
  lectureTitle?: string;
  github?: string | null;
  twitter?: string | null;
  twitch?: string | null;
  website?: string | null;
  linkedin?: string | null;
  youtube?: string | null;
  amazon?: string | null;
  matrix?: string | null;
  mastodon?: string | null;
};

const speakers: Speaker[] = [
  {
    name: 'Theena Kumaragurunathan',
    profile: '/speaker-images/theena.jpeg',
    about:
      "A relatively recent (Neo)Vim convert, Theena Kumaragurunathan is a novelist-filmmaker and open source software advocate based in Colombo, Sri Lanka. His debut novel _First Utterance_ (*2016*) - a work of speculative fiction inspired by Latin American magic realism, and the post-modernist works of Jorge Luis Borges - received Sri Lanka's National Literary Award in 2017. In his previous life, he was an Advertising and Strategic Communications professional, working in senior creative and management roles across the marketing landscape in his homecountry. He is currently working on a number of projects - the sequel to his debut novel, his debut feature documentary film, as well as a coming-of-age novel set in a Colombo high school in the late 90s. Since falling in love with Vim and NeoVim, he has attempted to incorporate Vim into every aspect of his writing life, often with varying results. When not in front of his computer, he can be found playing sports or hiking. This will be his second time speaking at NeoVim Conf, after his 2021 talk [Writing, Editing and World-Building On Vim](https://www.youtube.com/watch?v=2ORWaIqyj7k&ab_channel=Theena)",
    github: 'https://github.com/MiragianCycle',
    website: 'https://theena.net',
    linkedin: 'https://github.com/MiragianCycle',
    amazon:
      'https://www.amazon.com/First-Utterance-Miragian-Cycles-Book-ebook/dp/B08MBX8GRZ',
  },
  {
    name: 'Bashbunni',
    order: 1,
    profile: '/speaker-images/bashspeaker.jpg',
    about:
      "Bashbunni is a software developer who builds in public and aims to make development fun for herself and others. She is passionate about Linux, terminals, Go and Open source software. She works as the Head of Developer Relations at Charm and enjoys hanging out and coding with Internet nerds in her spare time. She creates content on Twitch, YouTube, and Twitter.",
    github: 'https://github.com/bashbunni',
    website: 'https://www.bashbunni.dev/'
  },
  {
    name: 'Björn Linse',
    profile: '/speaker-images/bfredl.jpg',
    about:
      'Björn Linse is an independent software developer and part of the Neovim core team. He is currently working full-time for the Neovim project.',
    matrix: 'https://matrix.to/#/@bfredl:matrix.org',
    twitter: 'https://twitter.com/bfredlbfredl',
  },
  {
    name: 'Fidel H Viegas',
    profile: '/speaker-images/FidelHViegasProfile.jpg',
    about:
      "Fidel H Viegas works as CTO and Lead Programmer at Metagnosis. From an early age, he understood that resourcefulness was synonymous with restrictions and limitations. Unable to get games for his Amstrad CPC 464, he learned to program in BASIC from the manual. Later, discovering that BASIC existed in different dialects, he learned to translate between them. Throughout his career, he developed several systems: ERPs, CMSs, decompilers, binary file converters, and transpilers. He also has experience reverse engineering binary file formats and computer software, an expertise he used to recover the source code of his employer's ERP. He is also working independently on a VimScript to Lua transpiler, and recently joined the Modula-2 Software Foundation to work on a bootstrap compiler for the revised Modula-2 language.",
    linkedin: 'https://www.linkedin.com/in/fidelhviegas/',
    website: 'https://www.geekstakulus.com/',
    github: 'https://github.com/viegasfh',
  },
  {
    name: 'John McBride',
    profile: '/speaker-images/johnspeaker.jpg',
    about:
      'John is a Software Engineer working on secure linux operating systems, containers, and kubernetes. He is a maintainer of spf13/cobra, a CLI bootstrapping library. In the past, he has worked on open source Kubernetes platforms and lead teams building observability products. He is a vim enthusiast and makes occasional content for vim users.',
    github: 'https://github.com/jpmcb',
    youtube: 'https://www.youtube.com/c/JohnCodes',
    website: 'https://johncodes.com/',
    twitter: 'https://twitter.com/johncodezzz',
  },
  {
    name: 'Emiliano Ruiz Carletti',
    profile: '/speaker-images/emiliano.png',
    about:
      'Long term Neovim user and learner-by-teaching powered by open source. IT Museum volunteer and Software Engineer at MercadoLibre.',
    github: 'https://github.com/eruizc-dev',
    website: 'https://eruizc.dev/',
    twitter: 'https://twitter.com/eruizc_dev',
  },
  {
    name: 'Lorenz Schmidt',
    profile: '/speaker-images/lorenzspeaker.jpg',
    about:
      'Lorenz is a second year PhD and extensive user of Vim, for coding as well as writing. When he is not reading some paper, he is actively working on Vim plugins to improve his note taking and linkage process. He also maintains Linfa, a statistical learning framework and is member of the Rust Machine Learning group.',
    github: 'https://github.com/bytesnake/',
    website: 'https://lorenzschmidt.com/',
  },
  {
    name: 'Joe Previte',
    profile: '/speaker-images/joeprevitespeaker.png',
    about:
      'Joe is an Open Source TypeScript Engineer at Coder and maintainer of code-server. He has a passion for teaching and learning and aims to help developers learn faster through interactive courses like Vim for VS Code and TypeScript Course. Outside that, he likes getting people excited about webdev and indie hacking.',
    github: 'https://github.com/jsjoeio',
    website: 'https://joeprevite.com/',
    twitter: 'https://twitter.com/jsjoeio',
    youtube: 'https://www.youtube.com/c/jsjoeio',
    twitch: 'https://www.twitch.tv/jsjoeio',
  },
  {
    name: 'Jorres Tarasov',
    profile: '/speaker-images/jorresspeaker.jpeg',
    about:
      'First year Masters student, DevOps engineer at Yandex. Long-term Neovim fanatic and a learning afficionado who’s working on his next challenge',
    github: 'https://github.com/Jorres',
    linkedin: 'https://www.linkedin.com/in/jorres-tarasov/',
  },
  {
    name: 'Benny Powers',
    profile: '/speaker-images/bennyspeaker.jpg',
    about:
      'Principal UX engineer @Red Hat, working on design systems and web components. Atom refugee pining for the good old days of vim-mode-plus and neovim plugin author.',
    github: 'https://github.com/bennypowers',
    twitter: 'https://social.bennypowers.dev/@i',
    website: 'https://bennypowers.dev/',
  },
  {
    name: 'Daniel Mathiot',
    profile: '/speaker-images/danielspeaker.jpeg',
    about:
      'Hello ! Im Daniel Mathiot, aka Danymat. Some people know me in the community for creating the Neogen plugin, others for implementing the Getting Things Done methodology in Neorg. Besides that, I graduated this year and Im currently working as a Penetration Tester in my company. Im very grateful to be part of this years Neovim Conf edition, and I will be delighted to welcome you during my first open-source presentation.',
    github: 'https://github.com/danymat',
    website: 'https://danielmathiot.tech/notes',
    linkedin: 'https://linkedin.com/in/danielmathiot',
  },
  {
    name: 'Olivier Abdesselam',
    profile: '/speaker-images/yazgoospeaker.png',
    about:
      'Hi, I\'m Olivier Abdesselam aka Yazgoo, senior software engineer in the analytics team in Teads. I like functional programming, realtime streaming. I enjoy using neovim, developping terminal apps, mostly in rust.',
    github: 'https://github.com/yazgoo/',
    website: 'https://mastodon.opportunis.me/@oogzay',
    linkedin: 'https://www.linkedin.com/in/olivier-abdesselam',
  },
  {
    name: 'David Kunz',
    order: 3,
    profile: '/speaker-images/davidkuntzspeaker.jpeg',
    about:
      'David Kunz (aka DevOnDuty) is a software architect for the Node.js runtime of the Cloud Application Programming Model at SAP. After finishing his PhD in theoretical particle physics, David followed his passion for programming, always striving to gain comprehensive knowledge of emerging technologies. He advocates for superior paradigms and tools for efficient development.',
    github: 'https://github.com/David-Kunz',
    youtube: 'https://www.youtube.com/@devonduty',
  },
  {
    name: 'Peter DeVries',
    profile: '/speaker-images/peterspeaker.jpeg',
    about:
      'Collector of Hobbies, IT Professional, Neovim / Keyboard enthusiast.',
  },
  {
    name: 'Chris Kipp',
    profile: '/speaker-images/chipspeaker.jpeg',
    about:
      "Chris is a software engineer at Lunatech primarily working on Scala open source tooling. He's a maintainer of Metals, the Scala Language Server, and author of nvim-metals, the Neovim plugin for Metals. He's also a self-taught programmer with a passion for simplifying things and helping others be more productive.",
    website: 'https://www.chris-kipp.io/',
    twitter: 'https://twitter.com/ckipp01',
    github: 'https://github.com/ckipp01 ',
  },
  {
    name: 'Paul Liferenko',
    profile: '/speaker-images/paulspeaker.jpg',
    about:
      'Average Erlang/Elixir developer, one-backpack life enjoyer. Started in 2013 with WordPress but back in 2018 I was bitten by Erlangists with their "Recursion is the thing!"',
    github: 'github.com/Liferenko',
    linkedin: 'linkedin.com/in/liferenko',
  },
  {
    name: 'Anton Kastritskiy',
    profile: '/speaker-images/antonspeaker.jpeg',
    about:
      'Software engineer at Meta, occasional plugin author, excited about developer tooling, static analysis and type systems',
    github: 'https://github.com/antonk52',
    twitter: 'https://twitter.com/AntonK52',
  },
    {
    name: 'Ben Frain',
    profile: '/speaker-images/benspeaker.jpg',
    about:
      'Ben Frain is a web developer, book author, and content creator from the UK. He works as a UI/UX Technical Lead at bet365.com, speacilising at the front of the stack with HTML, CSS and JavaScript. Find his web development books on Amazon, web related writings on his blog, courses on Udemy or Skillshare and videos on keyboards and Neovim on YouTube.',
      github: 'https://github.com/benfrain',
      twitter: 'https://twitter.com/benfrain',
      youtube: 'https://www.youtube.com/@benfrainuk',
      website:'benfrain.com'
  },
   {
    name: 'Gustavo Sampaio',
    profile: '/speaker-images/gustavospeaker.jpg',
    about:
      'Long term Neovim user, contributor and plugin author. Always looking for something fun to develop/create, especially if its inside Neovim 🙂 <Insert here the usual Rust propaganda>. Currently working as SE at JetBridge.',
      github: 'https://github.com/GustavoKatel',
  },
     {
    name: 'Jesse Atkinson',
    profile: '/speaker-images/jessespeaker.jpg',
    about:
      'Jesse Atkinson is a software engineer based in San Francisco. He\'s passionate about functional programming. Professionally he writes Scala at Credit Karma (using vim of course). Personally he hangs out with his wife & two cats at home in San Francisco.',
      github: 'https://github.com/jsatk',
       twitter: 'https://twitter.com/jsatk',
       website: 'https://sfba.social/@jsatk'
  },
       {
    name: 'Nicholas Payne',
    profile: '/speaker-images/Nicholasspeaker.jpeg',
    about:
      'Nicholas is primarily an amateur Python developer using Neovim and Google to solve problems in Data Engineering and DevSecOps. When his wife and daughters are asleep he get to homelab and build computers as a hobby to learn new things and bring some hardware experience to the analytics space.',
      github: 'https://github.com/pypeaday',
      twitter: 'https://twitter.com/pypeaday',
      website: 'https://pypeaday.github.io/littlelink/'
  },
         {
    name: 'Waylon Walker',
    profile: '/speaker-images/waylonspeaker.jpeg',
    about:
      'A tmux fiend using Neovim to write python. Creator of the sub popular, plugins all the way down, static site generator markata.',
      github: 'https://github.com/waylonwalker',
      twitter: 'https://twitter.com/_waylonwalker',
      website: 'waylonwalker.com'
  },
 {
    name: 'Chris Griffing',
    order: 2,
    profile: '/speaker-images/chrisspeaker.png',
    about:
      'Chris streams programming way too much on Twitch. On stream, you can see him work through projects showing the whole process. Projects range from fun single-day projects all the way to SaaS projects. He even wrote an nvim plugin. His hobbies include snowboarding, making music, and short walks nowhere near a beach.',
    twitch: 'https://twitch.tv/cmgriffing',
    twitter: 'https://twitter.com/cmgriffing',
    github: 'https://github.com/cmgriffing',
    website: 'https://chrisgriffing.com'
  },
          {
    name: 'Charlie Cruz',
    profile: '/speaker-images/charliespeaker.png',
    about:
      'A Math and Linguistics lover who is interested in theoretical Computer Science and Rust! Charlie teaches the Art of Lazy Programming at Rice University and loves optimizing his programming environment to get the maximum efficiency with Vim.',
  },
    {
    name: 'Maas Lalani',
    profile: '/speaker-images/massspeaker.jpeg',
    about:
      'Software developer at Charm. Loves to build and use command line tools. Neovim enthusiast that uses Helix.',
      twitter:'https://twitter.com/maaslalani',
      github: 'https://github.com/maaslalani',
      website: 'https://maaslalani.com/'
  },
      {
    name: 'Max Brunsfeld',
    profile: '/speaker-images/maxspeaker.jpeg',
    about:
      'Max is one of the founders of Zed, a new code editor designed for speed and team collaboration. He also created the Tree-sitter parsing system, which is used in Neovim, Zed, and several other popular programming tools. In his free time, he goes camping with his wife and two young kids, and plays along to pop songs on his piano.',
    github: "https://github.com/maxbrunsfeld",
    twitter: "https://twitter.com/maxbrunsfeld"
  },
];

export default speakers;
