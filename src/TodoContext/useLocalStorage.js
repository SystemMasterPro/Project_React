import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodosItem = localStorage.getItem(itemName);
        let parseItems;

        if (!localStorageTodosItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItems = initialValue;
        } else {
          parseItems = JSON.parse(localStorageTodosItem);
        }
        setItem(parseItems);
        setLoading(false);
      } catch (error) {
        setError(error)
      }
    }, 2000);
  })

// GUARDAR DATA EN LOCALSTORAGE
  const saveItem = (newItem) => {
    try {
        const stringStorageItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringStorageItem);
        setItem(newItem);
    } catch (error) {
        setError(error);
    }
  }

  React.useEffect(() => {
    console.log('AQUI ES EL HOOK');
  }, [])

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };