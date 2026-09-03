import { useState, useEffect } from 'react';
import { dataService } from '../lib/supabaseClient';

export function useProjects(sector = null) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        setLoading(true);
        const data = await dataService.getProjects(sector);
        if (isMounted) {
          setProjects(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message || 'Failed to load projects');
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();
    return () => { isMounted = false; };
  }, [sector]);

  return { projects, loading, error };
}

export function useProject(slug) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        setLoading(true);
        const data = await dataService.getProjectBySlug(slug);
        if (isMounted) {
          setProject(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message || 'Failed to load project details');
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    if (slug) load();
    return () => { isMounted = false; };
  }, [slug]);

  return { project, loading, error };
}
