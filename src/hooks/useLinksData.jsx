import { useLayoutEffect, useState } from "react";

const useLinksData = () => {
  const [linksData, setLinksData] = useState([]);
  const [headerElement, setHeaderElement] = useState(null);

  useLayoutEffect(() => {
    setLinksData([
      {
        id: 0,
        link: document.querySelector(".section-about"),
        name: "About me",
      },
      {
        id: 1,
        link: document.querySelector(".section-skills"),
        name: "Skills",
      },
      {
        id: 2,
        link: document.querySelector(".section-experience"),
        name: "Experience",
      },
      {
        id: 3,
        link: document.querySelector(".section-projects"),
        name: "Projects",
      },
      {
        id: 4,
        link: document.querySelector(".section-contact"),
        name: "Contact me",
      },
    ]);

    setHeaderElement(document.querySelector(".header"));
  }, []);

  return { linksData, headerElement };
};

export default useLinksData;
