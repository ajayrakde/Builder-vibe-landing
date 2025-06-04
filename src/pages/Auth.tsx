import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, CloudSun } from "lucide-react";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login:", loginData);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Register:", registerData);
  };

  const handleSocialLogin = (provider: string) => {
    // Handle social login
    console.log(`Login with ${provider}`);
  };

  return (
    <Fragment>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100">
        <Header />

        <main className="flex-grow flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <CloudSun className="h-8 w-8 text-[#1a5de6]" />
                <span className="font-quicksand text-[#1a5de6] font-bold text-2xl">
                  Kanhaa
                </span>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 font-quicksand">
                Welcome to Kanhaa
              </h1>
              <p className="text-slate-600 font-quicksand">
                Your trusted partner in baby nutrition
              </p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login" className="font-quicksand">
                  Sign In
                </TabsTrigger>
                <TabsTrigger value="register" className="font-quicksand">
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-quicksand">Sign In</CardTitle>
                    <CardDescription className="font-quicksand">
                      Enter your email and password to access your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-quicksand">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={loginData.email}
                          onChange={(e) =>
                            setLoginData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          required
                          className="font-quicksand"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password" className="font-quicksand">
                          Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={loginData.password}
                            onChange={(e) =>
                              setLoginData((prev) => ({
                                ...prev,
                                password: e.target.value,
                              }))
                            }
                            required
                            className="pr-10 font-quicksand"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                      <Button type="submit" className="w-full font-quicksand">
                        Sign In
                      </Button>
                    </form>

                    <div className="text-center">
                      <Link
                        to="/forgot-password"
                        className="text-sm text-[#1a5de6] hover:underline font-quicksand"
                      >
                        Forgot your password?
                      </Link>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full font-quicksand"
                        onClick={() => handleSocialLogin("google")}
                      >
                        Continue with Google
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full font-quicksand"
                        onClick={() => handleSocialLogin("facebook")}
                      >
                        Continue with Facebook
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full font-quicksand"
                        onClick={() => handleSocialLogin("phone")}
                      >
                        Continue with Phone
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="register">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-quicksand">
                      Create Account
                    </CardTitle>
                    <CardDescription className="font-quicksand">
                      Join Kanhaa to start your baby's nutrition journey
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-quicksand">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          value={registerData.name}
                          onChange={(e) =>
                            setRegisterData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          required
                          className="font-quicksand"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="register-email"
                          className="font-quicksand"
                        >
                          Email
                        </Label>
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="your@email.com"
                          value={registerData.email}
                          onChange={(e) =>
                            setRegisterData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          required
                          className="font-quicksand"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-quicksand">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 9876543210"
                          value={registerData.phone}
                          onChange={(e) =>
                            setRegisterData((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          required
                          className="font-quicksand"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="register-password"
                          className="font-quicksand"
                        >
                          Password
                        </Label>
                        <Input
                          id="register-password"
                          type="password"
                          placeholder="Create a password"
                          value={registerData.password}
                          onChange={(e) =>
                            setRegisterData((prev) => ({
                              ...prev,
                              password: e.target.value,
                            }))
                          }
                          required
                          className="font-quicksand"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="confirm-password"
                          className="font-quicksand"
                        >
                          Confirm Password
                        </Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="Confirm your password"
                          value={registerData.confirmPassword}
                          onChange={(e) =>
                            setRegisterData((prev) => ({
                              ...prev,
                              confirmPassword: e.target.value,
                            }))
                          }
                          required
                          className="font-quicksand"
                        />
                      </div>
                      <Button type="submit" className="w-full font-quicksand">
                        Create Account
                      </Button>
                    </form>

                    <Separator />

                    <div className="space-y-2">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full font-quicksand"
                        onClick={() => handleSocialLogin("google")}
                      >
                        Sign up with Google
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full font-quicksand"
                        onClick={() => handleSocialLogin("facebook")}
                      >
                        Sign up with Facebook
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Auth;
