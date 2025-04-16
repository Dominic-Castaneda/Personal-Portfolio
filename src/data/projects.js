const projects = [
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
    githubLink: "",
    additionalImages: [],
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
        body: "This was one of my first hands-on PLC projects, and it taught me how to think like a technician — wiring relays, assigning inputs/outputs, and debugging real-world electromechanical behavior. It also gave me confidence in troubleshooting circuits under pressure."
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
