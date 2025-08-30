'use client'
import LoginForm from "../components/LoginForm";

export default function SellLoginPage() {
  return (
    <div>
<<<<<<< HEAD
      <LoginForm />
=======
      <LoginForm 
      onClose={() => console.log("Login form closed")}
        onSwitch={() => console.log("Switch to signup")}
      />
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
    </div>
  );
}
