export type ServiceVideoConfig = {
  videoSrc: string;
  videoEmbedUrl: string;
};

export const serviceVideos: Record<string, ServiceVideoConfig> = {
  "Business Class Customisation": {
    videoSrc: "/videos/services/business-class-customisation.mp4",
    videoEmbedUrl: "",
  },
  "Full Car Customisation": {
    videoSrc: "/videos/services/full-car-customisation.mp4",
    videoEmbedUrl: "",
  },
  "Paint Protection Film (PPF)": {
    videoSrc: "/videos/services/ppf.mp4",
    videoEmbedUrl: "",
  },
  "Ceramic Coating": {
    videoSrc: "/videos/services/ceramic-coating.mp4",
    videoEmbedUrl: "",
  },
  "Body Kits": {
    videoSrc: "/videos/services/body-kits.mp4",
    videoEmbedUrl: "",
  },
  "Premium Infotainment Systems": {
    videoSrc: "/videos/services/premium-infotainment-system.mp4",
    videoEmbedUrl: "",
  },
  "Accessories": {
    videoSrc: "/videos/services/Accessories.mp4",
    videoEmbedUrl: "",
  },
  "Gold Package": {
    videoSrc: "/videos/services/gold-package.mp4",
    videoEmbedUrl: "",
  },
  "Automatic Car Wash": {
    videoSrc: "/videos/services/automatic-car-wash.mp4",
    videoEmbedUrl: "",
  },
};

export const getServiceVideo = (serviceName: string): ServiceVideoConfig => {
  return serviceVideos[serviceName] ?? { videoSrc: "", videoEmbedUrl: "" };
};
