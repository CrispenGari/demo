import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../../types";
const isArray = (l: any) => l[0] === undefined;
const SeeGrades = () => {
  const answers = useSelector((state: StateType) => state.answers);
  const questions = useSelector((state: StateType) => state.questions);
  //   console.log(answers);

  return (
    <ScrollView>
      <Text></Text>
    </ScrollView>
  );
};

export default SeeGrades;

const styles = StyleSheet.create({});
