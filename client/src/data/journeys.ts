type ChecklistItem = {
  title: string;
  info: string;
};

type Journey = {
  id: string;
  emoji: string;
  title: string;
  description: string;
  checklist: ChecklistItem[];
};

export const journeys: Journey[] = [
  {
    id: "accepted",
    emoji: "🎓",
    title: "Accepted",
    description: "You've received your admission letter.",
    checklist: [
      {
        title: "Accept your university offer",
        info: "Confirm your admission before the deadline so you don't lose your place.",
      },
      {
        title: "Apply for your student visa",
        info: "Prepare all required documents and schedule your visa appointment as early as possible.",
      },
      {
        title: "Gather all required documents",
        info: "Passport, admission letter, transcripts, passport photos, and any required financial documents.",
      },
      {
        title: "Book your flight",
        info: "Compare airlines and try to book early for better prices.",
      },
      {
        title: "Join your university's student groups",
        info: "Look for WhatsApp, Discord, Telegram, or Facebook groups to connect with other students.",
      },
      {
        title: "Start looking for accommodation",
        info: "Research university dorms and private apartments before arriving.",
      },
    ],
  },

  {
    id: "preparing",
    emoji: "✈️",
    title: "Preparing",
    description: "Getting ready to move abroad.",
    checklist: [
      {
        title: "Prepare your luggage",
        info: "Pack according to your airline's baggage allowance and don't forget adapters and medications.",
      },
      {
        title: "Exchange some local currency",
        info: "Carry enough local cash for transportation and food during your first few days.",
      },
      {
        title: "Learn basic local phrases",
        info: "Knowing simple greetings and questions will make settling in much easier.",
      },
      {
        title: "Download important apps",
        info: "Install maps, translation apps, transportation apps, and your university's official app.",
      },
      {
        title: "Save emergency contacts",
        info: "Keep important phone numbers like your embassy, university, and family easily accessible.",
      },
      {
        title: "Double-check your travel documents",
        info: "Make sure your passport, visa, tickets, and accommodation details are all ready.",
      },
    ],
  },

  {
    id: "arrived",
    emoji: "🏠",
    title: "Just Arrived",
    description: "Settling into your new city.",
    checklist: [
      {
        title: "Buy a SIM card",
        info: "Visit an official mobile provider with your passport to get connected.",
      },
      {
        title: "Apply for your residence permit",
        info: "Check your country's requirements and book your appointment as soon as possible.",
      },
      {
        title: "Open a bank account",
        info: "Most banks require your passport, student ID, and proof of address.",
      },
      {
        title: "Get a transportation card",
        info: "Apply for a student transport card to save money on buses, trains, and metros.",
      },
      {
        title: "Visit your university campus",
        info: "Find your classrooms, library, cafeteria, and student services before classes begin.",
      },
      {
        title: "Find nearby grocery stores",
        info: "Locate supermarkets and affordable stores close to your accommodation.",
      },
    ],
  },

  {
    id: "studying",
    emoji: "📚",
    title: "Studying",
    description: "Make the most of university life.",
    checklist: [
      {
        title: "Find previous exam papers",
        info: "Ask seniors or student clubs if previous exams are available for practice.",
      },
      {
        title: "Join study groups",
        info: "Studying with classmates can make difficult subjects much easier.",
      },
      {
        title: "Explore the library",
        info: "Learn how to borrow books, reserve study rooms, and access online resources.",
      },
      {
        title: "Meet your professors",
        info: "Introduce yourself during office hours and don't hesitate to ask questions.",
      },
      {
        title: "Look for internships",
        info: "Start building experience early through internships and university career fairs.",
      },
      {
        title: "Attend university events",
        info: "Join workshops, networking events, and student organizations to expand your network.",
      },
    ],
  },

  {
    id: "graduating",
    emoji: "🎉",
    title: "Graduating",
    description: "Plan your next chapter.",
    checklist: [
      {
        title: "Update your CV",
        info: "Include your projects, internships, volunteer work, and university achievements.",
      },
      {
        title: "Apply for internships or jobs",
        info: "Use LinkedIn, university career portals, and company websites to find opportunities.",
      },
      {
        title: "Network with alumni",
        info: "Connect with graduates who may offer advice, referrals, or career opportunities.",
      },
      {
        title: "Prepare graduation documents",
        info: "Check that all academic requirements and paperwork are completed before graduation.",
      },
      {
        title: "Plan your future visa status",
        info: "Research work visas, post-study permits, or other legal options after graduation.",
      },
      {
        title: "Celebrate your achievements",
        info: "Take time to celebrate everything you've accomplished during your journey.",
      },
    ],
  },
];