import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { QuestionType } from "../../types";
import { RadioButton } from "react-native-paper";
import { FONTS } from "../../constants";
interface Props {
  question: QuestionType;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  answer: string;
}
const QuestionCard: React.FC<Props> = ({ question, setAnswer, answer }) => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "cornflowerblue",
        margin: 10,
        borderRadius: 5,
      }}
    >
      <Text style={{ fontFamily: FONTS.regularBold }}>{question.question}</Text>
      {question.diagram && (
        <Image
          source={{
            uri: question.diagram,
          }}
          style={{
            width: 200,
            height: 200,
            marginVertical: 10,
            alignSelf: "center",
          }}
        />
      )}
      <RadioButton.Group onValueChange={(v) => setAnswer(v)} value={answer}>
        {question.answers.map((answer) => (
          <View
            key={answer.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                marginRight: 5,
                borderRadius: 30,
              }}
            >
              <RadioButton value={answer.id as any} />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: FONTS.regular,
              }}
            >
              {answer.text}
            </Text>
          </View>
        ))}
      </RadioButton.Group>
    </View>
  );
};

export default QuestionCard;
