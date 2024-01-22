import { Text, View } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import React from "react";

export default function Account() {
  const auth = null;

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
