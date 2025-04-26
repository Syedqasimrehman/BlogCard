import React, { useEffect, useRef } from "react";
import { profile_Data, social } from "../assets";

const ProfileCard = () => {
 
  const hoverRef = useRef(null);
  const spanRef = useRef(null);
  useEffect(() => {
    const btn = hoverRef.current;

    const OnMouseEnter = (e) => {
      const { width } = e.target.getBoundingClientRect();

      const offset = e.offsetX;

      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const OnMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 250, fill: "forwards" }
      );
    };
    btn.addEventListener("mousemove", OnMouseEnter);
    btn.addEventListener("mouseleave", OnMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", OnMouseEnter);
      btn.removeEventListener("mouseleave", OnMouseLeave);
    };
  }, []);
  return (
    <div className="card_design">
      <div className="card">
        {profile_Data.map((item) => (
          <div
            className="flex flex-col justify-center items-center "
            key={item}
          >
            <img
              src={item.progile_img}
              alt={item.name}
              width={90}
              height={90}
              className="border-[1px] p-5 rounded-full"
            />
            <h1 className="mt-5 font-semibold tracking-wider text-[25px]">
              {item.name}
            </h1>
            <p className=" text-neutral-600 text-[19px] tracking-wider">
              {item.skill_title}
            </p>
            <p className="mt-7 text-[1.2rem] text-neutral-600">
              {item.discription}
            </p>
          </div>
        ))}
        <button
          ref={hoverRef}
          className=" overflow-hidden relative bg-indigo-700 px-10 py-3 w-full my-10 rounded-[5px] text-[#ffff] font-semibold tracking-wide"
        >
          <span className="pointer-events-none relative z-10 mix-blend-difference">
            Contact me
          </span>
          <span
            ref={spanRef}
            className="pointer-events-none absolute left-1/2 top-1/2 bg-amber-400 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full "
          />
        </button>

        {social.map((item) => (
          <li key={item.id} className="social_style">
            <a href="#" className="">
              {item.img}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
