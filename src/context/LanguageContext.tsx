import React, { createContext, useContext, useState, useEffect } from 'react';
import { WeddingData, weddingData } from '../data/weddingData';
import weddingMandapImg from '../assets/images/wedding_mandap_couple.jpg';
import receptionSofaImg from '../assets/images/reception_sofa_couple.jpg';

export type Language = 'en' | 'te';

export const teluguWeddingData: WeddingData = {
  couple: {
    brideShort: 'సాయి శ్రీ',
    brideFull: 'సాయి శ్రీ',
    brideParents: 'శ్రీమతి సురేంద్రమ్మ & శ్రీ అప్పలరాజు',
    brideFace: '/src/assets/images/bride_face.jpg?v=2',
    bridePhoto: '/src/assets/images/sai_sree_bride.jpg',
    groomShort: 'ప్రదీప్',
    groomFull: 'ప్రదీప్',
    groomParents: 'శ్రీమతి యు.రమణమ్మ & శ్రీ యు.సంజీవప్ప',
    groomFace: '/src/assets/images/groom_face.jpg?v=2',
    groomPhoto: '/src/assets/images/pradeep_groom.jpg',
    story:
      'సాంప్రదాయ సంస్కృతి, కుటుంబ పెద్దల దివ్య ఆశీస్సులు, ఆత్మీయ అనురాగాల నడుమ రెండు హృదయాలు పవిత్ర కల్యాణ వేదికపై ఒక్కటవుతూ నూతన జీవిత ప్రయాణాన్ని ప్రారంభిస్తున్నాయి.',
    portraitImage: '/src/assets/images/couple_temple_real.jpg',
    portraitAlt: 'దేవస్థానంలో ప్రదీప్ మరియు సాయి శ్రీ — వధూవరులు',
  },
  sacredInvocation: '|| శ్రీ గణేశాయ నమః · శ్రీ లక్ష్మీ నారాయణాయ నమః ||',
  invitationLead: 'భగవంతుని దివ్య కృపతో మరియు పెద్దల దివ్య ఆశీస్సులతో,',
  invitationMessage:
    'మా ప్రియతమ వధూవరుల వివాహ మహోత్సవానికి మిమ్మల్ని మరియు మీ కుటుంబ సభ్యులను సాదరంగా ఆహ్వానిస్తున్నాము. మీ శుభాగమనం మరియు హృదయపూర్వక ఆశీర్వాదాలు మాకు అత్యంత ఆనందదాయకం.',
  closingBlessing:
    'మా కుటుంబ సభ్యులందరితో కలిసి, మా జీవితంలోని ఈ నూతన పవిత్ర ప్రయాణాన్ని ఆశీర్వదించడానికి మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నాము. మీ ఆశీస్సులే మాకు అమూల్యమైన కానుక.',
  weddingTargetIso: '2026-11-22T08:30:00+05:30',
  weddingCeremony: {
    title: 'వివాహ మహోత్సవం',
    date: '22 నవంబర్ 2026',
    time: 'ఉదయం 8:30 నుండి 9:30 వరకు · శుభ ముహూర్తం',
    venue: 'గండి ఆంజనేయ స్వామి దేవస్థానం',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gandi+Anjaneya+Swamy+Temple',
  },
  reception: {
    title: 'ఆశీర్వాదం & విందు',
    date: '23 నవంబర్ 2026',
    time: 'మధ్యాహ్నం 1:30 గంటలకు',
    venue: 'తరిమెల (స్వగృహం)',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tarimela+Village+Andhra+Pradesh',
  },
  templeBannerTitle: 'గండి ఆంజనేయ స్వామి దేవస్థానం',
  templeBannerSubtitle: 'పవిత్ర వివాహ పుణ్యక్షేత్రం',
  whatsappNumber: '',
  rsvpMessage:
    'నమస్కారం! గండి ఆంజనేయ స్వామి క్షేత్రంలో జరిగే సాయి శ్రీ & ప్రదీప్‌ల వివాహ మహోత్సవానికి హాజరై వధూవరులను ఆశీర్వదించగలమని తెలియజేయుటకు సంతోషిస్తున్నాము.',
  shareTitle: 'ప్రదీప్ & సాయి శ్రీ — కల్యాణ ఆహ్వాన పత్రిక',
  shareText:
    'మా కుటుంబాల ఆశీస్సులతో, 22 నవంబర్ 2026న గండి ఆంజనేయ స్వామి దేవస్థానంలో జరుగు ప్రదీప్ & సాయి శ్రీల వివాహ మహోత్సవానికి మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నాము.',
  musicTrackUrl: '/music/anuvanuvuu.mp3',
  artwork: weddingData.artwork,
  events: [
    {
      id: 'wedding',
      title: 'వివాహ మహోత్సవం',
      subtitle: 'శుభ ముహూర్తం & మాంగళ్య ధారణం',
      date: '22 నవంబర్ 2026',
      time: 'ఉదయం 8:30 నుండి 9:30 వరకు',
      venue: 'గండి ఆంజనేయ స్వామి దేవస్థానం',
      description:
        'వేద మంత్రోచ్ఛారణలు, నాదస్వర మంగళ ధ్వనులు, కాశీ యాత్ర, జీలకర్ర-బెల్లం మరియు పవిత్ర మాంగళ్య ధారణ మహోత్సవం.',
      image: weddingMandapImg,
      imageAlt: 'వధూవరుల హస్తమేళాపం మరియు పవిత్ర మాంగళ్య ధారణం',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gandi+Anjaneya+Swamy+Temple',
      accentColor: '#8C1423',
      backdropTint: 'rgba(140, 20, 35, 0.08)',
    },
    {
      id: 'reception',
      title: 'ఆశీర్వాదం & విందు',
      subtitle: 'నూతన వధూవరుల ఆశీర్వాద సభ',
      date: '23 నవంబర్ 2026',
      time: 'మధ్యాహ్నం 1:30 గంటలకు',
      venue: 'తరిమెల (స్వగృహం)',
      description:
        'నూతన దంపతులను మనసారా ఆశీర్వదించి, సాంప్రదాయ అరటి ఆకు విందును ఆరగించి మమ్మల్ని ఆనందింపజేయవలసిందిగా కోరుచున్నాము.',
      image: receptionSofaImg,
      imageAlt: 'స్వగృహంలో సాంప్రదాయ ఆశీర్వాద విందు వేదిక',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tarimela+Village+Andhra+Pradesh',
      accentColor: '#B88635',
      backdropTint: 'rgba(184, 134, 53, 0.08)',
    },
  ],
  gallery: weddingData.gallery,
  memories: weddingData.memories,
};

const UI_STRINGS: Record<Language, Record<string, string>> = {
  en: {
    aWeddingInvitation: 'A Wedding Invitation',
    weds: 'WEDS',
    areGettingMarried: 'Are Getting Married · With the blessings of our families',
    invite: 'Invite',
    parentsOfGroom: 'Son of Smt U.Ramanamma & Sri U.Sanjeevappa',
    parentsOfBride: 'Daughter of Smt & Sri',
    sacredUnion: 'Two Souls, One Divine Sacred Journey',
    celebrationEvents: 'Sacred Celebration Events',
    getDirections: 'Get Directions',
    meetTheBrideGroom: 'Meet the Bride & Groom',
    theGroom: 'The Groom',
    theBride: 'The Bride',
    gandiTempleDesc:
      'A timeless pilgrimage nestled amid the sacred red hills of Gandi, where Lord Veeranjaneya Swamy blesses the holy union of Pradeep & Sai Sree.',
    kalyanaVaibhogame: 'కళ్యాణ వైభోగమే',
    sacredWeddingVenue: 'Sacred Wedding Venue',
    gandiTempleTitle: 'GANDI ANJANEYA SWAMY TEMPLE',
    countingTheDays: 'Counting the Days',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    liveCountdown: 'Live Countdown',
    shubhamBhavatu: 'Shubham Bhavatu',
    withLoveRegards: 'With love and regards, Our Families',
    seeLoveMemories: 'See Love Memories🫶',
    madeByUrsUday: 'made by urs uday',
    shareInvitation: 'Share Invitation',
    addToCalendar: 'Add to Calendar',
    ceremonyDetails: 'Ceremony & Reception Details',
    close: 'Close',
    prev: 'Prev',
    next: 'Next',
    specialWeddingPhotographs: 'Special Wedding Photographs',
    sacredVivahaCeremony: 'Sacred Vivaha Ceremony',
    atSacredFire: 'Pradeep & Sai Sree at the Sacred Fire',
    grandReceptionPortrait: 'Grand Reception Portrait',
    inRoyalAttire: 'Pradeep & Sai Sree in Royal Attire',
    tabWedding: '💍 Wedding',
    tabReception: '👑 Reception',
    cherishedMemories: 'Cherished Memories',
    photoStory: 'Photo Story',
  },
  te: {
    aWeddingInvitation: 'వివాహ ఆహ్వాన పత్రిక',
    weds: 'కల్యాణం',
    areGettingMarried: 'మా కుటుంబ పెద్దల ఆశీస్సులతో ఒక్కటవుతున్నారు',
    invite: 'ఆహ్వానం',
    parentsOfGroom: 'శ్రీమతి యు.రమణమ్మ & శ్రీ యు.సంజీవప్ప గార్ల కుమారుడు',
    parentsOfBride: 'శ్రీమతి & శ్రీ గార్ల కుమార్తె',
    sacredUnion: 'రెండు హృదయాల కలయిక · ఒకే పవిత్ర బంధం',
    celebrationEvents: 'వివాహ శుభకార్య వివరాలు',
    getDirections: 'దారి తెలుసుకోండి',
    meetTheBrideGroom: 'వధూవరుల పరిచయం',
    theGroom: 'వరుడు',
    theBride: 'వధువు',
    gandiTempleDesc:
      'గండి పవిత్ర ఎర్రటి కొండల నడుమ వెలసిన శ్రీ వీరాంజనేయ స్వామి వారి దివ్య సన్నిధిలో, సకల దేవుళ్ళ అనుగ్రహంతో జరుగుతున్న ప్రదీప్ & సాయి శ్రీల పవిత్ర కల్యాణ మహోత్సవం.',
    kalyanaVaibhogame: 'కళ్యాణ వైభోగమే',
    sacredWeddingVenue: 'పవిత్ర వివాహ పుణ్యక్షేత్రం',
    gandiTempleTitle: 'గండి ఆంజనేయ స్వామి దేవస్థానం',
    countingTheDays: 'శుభ ముహూర్తానికి మిగిలిన సమయం',
    days: 'రోజులు',
    hours: 'గంటలు',
    minutes: 'నిమిషాలు',
    seconds: 'సెకన్లు',
    liveCountdown: 'లైవ్ కౌంట్‌డౌన్',
    shubhamBhavatu: 'శుభం భవతు',
    withLoveRegards: 'ప్రేమతో మరియు గౌరవంతో, మా కుటుంబాలు',
    seeLoveMemories: 'మధుర జ్ఞాపకాలు చూడండి🫶',
    madeByUrsUday: 'రూపకల్పన: ఉదయ్',
    shareInvitation: 'ఆహ్వానాన్ని షేర్ చేయండి',
    addToCalendar: 'క్యాలెండర్‌కు జోడించండి',
    ceremonyDetails: 'వివాహ & విందు వివరాలు',
    close: 'మూసివేయి',
    prev: 'మునుపటి',
    next: 'తరువాతి',
    specialWeddingPhotographs: 'ప్రత్యేక వివాహ ఛాయాచిత్రాలు',
    sacredVivahaCeremony: 'పవిత్ర వివాహ మహోత్సవం',
    atSacredFire: 'హోమ గుండం వద్ద ప్రదీప్ & సాయి శ్రీ',
    grandReceptionPortrait: 'రిసెప్షన్ వేడుక',
    inRoyalAttire: 'రాచరిక వేషధారణలో ప్రదీప్ & సాయి శ్రీ',
    tabWedding: '💍 వివాహం',
    tabReception: '👑 రిసెప్షన్',
    cherishedMemories: 'మధుర జ్ఞాపకాలు',
    photoStory: 'ఫోటో సంకలనం',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isTelugu: boolean;
  data: WeddingData;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('wedding_lang') as Language;
    if (saved === 'te' || saved === 'en') {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('wedding_lang', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'te' : 'en');
  };

  const isTelugu = language === 'te';
  const data = isTelugu ? teluguWeddingData : weddingData;

  const t = (key: string): string => {
    return UI_STRINGS[language]?.[key] || UI_STRINGS['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isTelugu,
        data,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
