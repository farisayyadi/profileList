import "./profile.scss";
import { profileData } from "./data.jsx";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useState, useEffect } from "react";

export const Profile = () => {
  const [userProfile, setUserProfile] = useState(profileData);

  const removeProfile = (id) => {
    const newProfileList = userProfile.filter((profile) => profile.id !== id);

    setUserProfile(newProfileList);
    saveProfilesToLocalStorage(newProfileList);
  };

  const saveProfilesToLocalStorage = (profiles) => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  };

  useEffect(() => {
    const storedProfiles = localStorage.getItem("profiles");
    if (storedProfiles) {
      setUserProfile(JSON.parse(storedProfiles));
    }
  }, []);

  return (
    <div className="profile">
      <h1>Profile List</h1>
      {userProfile.map((profile) => (
        <div key={profile.id} className="profileData">
          <img src={profile.img} alt={profile.name} />
          <div className="profieText">
            <h4>Name: {profile.name}</h4>
            <p>Job: {profile.job}</p>
          </div>
          <BsFillTrash3Fill onClick={() => removeProfile(profile.id)} />
        </div>
      ))}
    </div>
  );
};
