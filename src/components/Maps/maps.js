import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import * as React from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";
import { database } from "../../Database/Fire";
import { onValue, ref } from "firebase/database";
import axios from "axios"; // Pastikan axios sudah di-install

function MapsReact() {
  // const [height, setHeight] = React.useState("calc(100vh - 100px)");
  const [dataMap, setDataMap] = React.useState(null); // Inisialisasi sebagai null
  const [hasSentNotification, setHasSentNotification] = React.useState(false);
  const starCountRef = ref(database, `maps/`);

  // Koordinat pusat lingkaran (masjid Al-Ikhlas)
  const centerLat = -7.81744;
  const centerLng = 110.37876;

  // Radius lingkaran dalam meter
  // Radius masjid Al-Ikhlas Sorosutan 47 meter.
  const radiusInMeters = 47;

  // Fungsi untuk menghitung jarak antara dua titik koordinat menggunakan rumus Haversine
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Radius bumi dalam meter
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Jarak dalam meter
    return distance;
  };

  // Fungsi untuk memeriksa apakah marker berada di luar radius dan kirim notifikasi
  const checkDistance = (latitude, longitude) => {
    const distance = calculateDistance(centerLat, centerLng, latitude, longitude);
    console.log(`Distance from center to marker: ${distance} meters`);

    if (distance > radiusInMeters) {
      // Jika marker keluar dari radius dan notifikasi belum dikirim, kirim notifikasi dan ubah status
      if (!hasSentNotification) {
        sendNotification("Kotak Infak berada di luar Masjid!", "Peringatan Kotak Infak");
        setHasSentNotification(true);
      }
    } else {
      // Reset status pengiriman notifikasi jika marker kembali ke dalam radius
      if (hasSentNotification) {
        setHasSentNotification(false);
      }
    }
  };

  // Fungsi untuk mengirim notifikasi
  const sendNotification = async (body, title) => {
    const token = "c95WLjFp3hHDEcmDxClmAv:APA91bFdqxKJE3r7-9baoWIbomQ0qUvrVLlY8OiEiOY2xxwTjSuMwjcD_XPOpHUsy_bIr_-qFdL7s_fBG7LSKL3-OjNEByeyxj_8MUaHbMVSRYwpQfT7v9ARsvhbogneYb9OLNargTuZ";

    try {
      const url = `http://localhost:3001/send-notification?token=${token}&title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
      console.log("Sending notification with URL: ", url);

      const response = await axios.get(url);
      console.log("Full response:", response);
      console.log("Notification sent:", response.data);
    } catch (error) {
      console.error("Error sending notification:", error.response ? error.response.data : error.message);
    }
  };

  // Membaca data dari Firebase dan langsung periksa jarak
  React.useEffect(() => {
    const fetchData = () => {
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Pastikan data ada dan tidak null
          if (data.lat && data.long) {
            // Validasi bahwa lat dan long adalah angka
            const latitude = parseFloat(data.lat);
            const longitude = parseFloat(data.long);

            //mengecek apakah koordinat benar sesuai dengan angka bukan NaN
            if (!isNaN(latitude) && !isNaN(longitude)) {
              setDataMap({ lat: latitude, long: longitude });

              // Periksa jarak saat data baru diambil
              checkDistance(latitude, longitude);
            } else {
              console.error("Invalid data: latitude or longitude is NaN");
              // jika data tidak valid maka akan diset default ke koordniat pusat yang sudah ditentukan
              setDataMap({ lat: centerLat, long: centerLng });
            }
          } else {
            console.error("Invalid data from Firebase: lat or long is missing");
            // Jika data tidak lengkap juga maka akan di set default
            setDataMap({ lat: centerLat, long: centerLng });
          }
        }
      });
    };

    fetchData();

    // Membersihkan listener ketika komponen tidak lagi digunakan
    return () => {
      const starCountListener = onValue(starCountRef, () => {});
      starCountListener();
    };
  }, [starCountRef]);

  return (
    <div className="map-wrap">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: centerLng,
          latitude: centerLat,
          zoom: 14,
        }}
        style={{
          width: "100%",
          margin: "auto",
          height: "calc(100vh - 0px)",
        }}
        //mengambil API dari maptiler
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=sVLnYoaj7y0PsT1a4jsL"
      >
        <NavigationControl position="top-left" />

        {dataMap && (
          <Marker
            longitude={dataMap.long}
            latitude={dataMap.lat}
            color="#000000"
            // draggable={false} // Marker bisa dipindahkan
            onDragEnd={(event) => {
              const { lngLat } = event;
              checkDistance(lngLat.lat, lngLat.lng); // Cek jarak ketika marker dipindahkan
            }}
          />
        )}
      </Map>
    </div>
  );
}

export default MapsReact;
