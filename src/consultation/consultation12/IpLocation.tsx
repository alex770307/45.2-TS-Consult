import { useEffect, useState } from "react";
import styles from "./ipLocation.module.css";

interface ILocationData {
  query: string;
  country: string;
  regionName: string;
  city: string;
  lat: number;
  lon: number;
  isp: string;
}

export default function IpLocation() {
  const [location, setLocation] = useState<ILocationData | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLocation = async () => {
    setloading(true);
    setError(null);
    try {
      const response = await fetch("http://ip-api.com/json");
      if (!response.ok) {
        throw new Error("Ошибка загрузки данных");
      }
      const data: ILocationData = await response.json();
      setLocation(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className={styles.container}>
      <img
        src="https://steamuserimages-a.akamaihd.net/ugc/786374678940113386/82A524D10FE4625FDFB62FEC42BF993F3904DCF1/?imw=512&amp;imh=384&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"
        className={styles.hack}
        alt=""
      />
      {error && <p className={styles.error}>{error}</p>}
      {/* условный рендеринг с помощью оператора логического "И" (&&),
           чтобы отображать элементы в зависимости от наличия данных в переменных error и location. */}
      <button
        onClick={fetchLocation}
        disabled={loading}
        className={styles.button}
      >
        {loading ? "Загрузка..." : "Обновить локацию"}
        {/* Если loading === true → Отображается "Загрузка..." (значит, запрос выполняется).
            Если loading === false → Отображается "Обновить локацию" (значит, данные загружены, и можно запросить снова). */}
      </button>
      {location && (
        <div className={styles.card}>
          <p>
            <strong>IP:</strong> {location.query}
          </p>
          <p>
            <strong>Страна:</strong> {location.country}
          </p>
          <p>
            <strong>Регион:</strong> {location.regionName}
          </p>
          <p>
            <strong>Город:</strong> {location.city}
          </p>
          <p>
            <strong>Широта:</strong> {location.lat}
          </p>
          <p>
            <strong>Долгота:</strong> {location.lon}
          </p>
          <p>
            <strong>Провайдер:</strong> {location.isp}
          </p>
        </div>
      )}
    </div>
  );
}
