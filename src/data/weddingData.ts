export interface CelebrationEvent {
  id: 'haldi' | 'mehendi' | 'wedding' | 'reception';
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image: string;
  imageAlt: string;
  mapsUrl: string;
  accentColor: string;
  backdropTint: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  alt: string;
  rotation: number;
}

export interface WeddingData {
  couple: {
    brideShort: string;
    brideFull: string;
    brideParents: string;
    brideFace: string;
    bridePhoto: string;
    groomShort: string;
    groomFull: string;
    groomParents: string;
    groomFace: string;
    groomPhoto: string;
    story: string;
    portraitImage: string;
    portraitAlt: string;
  };
  sacredInvocation: string;
  invitationLead: string;
  invitationMessage: string;
  closingBlessing: string;
  weddingTargetIso: string;
  weddingCeremony: {
    title: string;
    date: string;
    time: string;
    venue: string;
    mapsUrl: string;
  };
  reception: {
    title: string;
    date: string;
    time: string;
    venue: string;
    mapsUrl: string;
  };
  templeBannerTitle: string;
  templeBannerSubtitle: string;
  whatsappNumber: string;
  rsvpMessage: string;
  shareTitle: string;
  shareText: string;
  musicTrackUrl: string;
  artwork: {
    templeGopuram: string;
    coupleVarmala: string;
    templeHillsFinale: string;
  };
  events: CelebrationEvent[];
  gallery: GalleryPhoto[];
  memories: string[];
}

export const weddingData: WeddingData = {
  couple: {
    brideShort: 'SAI SREE',
    brideFull: 'Sai Sree',
    brideParents: 'Appalaraju & Surendramma',
    brideFace: '/src/assets/images/bride_face.jpg?v=2',
    bridePhoto: '/src/assets/images/sai_sree_bride.jpg',
    groomShort: 'PRADEEP',
    groomFull: 'Pradeep',
    groomParents: 'Smt U.Ramanamma & Sri U.Sanjeevappa',
    groomFace: '/src/assets/images/groom_face.jpg?v=2',
    groomPhoto: '/src/assets/images/pradeep_groom.jpg',
    story:
      'Bound by timeless traditions, warm family blessings, and shared laughter, two hearts come together under the sacred mandapam to begin a lifelong journey of companionship and grace.',
    portraitImage: '/src/assets/images/couple_temple_real.jpg',
    portraitAlt: 'Pradeep and Sai Sree at the temple — Bride and Groom',
  },
  sacredInvocation: '|| SHRI GANESHAYA NAMAH ||',
  invitationLead: 'With the divine blessings of the Almighty and our elders,',
  invitationMessage:
    'We cordially invite you to celebrate the wedding ceremony of our beloved children. Your gracious presence and blessings will make our celebration truly memorable.',
  closingBlessing:
    'Together with our families, we invite you to join us and bless the beginning of our beautiful journey. Your presence is our greatest blessing.',
  weddingTargetIso: '2026-11-22T08:30:00+05:30',
  weddingCeremony: {
    title: 'WEDDING CEREMONY',
    date: '22 November 2026',
    time: '8:30 AM to 9:30 AM · Shubha Muhurtham',
    venue: 'Gandi Anjaneya Swamy Temple',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gandi+Anjaneya+Swamy+Temple',
  },
  reception: {
    title: 'RECEPTION',
    date: '23 November 2026',
    time: '1:30 PM',
    venue: 'Tarimela (At Home)',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tarimela+Village+Andhra+Pradesh',
  },
  templeBannerTitle: 'GANDI ANJANEYA SWAMY TEMPLE',
  templeBannerSubtitle: 'Sacred Wedding Venue',
  whatsappNumber: '',
  rsvpMessage:
    'Namaste! With great joy we confirm our presence to bless Sai Sree & Pradeep at their wedding celebrations at Gandi Anjaneya Swamy Temple (22-23 November 2026).',
  shareTitle: 'Pradeep & Sai Sree — Wedding Invitation',
  shareText:
    'With the blessings of our families, you are cordially invited to the wedding of Pradeep & Sai Sree at Gandi Anjaneya Swamy Temple on 22 November 2026 (8:30 AM to 9:30 AM).',
  musicTrackUrl: '/music/anuvanuvuu.mp3',
  artwork: {
    templeGopuram: '/src/assets/images/temple_gopuram_colorful_1794976458195.jpg',
    coupleVarmala: '/src/assets/images/south_indian_couple_varmala_1794976458658.jpg',
    templeHillsFinale: '/src/assets/images/temple_hills_finale_1794976460923.jpg',
  },
  events: [
    {
      id: 'wedding',
      title: 'Wedding Ceremony',
      subtitle: 'Shubha Muhurtham & Mangalya Dharanam',
      date: '22 November 2026',
      time: '8:30 AM to 9:30 AM',
      venue: 'Gandi Anjaneya Swamy Temple',
      description:
        'Vedic hymns, Nadaswaram melodies, Kashi Yatra, Jeelakarra Bellam, and the sacred tying of the Mangalsutra.',
      image: '/src/assets/images/wedding_mandap_couple.jpg',
      imageAlt: 'Sacred Vivaha ceremony of Pradeep and Sai Sree at the holy mandapam',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gandi+Anjaneya+Swamy+Temple',
      accentColor: '#8C1423',
      backdropTint: '#FFF1D1',
    },
    {
      id: 'reception',
      title: 'Reception',
      subtitle: 'Ashirvadam & Feast of Blessings',
      date: '23 November 2026',
      time: '1:30 PM',
      venue: 'Tarimela (At Home)',
      description:
        'An afternoon gathering with traditional banana-leaf feast and heartfelt blessings for the newlyweds.',
      image: '/src/assets/images/reception_sofa_couple.jpg',
      imageAlt: 'Pradeep and Sai Sree in royal attire on golden sofa for the wedding reception',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tarimela+Village+Andhra+Pradesh',
      accentColor: '#650C18',
      backdropTint: '#FFF8E8',
    },
  ],
  gallery: [
    {
      id: 'mem-1',
      src: '/src/assets/images/couple_temple_real.jpg',
      caption: 'Pradeep & Sai Sree at the Sacred Temple',
      alt: 'Pradeep and Sai Sree together at the temple',
      rotation: -5,
    },
    {
      id: 'mem-2',
      src: '/src/assets/images/pradeep_groom.jpg',
      caption: 'The Handsome Groom — Pradeep',
      alt: 'Pradeep — Groom portrait',
      rotation: 6,
    },
    {
      id: 'mem-3',
      src: '/src/assets/images/wedding_ceremony_hands.jpg',
      caption: 'Sacred Mangalya Dharanam Ritual',
      alt: 'Sacred Hasta Melap and Mangalya Dharanam ritual with bride and groom joined hands',
      rotation: -4,
    },
    {
      id: 'mem-4',
      src: '/src/assets/images/south_indian_couple_varmala_1794976458658.jpg',
      caption: 'Exchange of Garlands',
      alt: 'Traditional South Indian couple exchanging floral garlands before temple',
      rotation: 7,
    },
    {
      id: 'mem-5',
      src: '/src/assets/images/gandi_temple_bg.jpg',
      caption: 'Gandi Anjaneya Swamy Temple Kshetram',
      alt: 'Gandi Anjaneya Swamy Temple against red hills',
      rotation: -5,
    },
  ],
  memories: [
    '/memories/memory_01.jpg',
    '/memories/memory_02.jpg',
    '/memories/memory_03.jpg',
    '/memories/memory_04.jpg',
    '/memories/memory_05.jpg',
    '/memories/memory_06.jpg',
    '/memories/memory_07.jpg',
    '/memories/memory_08.jpg',
    '/memories/memory_09.jpg',
    '/memories/memory_10.jpg',
    '/memories/memory_11.jpg',
    '/memories/memory_12.jpg',
    '/memories/memory_13.jpg',
    '/memories/memory_14.jpg',
    '/memories/memory_15.jpg',
  ],
};
