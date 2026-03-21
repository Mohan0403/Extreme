export type ServiceVideoConfig = {
  videoSrc: string;
  videoEmbedUrl: string;
};

export const serviceVideos: Record<string, ServiceVideoConfig> = {
  "Business Class Customisation": {
    videoSrc: "",
    videoEmbedUrl: "",
  },
  "Full Car Customisation": {
    videoSrc: "",
    videoEmbedUrl: "",
  },
  "Paint Protection Film (PPF)": {
    videoSrc: "/videos/services/paint-polishing-film.mp4",
    videoEmbedUrl: "",
  },
  "Ceramic Coating": {
    videoSrc: "/videos/services/ceramic-coating.mp4",
    videoEmbedUrl: "",
  },
  "Body Kits": {
    videoSrc: "",
    videoEmbedUrl: "",
  },
  "Premium Infotainment Systems": {
    videoSrc: "",
    videoEmbedUrl: "",
  },
  "Accessories": {
    videoSrc: "/videos/services/car-accessories.mp4",
    videoEmbedUrl: "",
  },
  "Gold Package": {
    videoSrc: "",
    videoEmbedUrl: "",
  },
  "Automatic Car Wash": {
    videoSrc: "/videos/services/premium-car-wash.mp4",
    videoEmbedUrl: "",
  },
};

export const getServiceVideo = (serviceName: string): ServiceVideoConfig => {
  return serviceVideos[serviceName] ?? { videoSrc: "", videoEmbedUrl: "" };
};
