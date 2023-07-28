import { useState, useCallback } from "react";

const useHttp = () => {
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        Headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      applyData(data);
    } catch (error) {
      setError(error);
    }
  }, []);

  return {
    sendRequest,
  };
};

export default useHttp;
