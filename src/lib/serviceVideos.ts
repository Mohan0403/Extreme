export type ServiceVideoConfig = {
  videoSrc: string;
  videoEmbedUrl: string;
};

export const serviceVideos: Record<string, ServiceVideoConfig> = {
  "Interior Deep Cleaning": {
    videoSrc: "/videos/services/interior-deep-cleaning.mp4",
    videoEmbedUrl: "",
  },
  "Ceramic Coating": {
    videoSrc: "/videos/services/ceramic-coating.mp4",
    videoEmbedUrl: "",
  },
  "Paint Protection Film": {
    videoSrc: "/videos/services/paint-polishing-film.mp4",
    videoEmbedUrl: "",
  },
  "Car Polishing & Detailing": {
    videoSrc: "/videos/services/car-polishing-detailing.mp4",
    videoEmbedUrl: "",
  },
  "360° Camera Installation": {
    videoSrc: "/videos/services/360-camera-installation.mp4",
    videoEmbedUrl: "",
  },
  "Car Accessories": {
    videoSrc: "/videos/services/car-accessories.mp4",
    videoEmbedUrl: "",
  },
  "Premium Car Wash": {
    videoSrc: "/videos/services/premium-car-wash.mp4",
    videoEmbedUrl: "",
  },
};

export const getServiceVideo = (serviceName: string): ServiceVideoConfig => {
  return serviceVideos[serviceName] ?? { videoSrc: "", videoEmbedUrl: "" };
};
