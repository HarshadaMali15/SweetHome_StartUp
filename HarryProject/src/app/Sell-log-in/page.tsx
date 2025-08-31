'use client'
import LoginForm from "../components/LoginForm";

export default function SellLoginPage() {
  return (
    <div>

      
      <LoginForm 
      onClose={() => console.log("Login form closed")}
        onSwitch={() => console.log("Switch to signup")}
      />

    </div>
  );
}
