import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yiting Liu",
  initials: "YT",
  url: "https://lyt71.github.io",
  location: "Xi'an, China",
  locationLink: "https://www.google.com/maps/place/Xi'an",
  description:
    "Ph.D. Candidate, Control Science and Engineering, Xidian University, Xi'an, China",
  summary:
    "Welcome to my academic homepage. I am a Ph.D. candidate at Xidian University, focusing on sparse optimization, machine learning, and evolutionary computation. Please explore the different sections to learn more about my research and academic journey.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Matlab",
    "OpenCV",
    "PyTorch",
    "TensorFlow",
    "NumPy",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "lyting71@gmail.com",
    tel: "+86 18909447896",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/lyt71",
        icon: Icons.github,

        navbar: true,
      },
      // LinkedIn: {
      //   name: "LinkedIn",
      //   url: "https://dub.sh/dillion-linkedin",
      //   icon: Icons.linkedin,

      //   navbar: true,
      // },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: false,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: false,
      // },
      email: {
        name: "Send Email",
        url: "mailto:lyting71@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      cv: {
        name: "Download CV",
        url: "/Yiting_Liu_CV.pdf",
        icon: Icons.cv,

        navbar: true 
      }
    },
  },

  // work: [
  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Shopify",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
  education: [
    {
      school: "Xidian University",
      href: "https://www.xidian.edu.cn",
      degree: "Ph.D. in Control Science and Engineering",
      logoUrl: "/xidian.png",
      start: "2022",
      end: "2025",
      gpa: "GPA: 95.14/100 (Top 1%)",
      awards: "Awards: Outstanding Doctoral Candidate (2023–2024), Outstanding Student (2022–2024), Shenglu Scholarship (2024), Ceyear Scholarship (2025)",
    },
    {
      school: "Xidian University",
      href: "https://www.xidian.edu.cn",
      degree: "M.S. in Electronic Science and Technology",
      logoUrl: "/xidian.png",
      start: "2020",
      end: "2022",
      gpa: "GPA: 90.64/100 (Top 5%)",
      awards: "Awards: Special Freshman (2020), Outstanding Student (2021), Peng Cheng Lab OpenI Community Excellent Developer (2022)",
    },
    {
      school: "Hunan University",
      href: "https://www.hnu.edu.cn",
      degree: "B.S. in Electronic Information Engineering",
      logoUrl: "/hunan.png",
      start: "2016",
      end: "2020",
      gpa: "GPA: 85.38/100 (Top 10%)",
      awards: "Awards: Outstanding Student (2017–2019)",
    },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  Publications: [
    {
      title: "Collaborative Self-Supervised Evolution for Few-Shot Remote Sensing Scene Classification",
      href: "https://ieeexplore.ieee.org/abstract/document/10613908",
      dates: "Y. Liu, J. Li, M. Gong, et al.",
      active: true,
      description:
        "An evolutionary strategy is used to search for optimal auxiliary task combinations to improve few-shot remote sensing scene classification. [IEEE Transactions on Geoscience and Remote Sensing](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=36), 2024.",
      technologies: [
        "Collaborative Evolution Strategy",
        "Few-shot Learning",
        "Remote Sensing Scene Classification",
        "Self-supervised Learning",
      ],
      links: [
        {
          type: "Website",
          href: "https://ieeexplore.ieee.org/abstract/document/10613908",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tgrs_paper.png",
      video: "",
    },
    {
      title: "Nonzero Degree-Based Multiobjective Cooperative Coevolutionary for Block Sparse Recovery",
      href: "https://ieeexplore.ieee.org/abstract/document/10092910",
      dates: "Y. Liu, H. Li, M. Gong, A. K. Qin",
      active: true,
      description:
        "A multiobjective cooperative coevolutionary method integrates the spatial structure of block sparse signals to reduce search difficulty and improve efficiency. [IEEE Transactions on Evolutionary Computation](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=4235), 2024.",
      technologies: [
        "Block Sparse Recovery",
        "Cooperative Coevolutionary",
        "List-inquiry Evaluation",
        "Multiobjective Problem (MOP)",

      ],
      links: [
        {
          type: "Website",
          href: "https://ieeexplore.ieee.org/abstract/document/10092910",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tevc_paper.png",
      video: "",
    },
    {
      title: "Evolutionary Multitasking CNN Architecture Search for Hyperspectral Image Classification",
      href: "https://ieeexplore.ieee.org/document/9892237",
      dates: "Y. Liu, H. Li, M. Gong, et al.",
      active: true,
      description:
        "An evolutionary multitasking framework searches CNN architectures for hyperspectral image classification by leveraging task similarity and implicit parallelism. [International Joint Conference on Neural Networks (IJCNN), 2022.](https://ieeexplore.ieee.org/xpl/conhome/9891857/proceeding)",
      technologies: [
        "Evolutionary Multitasking",
        "CNN Architecture Search",
        "Hyperspectral Image Classification",
        "Implicit Parallelism",
      ],
      links: [
        {
          type: "Website",
          href: "https://ieeexplore.ieee.org/document/9892237",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ijcnn.png",
      video: "",
    },
    {
      title: "An Adaptive Surrogate-Assisted Endmember Extraction Framework Based on Intelligent Optimization Algorithms for Hyperspectral Remote Sensing Images",
      href: "https://doi.org/10.3390/rs14040892",
      dates: "Z. Wang, J. Li, Y. Liu, et al.",
      active: true,
      description:
        "An adaptive surrogate-assisted framework integrates heuristic optimization algorithms to alleviate computational cost in hyperspectral endmember extraction. [Remote Sensing](https://www.mdpi.com/journal/remotesensing), 2022.",
      technologies: [
        "Hyperspectral Remote Sensing",
        "Intelligent Optimization Algorithms",
        "Endmember Extraction",
        "Surrogate-Assisted Model",

      ],
      links: [
        {
          type: "Website",
          href: "https://doi.org/10.3390/rs14040892",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "/RS_paper.png",
      video: "",
    },
    {
      title: "Multi-fidelity evolutionary multitasking optimization for hyperspectral endmember extraction",
      href: "https://www.sciencedirect.com/science/article/pii/S1568494621006347",
      dates: "J. Li, H. Li, Y. Liu, et al.",
      active: true,
      description:
        "A multi-fidelity multitasking optimization framework uses surrogate models for collaborative learning across fidelity levels, reducing evaluation overhead. [Applied Soft Computing](https://www.sciencedirect.com/journal/applied-soft-computing), 2021.",
      technologies: [
        "Evolutionary Multitasking",
        "Endmember Extraction",
        "Multi-fidelity",
        "Surrogate Model",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://www.sciencedirect.com/science/article/pii/S1568494621006347",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ASC_paper.png",
      video: "",
    },
    {
      title: "Multiobjective Coevolutionary Bayesian Learning for Hyperspectral Sparse Unmixing",
      href: "",
      dates: "Y. Liu, et al.",
      active: true,
      description:
        "A coevolutionary Bayesian learning mechanism models row-sparsity in abundance matrices and guides sparse unmixing through Bayesian inference. Under review.",
      technologies: [
        "Sparse Unmixing",
        "Evolutionary Multiobjective Optimization",
        "Cooperative Coevolution",
        "Sparse Bayesian Learning",
        
      ],
      links: [],
      image: "/MCBL.png",
      video: "",
    },
    {
      title: "A Multi-level Collaborative Multi-task Sparse Learning Framework and Case Study",
      href: "",
      dates: "Y. Liu, et al.",
      active: true,
      description:
        "A multi-level collaborative multitask sparse learning framework combines internal parameter sharing with evolutionary search for auxiliary task configurations. In progress.",
      technologies: [
        "Multi-task Learning",
        "Sparse Learning",
        "Denoise",
        "Sparse Reconstruction",
        
      ],
      links: [],
      image: "/CS2E.png",
      video: "",
    },
  ],
  Projects: [
    {
      title: "Target Detection and Recognition Research",
      dates: "Sep 2023 – Mar 2025",
      location: "Xi'an, China",
      description:
        "Developed high-fidelity virtual environments for dataset generation; Improved robustness under varied conditions.",
      image:
        "/ai.jpg",
      mlh: "",
      links: [],
    },
    {
      title: "Biological Computing Model Suite (Huawei)",
      dates: "Jun 2022 – Jan 2023",
      location: "Xi'an, China",
      description:
        "Developed models using MindSpore; Achievements integrated into Huawei's standard library.",
      image:
        "/dna.jpg",
      mlh: "",
      links: [],
    },
    {
      title: "NSFC Key Program: Collaborative Learning and Optimization",
      dates: "Sep 2023 – Sep 2024",
      location: "Xi'an, China",
      description:
        "Integrated deep learning and evolutionary optimization for improving neural network performance and interpretability.",
      icon: "public",
      image:
        "/NSFC.png",
      links: [],
    },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  ],
} as const;
