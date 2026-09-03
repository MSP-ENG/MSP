import { useState, useEffect } from 'react';
import { dataService } from '../lib/supabaseClient';

export function useServices(categorySlug = null) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        setLoading(true);
        const data = await dataService.getServices(categorySlug);
        if (isMounted) {
          setServices(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message || 'Failed to load services');
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();
    return () => { isMounted = false; };
  }, [categorySlug]);

  return { services, loading, error };
}
