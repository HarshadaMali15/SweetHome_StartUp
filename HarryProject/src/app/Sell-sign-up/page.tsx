'use client'
import RegistrationForm from "../components/RegistrationForm";

export default function SellSignupPage() {
  return (
    <div>
<<<<<<< HEAD
      <RegistrationForm  />
=======
      <RegistrationForm 
        onClose={() => console.log("Registration form closed")}
        onSwitch={() => console.log("Switch to login")}
      />
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
    </div>
  );
}
