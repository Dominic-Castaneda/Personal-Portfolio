const projects = [
  {
    id: 8,
    title: "Life Organizer Hub",
    description: "All-in-One Personal Dashboard App",
    thumbnail: "/images/",
    category: "Full Stack",
    languages: ["JavaScript XML"],
    progress: 1,
    githubLink: "",
    additionalImages: [],
    sections: [
      {
        heading: "Project Goal",
        body: "Life Organizer Hub is an all-in-one productivity system designed to help me manage everything in one place. For example, tasks and schedules to health metrics and finances. It will live on my TV (via Raspberry Pi) as a daily visual hub, while also being remotely accessible from my phone."
      },
      {
        heading: "Core Features",
        body: "The app will include a to-do list, goal board, bedtime reminders, live weather, spending logs, financial tracking, and more."
      },
      {
        heading: "Technology Plan",
        body: "The frontend will be built in React Native Web, and displayed via Chromium or kiosk-mode browser on a Raspberry Pi. Data will be stored in Supabase with real-time syncing, and personal metrics will be accessed from secure APIs.",
      },
      {
        heading: "Display Strategy",
        body: "On the TV, the app will operate like a clean daily dashboard. On mobile, it will have touch-friendly controls for quick updates or reminders. I’ll use GitHub for version control and possibly deploy using Netlify.",
      },
      {
        heading: "What This Represents",
        body: "This project combines organization, discipline, and tech in a daily tool to build habits and stay focused. It reflects my drive to optimize my environment through engineering and self-improvement."
      }
    ]
  },
  {
    id: 7,
    title: "Langstroth 2.0",
    description: "An Update to Beekeeping",
    thumbnail: "/images/beehive-thumbnail.jpg",
    category: "Engineering",
    languages: ["CAD"],
    progress: 1,
    githubLink: "",
    additionalImages: [],
    sections: [
      {
        heading: "Vision",
        body: "Langstroth 2.0 is a long-term engineering project to create a next-generation beehive that maximizes insulation, structural efficiency, and bee health. This is both a practical beekeeping project and a technical showcase of CAD design, embedded monitoring, and sustainability thinking."
      },
      {
        heading: "Materials & Construction",
        body: "The outer shell will be 3D-printed using ASA for weather resistance, and internal insulation will likely involve polyiso foam or other high R-value materials. Inner surfaces may be lined with natural wood to maintain a healthy microclimate for the bees."
      },
      {
        heading: "Planned Features",
        body: "The design includes modular boxes with slanted walls for thermal regulation, a ventilated bottom board, and potential smart monitoring add-ons like humidity sensors, weight sensors, and temperature tracking — all powered by embedded microcontrollers.",
      },
      {
        heading: "Progress",
        body: "The project is in its earliest design stage. CAD sketches have begun for the modular outer structure, and materials are being researched for durability, efficiency, and bee-friendliness. Updates will be posted as prototyping begins.",
      },
      {
        heading: "Why This Project Matters",
        body: "This project combines my passion for beekeeping with my engineering background. It's a real-world application of environmental design, 3D modeling, and embedded systems — and I hope it can serve as a proof-of-concept for sustainable hive innovation."
      }
    ]
  },  
  {
    id: 6,
    title: "API Weather App",
    description: "Live Weather App with City Search & Forecast",
    thumbnail: "/images/Web2.jpg",
    category: "Full Stack",
    languages: ["JavaScript"],
    progress: 100,
    githubLink: "https://github.com/Dominic-Castaneda/API-Weather-App.git",
    additionalImages: ["/images/Web1.jpg", "/images/web2.jpg", "/images/web3.jpg", "/images/Mobile1.PNG", "/images/Mobile2.PNG", "/images/Mobile3.PNG"],
    sections: [
      {
        heading: "Overview",
        body: "SmartWeather is a web and mobile weather application that gives users real-time temperature updates, 10-day forecasts, and a live map for any city in the world. The app is designed to be clean, fast, and intuitive."
      },
      {
        heading: "Tech Stack",
        body: "Built using React Native with Expo, it connects to the OpenWeather API for geo, current, and forecasted weather data. Supabase is used to store saved city data and manage auto-refresh logic across sessions."
      },
      {
        heading: "Features",
        body: "Users can search for cities with live autocomplete, tap to save them, and view the forecast or map by clicking on any saved city. Weather data auto-refreshes every 60 seconds, and cities persist even after closing the app using AsyncStorage.",
        image: "/images/smartweather-ui.jpg"
      },
      {
        heading: "Challenges",
        body: "Handling frequent API updates, managing state across multiple screens, and timing fetch intervals without causing race conditions were all major challenges. I also implemented error fallback and persistent storage without external libraries."
      },
      {
        heading: "What I Learned",
        body: "This project strengthened my understanding of API integration, real-time UI updates, and React Native state management. It helped me build production-ready mobile architecture and clean UI patterns."
      }
    ]
  },  
  {
    id: 5,
    title: "Personal Portfolio",
    description: "Personal Portfolio Website",
    thumbnail: "/images/Portfolio.jpg",
    category: "Front End",
    languages: ["HTML", "CSS", "JavaScript"],
    progress: 100,
    githubLink: "https://github.com/Dominic-Castaneda/Personal-Portfolio.git",
    additionalImages: [],
    sections: [
      {
        heading: "Overview",
        body: "This is my personal portfolio site designed to showcase who I am, my skills, and the projects I've built over time. It reflects my personality while keeping everything clean and professional.",
        image: "/images/Portfolio2.jpg"
      },
      {
        heading: "Technologies Used",
        body: "HTML, CSS, and vanilla JavaScript were used to build a fast-loading, mobile-friendly, responsive portfolio without relying on heavy frameworks.",
      },
      {
        heading: "Design Philosophy",
        body: "The design follows a dark theme with clean typography and project filtering. I focused on making sure visitors can navigate quickly and understand my background within seconds.",
      },
      {
        heading: "What I Learned",
        body: "This project taught me how to think like a designer and make responsive layouts. It was also the foundation for organizing my web projects better moving forward."
      }
    ]
  },
  {
    id: 4,
    title: "Casino Simulation Game",
    description: "Unity 3D Multiplayer Casino Prototype",
    thumbnail: "/images/casino-game.jpg",
    category: "Game Development",
    languages: ["C#"],
    progress: 100,
    githubLink: "https://github.com/Dominic-Castaneda/Casino-Simulation-Game.git",
    additionalImages: ["/images/Unity.png", "/images/blackjacktable.png"],
    sections: [
      {
        heading: "Overview",
        body: "This is a 3D casino simulation game developed in Unity. The idea was to recreate the immersive experience of walking through a casino and interacting with classic games like slot machines and blackjack tables. It's designed to feel social, atmospheric, and engaging."
      },
      {
        heading: "Environment & Mechanics",
        body: "I built the casino using modular prefabs, lighting, and texture mapping to create a believable layout. Player movement uses Unity’s Character Controller, and interaction logic is handled via raycasting. Slot machine functionality was implemented using random number generation and animation triggers.",
        image: "/images/casino-game2.jpg"
      },
      {
        heading: "What I Learned",
        body: "This was my first deep dive into Unity 3D and C#. I learned how to structure a scalable scene, work with prefabs, handle player input, and begin planning out multiplayer architecture. It gave me confidence to keep going deeper into Unity game development."
      }
    ]
  },
  {
    id: 3,
    title: "Automatic Card Shuffler",
    description: "3D-Printed Arduino Card Shuffler for Poker",
    thumbnail: "/images/card-shuffler5.png",
    category: "Automation",
    languages: ["C++", "CAD"],
    progress: 90,
    githubLink: "https://github.com/Dominic-Castaneda/Automatic-Card-Shuffler.git",
    additionalImages: ["/images/card-shuffler2.jpg", "/images/card-shuffler3.jpeg"],
    sections: [
      {
        heading: "Overview",
        body: "This project is a fully functional, Arduino-controlled card shuffler designed to mix decks of playing cards. The entire casing was 3D modeled and printed by me, including internal ramps and compartments that guide the cards down into the center collection zone."
      },
      {
        heading: "Design & CAD Modeling",
        body: "Using Fusion 360, I designed a multi-piece shell that snaps together and aligns the cards perfectly. The two card holders are shaped to angle slightly inward, helping gravity feed the cards into the motor-driven slot. This part took several iterations to get right."
      },
      {
        heading: "Electronics",
        body: "At the heart of the project is an Arduino Uno with a motor driver and IR receiver. The IR remote controls activation. Two motors alternate pulling cards from each side, triggered via a remote command and timed intervals.",
      },
      {
        heading: "Progress So Far",
        body: "Right now, the electronics and code work well, motors spin, cards move, and the IR remote gives full control. The mechanical design is about 90% done. Some parts still need fitting tolerances adjusted and the final motor mounts integrated cleanly.",
      },
      {
        heading: "What I Learned",
        body: "This project taught me how to combine CAD and embedded programming into one cohesive physical product. I learned how important tolerances are in 3D printing, how to drive motors via Arduino."
      },
      {
        heading: "Design 1",
        image: "/images/card-shuffler.jpg",
      },
      {
        heading: "Design 2",
        image: "/images/card-shuffler6.jpeg"
      },
      {
        heading: "Design 3",
        image: "/images/card-shuffler4.jpeg"
      },
      {
        heading: "Additional Images",
      }
    ]
  },
  {
    id: 2,
    title: "Toy Claw Machine with PLC",
    description: "Manual Jog or Auto Pick-and-Place",
    thumbnail: "/images/Claw-Machine.jpg",
    category: "Robotic's",
    languages: ["Ladder Logic"],
    progress: 100,
    githubLink: "",
    additionalImages: [],
    sections: [
      {
        heading: "Project Background",
        body: "This project was completed during my Controls Technician certification summer program at Macomb Community College M-Tech. Our instructor brought in a retrofitted toy claw machine, the kind you can buy for kids, and we were tasked with wiring it up and programming its behavior using a PLC."
      },
      {
        heading: "Objective",
        body: "The goal was to create two modes of operation: Manual Jog and Automatic. In Jog Mode, the operator could manually move the claw using pushbuttons. In Auto Mode, the claw would automatically move, pick up candy, and drop it off into a chute just like a mini robotic pick-and-place cell."
      },
      {
        heading: "Programming",
        body: "We used Allen Bradley’s RsLogix 5000 to write the ladder logic that handled motor control, limit switches, solenoid activation, and timed sequences. Unfortunately, I lost the original program file but the logic involved simple state transitions triggered by sensor feedback and timers."
      },
      {
        heading: "What I Learned",
        body: "This was one of my first hands-on PLC projects, and it taught me how to think like a technician. Such as wiring relays, assigning inputs/outputs, and debugging real-world electromechanical behavior. It also gave me confidence in troubleshooting circuits under pressure."
      }
    ]
  },  
  {
    id: 1,
    title: "ESP32 Alert System",
    description: "One-Way Communication System with Button + Buzzer",
    thumbnail: "/images/ESP32.jpg",
    category: "Back End",
    languages: ["C++"],
    progress: 100,
    githubLink: "https://github.com/Dominic-Castaneda/ESP32-Alert-System.git",
    additionalImages: [],
    sections: [
      {
        heading: "Project Inspiration",
        body: "While working as a host at Urban Air Adventure Park, I realized it was awkward to stand silently in the party room waiting for guests to need something. If I left to prepare food, wristbands, or retrieve something, guests would sometimes have to go looking for me. This made me think to create a wireless button system they could press to call me back when needed in a discreet, simple, and effective way."
      },
      {
        heading: "Overview",
        body: "This is a one-way communication system built using two ESP32 boards. When a button is pressed on the client-side board, it sends a signal to the server-side board, which triggers a buzzer and LED."
      },
      {
        heading: "Hardware + Code",
        body: "I used two ESP32 microcontrollers connected over Wi-Fi. The client has a push button that sends an HTTP request to the server. The server listens for incoming requests and activates a buzzer and LED when triggered. The code is written in C++ using the Arduino IDE.",
      },
      {
        heading: "Challenges",
        body: "The biggest barrier was the physical design. I didn’t finish the CAD housing or battery mount to make the system portable and clean-looking. But in terms of functionality, the system worked exactly as intended, and I was proud to bring the concept to life despite limited resources.",
      },
      {
        heading: "What I Learned",
        body: "I learned how to set up Wi-Fi communication between two ESP32s, use simple web servers to send signals, and manage pin logic and debounce buttons. It sparked my interest in building smarter environments with small, helpful tools.",
      }
    ]
  }
  
];

export default projects;
