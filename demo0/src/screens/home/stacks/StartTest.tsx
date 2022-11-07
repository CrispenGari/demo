import { View, Text, Button } from "react-native";
import React from "react";
import { test1 } from "../../../db";
import QuestionCard from "../../../components/QuestionCard";
import { QuestionType } from "../../../types";
import { useDispatch } from "react-redux";
import { setAnswers, setQuestions } from "../../../actions";
import { HomeStackNavProps } from "../../../params";
import { shuffle } from "../../../utils";

const StartTest: React.FC<HomeStackNavProps<"StartTest">> = ({
  navigation,
}) => {
  const shuffledQns = shuffle<QuestionType>(test1.questions);
  const [active, setActive] = React.useState(0);
  const [answer, setAnswer] = React.useState("");
  const [question, setQuestion] = React.useState<QuestionType>(shuffledQns[0]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setQuestion(test1.questions[active]);
    dispatch(setQuestions(test1.questions));
  }, [active]);

  const next = () => {
    dispatch(
      setAnswers({
        questionId: question.id,
        answerId: Number.parseInt(answer),
      })
    );
    if (active === test1.questions.length - 1) {
      navigation.navigate("SeeGrades");
    } else {
      setActive(active + 1);
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <QuestionCard
        answer={answer}
        setAnswer={setAnswer}
        key={question.id}
        question={question}
      />

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Button
          title="PREVIOUS"
          disabled={active === 0}
          onPress={() => setActive(active - 1)}
        />
        <Button
          title={
            active === test1.questions.length - 1 ? "FINISH AND SUBMIT" : "NEXT"
          }
          onPress={next}
        />
      </View>
      {/* <Text> {JSON.stringify(test1, null, 2)}</Text> */}
    </View>
  );
};

export default StartTest;
