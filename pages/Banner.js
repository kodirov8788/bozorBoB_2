import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Banner() {
  const BANNER_DATA = [
    {
      id: 0,
      imageURL: "https://cdn.mos.cms.futurecdn.net/zDVBgqfuesBrQDkptZPzw5.png",
      imageDesc: "Shop and Toys",
    },
    {
      id: 1,
      imageURL:
        "https://www.ixbt.com/img/n1/news/2021/9/4/acBook-Pro-M1X_large.jpg",
      imageDesc: "Shop and Toys",
    },
    {
      id: 2,
      imageURL:
        "https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg",
      imageDesc: "Shop and Toys",
    },
    {
      id: 3,
      imageURL: "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
      imageDesc: "Shop and Toys",
    },
  ];

  const [imageIndex, SetImageIndex] = useState(0);

  useEffect(() => {
    const lastIndex = BANNER_DATA.length - 1;
    if (imageIndex < 0) {
      SetImageIndex(lastIndex);
    }
    if (imageIndex > lastIndex) {
      SetImageIndex(0);
    }
  }, [imageIndex]);

  useEffect(() => {
    let slider = setInterval(() => {
      SetImageIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(slider);
  }, []);

  return (
    <div className="banner">
      <div
        className="banner_leftIcon"
        onClick={() => SetImageIndex((prev) => prev - 1)}
      >
        <FiChevronLeft />
      </div>
      {/* <img className={classes.banner__image} src={BANNER_DATA[imageIndex]?.imageURL} alt={BANNER_DATA[imageIndex]?.imageDesc} /> */}
      <div
        style={{
          transform: `translate(-${imageIndex * (100 / BANNER_DATA.length)}%)`,
        }}
        className="banner__imageContainer"
      >
        {BANNER_DATA.map((img, ind) => (
          <div key={ind} className="banner__imageContainerItem">
            <img className="banner__image" src={img.imageURL} alt="" />
          </div>
        ))}
      </div>
      <div
        className="banner_rightIcon"
        onClick={() => SetImageIndex((prev) => prev + 1)}
      >
        <FiChevronRight />
      </div>
    </div>
  );
}

export default Banner;
