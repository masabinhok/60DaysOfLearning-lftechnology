import { useState, useEffect } from "react";


const useWeather = (city) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b4060536e280d71f4096093e85c21c2a&units=metric`
        );
        if (!response.ok) {
          throw new Error("City not found!");
        }
        const result = await response.json();

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);
  return { data, loading, error };
};

export default useWeather;
