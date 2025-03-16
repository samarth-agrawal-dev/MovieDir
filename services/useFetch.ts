import { useEffect, useState } from "react";

const useFetch = <T>(fetchFunc : () => Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null)
  
  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await fetchFunc();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occured."))
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (autoFetch) {
      fetchData()
    }
  },[])
  
  return {data,loading,error};
}

export default useFetch;