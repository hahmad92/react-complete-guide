import { useState, useCallback } from "react";
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (reqestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(reqestConfig.url, {
        method: reqestConfig.method ? reqestConfig.method : "GET",
        headers: reqestConfig.headers ? reqestConfig.headers : {},
        body: reqestConfig.body ? JSON.stringify(reqestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
