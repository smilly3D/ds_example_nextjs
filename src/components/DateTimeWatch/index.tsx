import { useEffect, useState } from "react";
import { DateTime } from "luxon";

export const DateTimeWatch = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const updateDateTime = () => {
      const NewDateTime = DateTime.now()
        .toFormat("MMM dd, HH:mm:ss ZZZZ")
        .replace("GMT", "UTC");
      setDateTime(NewDateTime);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 600);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      Real-time:{" "}
      {dateTime.toLocaleString("en-US", {
        timeZone: "UTC",
        timeZoneName: "short",
      })}
    </>
  );
};
