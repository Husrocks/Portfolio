export interface CommunityRole {
  slug: string
  title: string
  role: string
  organization: string
  description: string
  coverImage: string
  images: { src: string; alt: string }[]
  learnings: string[]
}

export const communityRoles: CommunityRole[] = [
  {
    slug: "bytecamp-lgu",
    title: "Campus Ambassador",
    role: "Campus Ambassador",
    organization: "ByteCamp at LGU",
    description:
      "Representing ByteCamp at Lahore Garrison University, fostering community engagement, and organizing tech initiatives to bridge the gap between students and the tech industry.",
    coverImage: "/Portfolio/images/community/bytecamp.jpg",
    images: [
      { src: "/Portfolio/images/community/bytecamp.jpg", alt: "Students collaborating at a ByteCamp tech event" },
    ],
    learnings: [
      "Leadership and team management by organizing campus-wide technical events.",
      "Effective communication skills while bridging the gap between industry professionals and students.",
      "Event planning and execution, from marketing to logistics management.",
    ],
  },
  {
    slug: "devfest-gdg",
    title: "Active Participant",
    role: "Active Participant",
    organization: "DevFest & GDG Workshops",
    description:
      "Actively involved in Google Developer Groups (GDG) and DevFest events, participating in workshops, networking with industry professionals, and continuously learning emerging technologies.",
    coverImage: "/Portfolio/images/community/devfest.jpg",
    images: [
      { src: "/Portfolio/images/community/devfest.jpg", alt: "Speaker presenting at a GDG DevFest conference" },
    ],
    learnings: [
      "Exposure to cutting-edge web and cloud technologies directly from Google Developer Experts.",
      "Networking with like-minded developers and establishing industry connections.",
      "Hands-on experience with modern tech stacks through interactive workshop sessions.",
    ],
  },
]
