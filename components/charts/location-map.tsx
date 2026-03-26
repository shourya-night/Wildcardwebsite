"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";

type Point = { latitude: number; longitude: number };

export function LocationMap({ points }: { points: Point[] }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || points.length === 0) return;

    // Prevent re-initializing the map on re-render
    if (leafletMapRef.current) {
      leafletMapRef.current.setView([points[0].latitude, points[0].longitude], 16);
      return;
    }

    const map = L.map(mapRef.current).setView([points[0].latitude, points[0].longitude], 16);
    leafletMapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Example marker
    L.marker([points[0].latitude, points[0].longitude]).addTo(map);

    return () => {
      map.remove();
      leafletMapRef.current = null;
    };
  }, [points]);

  return <div ref={mapRef} className="h-[420px] w-full rounded-lg border" />;
}
