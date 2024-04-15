import { Text, View } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import React from "react";
import useAuth from "../hooks/useAuth";

export default function Account() {
  const { user } = useAuth();

  return <View>{user ? <UserData /> : <LoginForm />}</View>;
}
