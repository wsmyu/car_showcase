"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchManufacturer from "./SearchManufacturer";
import { CiSearch } from "react-icons/ci";
import { FaCar } from "react-icons/fa6";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-4 z-10 ${otherClasses}`}>
    <CiSearch className="text-white text-xl" />
  </button>
);

const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please fill in the search bar");
    }
    updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
  };

  const updateSearchParams = (model:string,manufacturer:string)=>{
    const searchParams = new URLSearchParams(window.location.search);
    if(model){
      searchParams.set('model',model)
    }else{
      searchParams.delete('model')
    }

    if(manufacturer){
      searchParams.set('manufacturer',manufacturer)
    }else{
      searchParams.delete('manufacturer')
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname, { scroll: false })
  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <FaCar className="absolute ml-4 " />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default Searchbar;
