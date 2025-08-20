'use client'
import RegistrationForm from "../components/RegistrationForm";

export default function SellSignupPage() {
  return (
    <div>
      <RegistrationForm 
        onClose={() => console.log("Registration form closed")}
        onSwitch={() => console.log("Switch to login")}
      />
    </div>
  );
}
