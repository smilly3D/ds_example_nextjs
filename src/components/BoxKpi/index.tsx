import { Container } from "./styles";

export const BoxKpi = () => {
  const modckData = [
    {
      title: "Overload time during the selected period",
      value: "10h",
      percent: "+ 10% from",
      date: "jul 19 - jul 29",
    },
    {
      title: "Average power gap ",
      value: "150 MVA",
      percent: "+ 10% from",
      date: "jul 19 - jul 29",
    },
    {
      title: "Average apparent power",
      value: "500 MVA",
      percent: "+ 10% from",
      date: "jul 19 - jul 29",
    },
    {
      title: "Average dynamic line rating",
      value: "750 MVA",
      percent: "+ 10% from",
      date: "jul 19 - jul 29",
    },
  ];

  return (
    <>
      {modckData.map((item, index) => (
        <Container key={index}>
          <h2>{item.title}</h2>
          <h3>{item.value}</h3>
          <p>
            {item.percent} <span>{item.date}</span>
          </p>
        </Container>
      ))}
    </>
  );
};
