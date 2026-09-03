import { useState, useEffect } from 'react';
import { dataService } from '../lib/supabaseClient';

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        setLoading(true);
        const data = await dataService.getTestimonials();
        if (isMounted) {
          setTestimonials(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message || 'Failed to load testimonials');
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();
    return () => { isMounted = false; };
  }, []);

  return { testimonials, loading, error };
}

export function useTeam() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        setLoading(true);
        const data = await dataService.getTeamMembers();
        if (isMounted) {
          setTeam(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message || 'Failed to load team members');
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();
    return () => { isMounted = false; };
  }, []);

  return { team, loading, error };
}
