import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function ContactWithMap() {
  // Ofis lokatsiyasi koordinatalari
  const officeLocation = { lat: 41.293276, lng: 69.211759 };

  return (
    <section className="flex justify-center items-center min-h-screen bg-black gap-10 px-10">
      {/* Xarita qismi */}
      <div className=" md:w-[500px] md:h-[550px] w-full h-full bg-[#0F0F0F] border border-blue-500 rounded-lg shadow-[0px_0px_15px_2px_rgba(0,123,255,0.5)] overflow-hidden">
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=69.211759%2C41.293276&z=16&pt=69.211759,41.293276,pm2rdm"
          width="100%"
          height="550"
          style={{ border: "none", borderRadius: "10px" }}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
