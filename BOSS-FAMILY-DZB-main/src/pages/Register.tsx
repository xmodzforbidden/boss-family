import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { KEYAUTH_CONFIG, KEYAUTH_API, generateSessionId } from "@/config/keyauth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const sessionId = generateSessionId();
      const response = await fetch(`${KEYAUTH_API.register}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          type: 'register',
          username,
          pass: password,
          key,
          name: KEYAUTH_CONFIG.appName,
          ownerid: KEYAUTH_CONFIG.ownerId,
          sessionid: sessionId,
        }).toString()
      });

      const data = await response.json();

      if (data.success) {
        // Store the session ID for future requests
        localStorage.setItem('sessionId', sessionId);
        toast({
          title: "Success",
          description: "Registration successful!",
        });
        navigate("/login");
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: data.message || "Registration failed. Please check your credentials and key.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred during registration.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass p-8 w-full max-w-md space-y-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-center">Register</h1>
        
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm">Username</label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm">Password</label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="key" className="text-sm">License Key</label>
            <Input
              id="key"
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Enter your license key"
              className="w-full"
              required
            />
          </div>

          <Button 
            type="submit"
            className="w-full hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            Register
          </Button>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-400">Already have an account? </span>
            <Button 
              variant="link" 
              className="text-sm p-0 hover:text-blue-400"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;