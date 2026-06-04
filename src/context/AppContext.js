"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { initialPets } from "../data/pets";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [pets, setPets] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [requests, setRequests] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Carregar dados salvos ou inicializar com mocks
    const storedPets = localStorage.getItem("adopet_pets");
    const storedFavorites = localStorage.getItem("adopet_favorites");
    const storedRequests = localStorage.getItem("adopet_requests");

    if (storedPets) {
      setPets(JSON.parse(storedPets));
    } else {
      setPets(initialPets);
      localStorage.setItem("adopet_pets", JSON.stringify(initialPets));
    }

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }

    if (storedRequests) {
      setRequests(JSON.parse(storedRequests));
    } else {
      const defaultRequests = [
        {
          id: "req-1",
          petId: "bento",
          petName: "Bento",
          petImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHWsPLDg9Od1F18lqrNuGwmSFsDaqyCHZsw_Gf6GFiXZcjQAThQNJ-L5DgRk4MpGEOXekCDskN5UgtQQUPnk9QuxzUawHQPFgmyCdBvDxMBpjhtW_bXAbhRSymfmLtV_iqoMWSs77tcdcvu0SsrY5b2NylWh2tiIH54lmCwdPU2iHzV6jfeEuJNm-sIs_i5BIN52-WBe0aUMXqYw041Xwneh5NNEH2a5m4O0l2z2MR_xUMW6lO8ffykVEAh1e87oN27hNHVNllMLs",
          userName: "Marcos Silva",
          date: "14 de Outubro",
          status: "Pendente"
        },
        {
          id: "req-2",
          petId: "luna-dog",
          petName: "Luna",
          petImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvaYqLBSuOnpAJBD1sounhYSXVBk4a7Ob3iCFhyLM60i5J54FqtMzu4wimD9nzlPt3Xanlh3qMQZxRqj3iCDRMW2B_syqGwcuTPVyurTZTxmnlgeM2p-cDl6H3_jTW1aEY0x4QDMXflObZIbKwISUZBCkXQqGLpBM4MUTH-D-qGWhzYuB4iYk9iREJ56fRJUtkBKcZaZUWbXX7Z0x9cjeWU1CNcqIuY0ZAFtBtC-xXMRaV-WCcCGj9KDhbb6UDN4o3Wzs-__9cK0A",
          userName: "Ana Costa",
          date: "13 de Outubro",
          status: "Entrevista"
        }
      ];
      setRequests(defaultRequests);
      localStorage.setItem("adopet_requests", JSON.stringify(defaultRequests));
    }

    setIsLoaded(true);
  }, []);

  const addPet = (newPet) => {
    const updatedPets = [newPet, ...pets];
    setPets(updatedPets);
    localStorage.setItem("adopet_pets", JSON.stringify(updatedPets));
  };

  const toggleFavorite = (petId) => {
    let updatedFavorites;
    if (favorites.includes(petId)) {
      updatedFavorites = favorites.filter((id) => id !== petId);
    } else {
      updatedFavorites = [...favorites, petId];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("adopet_favorites", JSON.stringify(updatedFavorites));
  };

  const addRequest = (petId, petName, petImage, userName = "Adotante Interessado") => {
    const newRequest = {
      id: `req-${Date.now()}`,
      petId,
      petName,
      petImage,
      userName,
      date: new Date().toLocaleDateString("pt-BR", { day: "numeric", month: "long" }),
      status: "Pendente"
    };
    const updatedRequests = [newRequest, ...requests];
    setRequests(updatedRequests);
    localStorage.setItem("adopet_requests", JSON.stringify(updatedRequests));
  };

  const updateRequestStatus = (reqId, newStatus) => {
    const updatedRequests = requests.map((req) => 
      req.id === reqId ? { ...req, status: newStatus } : req
    );
    setRequests(updatedRequests);
    localStorage.setItem("adopet_requests", JSON.stringify(updatedRequests));
  };

  return (
    <AppContext.Provider
      value={{
        pets,
        favorites,
        requests,
        isLoaded,
        addPet,
        toggleFavorite,
        addRequest,
        updateRequestStatus
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
