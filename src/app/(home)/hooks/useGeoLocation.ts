import { useState, useEffect } from "react";

interface UseGeolocationProps {
  lat: number;
  long: number;
  isLoading: boolean;
  isLoaded: boolean;
  error: boolean;
}

export function useGeoLocation(): UseGeolocationProps {
  const [location, setLocation] = useState<UseGeolocationProps>({
    lat: 0,
    long: 0,
    isLoading: true,
    isLoaded: false,
    error: false,
  });

  const onError = () => {
    setLocation((state) => {
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    });
  };

  const onSuccess = (position: GeolocationPosition) => {
    setLocation((state) => {
      return {
        ...state,
        lat: position.coords.latitude,
        long: position.coords.longitude,
        isLoaded: true,
        isLoading: false,
      };
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError();
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
}
