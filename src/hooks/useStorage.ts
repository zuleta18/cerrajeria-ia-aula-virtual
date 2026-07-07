import { useState, useEffect } from 'react';
import { User } from '../types';

const USERS_KEY = 'cerrajeria_users';
const CURRENT_USER_KEY = 'cerrajeria_current_user';

export function useStorage() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Load purely from localstorage on mount
  useEffect(() => {
    try {
      const storedUsers = localStorage.getItem(USERS_KEY);
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      }
      const storedCurrentUser = localStorage.getItem(CURRENT_USER_KEY);
      if (storedCurrentUser) {
        setCurrentUser(JSON.parse(storedCurrentUser));
      }
    } catch (error) {
      console.error("Error reading localStorage", error);
    }
  }, []);

  const saveUsers = (newUsers: User[]) => {
    setUsers(newUsers);
    localStorage.setItem(USERS_KEY, JSON.stringify(newUsers));
  };

  const loginUser = (email: string, name: string) => {
    let existingUsers = [...users];
    let user = existingUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (!user) {
      user = {
        id: email.toLowerCase(),
        email: email.toLowerCase(),
        name,
        role: email.toLowerCase() === (import.meta.env.VITE_INSTRUCTOR_EMAIL || '').toLowerCase() ? 'instructor' : 'student',
        progress: []
      };
      existingUsers.push(user);
      saveUsers(existingUsers);
    }
    
    setCurrentUser(user);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    return user;
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  const updateUser = (updatedUser: User) => {
    setCurrentUser(updatedUser);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedUser));
    
    const newUsers = users.map(u => u.id === updatedUser.id ? updatedUser : u);
    saveUsers(newUsers);
  };

  return {
    users,
    currentUser,
    loginUser,
    logoutUser,
    updateUser
  };
}
