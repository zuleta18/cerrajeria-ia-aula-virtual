import React, { useState } from 'react';
import { useStorage } from './hooks/useStorage';
import { Login } from './components/Login';
import { Onboarding } from './components/Onboarding';
import { StudentDashboard } from './components/StudentDashboard';
import { InstructorDashboard } from './components/InstructorDashboard';
import { Lesson } from './components/Lesson';
import { courseData } from './data/courseData';
import { OnboardingData } from './types';

export default function App() {
  const { users, currentUser, loginUser, logoutUser, updateUser } = useStorage();
  
  // Navigation state for Student
  const [currentUnitId, setCurrentUnitId] = useState<string | null>(null);
  const [forceStudentView, setForceStudentView] = useState(false);

  if (!currentUser) {
    return <Login onLogin={loginUser} />;
  }

  const isInstructor = currentUser.role === 'instructor';

  if (isInstructor && !forceStudentView) {
    return <InstructorDashboard 
        users={users} 
        onLogout={logoutUser} 
        onSwitchView={() => setForceStudentView(true)}
    />;
  }

  // Student flow:
  // 1. Onboarding check
  if (!currentUser.onboardingData) {
    const handleOnboardingComplete = (data: OnboardingData) => {
      updateUser({ ...currentUser, onboardingData: data });
    };
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  // 2. Unit view
  if (currentUnitId) {
    const unit = courseData.find(u => u.id === currentUnitId);
    if (!unit) {
      setCurrentUnitId(null);
      return null;
    }

    const handleLessonComplete = (unitId: string) => {
      if (!currentUser.progress.includes(unitId)) {
        updateUser({
          ...currentUser,
          progress: [...currentUser.progress, unitId]
        });
      }
    };

    return (
      <Lesson 
        unit={unit} 
        user={currentUser} 
        onBack={() => setCurrentUnitId(null)}
        onComplete={handleLessonComplete}
      />
    );
  }

  // 3. Dashboard
  return (
    <StudentDashboard 
      user={currentUser} 
      onSelectUnit={setCurrentUnitId} 
      onLogout={logoutUser} 
      isInstructor={isInstructor}
      onSwitchView={() => setForceStudentView(false)}
    />
  );
}
