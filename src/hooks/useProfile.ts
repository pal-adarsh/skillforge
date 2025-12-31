import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

interface ProfileData {
  id?: string;
  user_id?: string;
  full_name: string;
  phone: string;
  date_of_birth: string;
  created_at?: string;
  updated_at?: string;
}

export const useProfile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch profile data
  const fetchProfile = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching profile:', error);
        return;
      }

      if (data) {
        setProfile(data);
      } else {
        // Create initial profile if it doesn't exist
        const initialProfile = {
          user_id: user.id,
          full_name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'User',
          phone: '',
          date_of_birth: ''
        };

        const { data: newProfile, error: createError } = await supabase
          .from('profiles')
          .insert(initialProfile)
          .select()
          .single();

        if (createError) {
          console.error('Error creating profile:', createError);
        } else {
          setProfile(newProfile);
        }
      }
    } catch (error) {
      console.error('Error in fetchProfile:', error);
    } finally {
      setLoading(false);
    }
  };

  // Update profile data
  const updateProfile = async (updates: Partial<ProfileData>) => {
    if (!user || !profile) return false;

    setSaving(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) {
        console.error('Error updating profile:', error);
        toast({
          title: "Error",
          description: "Failed to update profile. Changes saved locally.",
          variant: "destructive",
        });
        return false;
      }

      setProfile(data);
      
      // Also save to localStorage as backup
      localStorage.setItem('userProfile', JSON.stringify(data));
      
      toast({
        title: "Success",
        description: "Profile updated successfully!",
      });
      
      return true;
    } catch (error) {
      console.error('Error in updateProfile:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
      return false;
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchProfile();
    } else {
      setProfile(null);
      setLoading(false);
    }
  }, [user]);

  return {
    profile,
    loading,
    saving,
    updateProfile,
    refetch: fetchProfile
  };
};