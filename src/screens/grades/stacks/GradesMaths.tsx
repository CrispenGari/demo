import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { GradesStackNavProps } from "../../../params";
import { FONTS } from "../../../constants";
import { DataTable } from "react-native-paper";

const quizMarks = Array(5)
  .fill(8)
  .map((_, i) => ({
    title: "Quiz " + (i + 1),
    total: 10,
    mark: 7,
    pass: true,
  }));
const examMarks = Array(3)
  .fill(8)
  .map((_, i) => ({
    title: "Exam " + (i + 1),
    total: 100,
    mark: 78,
    pass: true,
  }));

const testMarks = Array(8)
  .fill(8)
  .map((_, i) => ({
    title: "Test " + (i + 1),
    total: 15,
    mark: 11,
    pass: true,
  }));

const GradesMaths: React.FC<GradesStackNavProps<"GradesMaths">> = ({
  navigation,
}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAllowFontScaling: true,
      title: "MATHEMATICS GRADES",
      headerTitleStyle: {
        fontFamily: FONTS.regularBold,
        textTransform: "uppercase",
      },
      headerLeft: () => (
        <TouchableOpacity
          style={{
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color="cornflowerblue"
          />
          <Text
            style={{
              fontSize: 18,
              fontFamily: FONTS.regularBold,
              marginLeft: 5,
              color: "cornflowerblue",
            }}
          >
            GRADES
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <ScrollView style={{ padding: 10, backgroundColor: "white" }}>
      <Text
        style={{
          fontFamily: FONTS.regularBold,
          fontSize: 20,
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        Maths Quiz
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Quiz #</DataTable.Title>
          <DataTable.Title numeric>Total</DataTable.Title>
          <DataTable.Title numeric>Mark</DataTable.Title>
          <DataTable.Title numeric>Pass/Fail</DataTable.Title>
        </DataTable.Header>
        {quizMarks.map((mark) => (
          <DataTable.Row key={mark.title}>
            <DataTable.Cell>{mark.title}</DataTable.Cell>
            <DataTable.Cell numeric>{mark.total}</DataTable.Cell>
            <DataTable.Cell numeric>{mark.mark}</DataTable.Cell>
            <DataTable.Cell numeric>
              {mark.pass ? "pass" : "fail"}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
      {/* <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={(page) => setPage(page)}
          label="1-2 of 6"
          optionsPerPage={optionsPerPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={"Rows per page"}
        />
       */}

      <Text
        style={{
          fontFamily: FONTS.regularBold,
          fontSize: 20,
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        Maths Tests
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Test #</DataTable.Title>
          <DataTable.Title numeric>Total</DataTable.Title>
          <DataTable.Title numeric>Mark</DataTable.Title>
          <DataTable.Title numeric>Pass/Fail</DataTable.Title>
        </DataTable.Header>
        {testMarks.map((mark) => (
          <DataTable.Row key={mark.title}>
            <DataTable.Cell>{mark.title}</DataTable.Cell>
            <DataTable.Cell numeric>{mark.total}</DataTable.Cell>
            <DataTable.Cell numeric>{mark.mark}</DataTable.Cell>
            <DataTable.Cell numeric>
              {mark.pass ? "pass" : "fail"}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>

      <Text
        style={{
          fontFamily: FONTS.regularBold,
          fontSize: 20,
          textAlign: "center",
          marginVertical: 10,
        }}
      >
        Math Exam(s)
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Exam #</DataTable.Title>
          <DataTable.Title numeric>Total</DataTable.Title>
          <DataTable.Title numeric>Mark</DataTable.Title>
          <DataTable.Title numeric>Pass/Fail</DataTable.Title>
        </DataTable.Header>
        {examMarks.map((mark) => (
          <DataTable.Row key={mark.title}>
            <DataTable.Cell>{mark.title}</DataTable.Cell>
            <DataTable.Cell numeric>{mark.total}</DataTable.Cell>
            <DataTable.Cell numeric>{mark.mark}</DataTable.Cell>
            <DataTable.Cell numeric>
              {mark.pass ? "pass" : "fail"}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
      <Text
        style={{
          color: "gray",
          textAlign: "center",
          paddingVertical: 10,
        }}
      >
        Note that these are the records of your last attempts.
      </Text>
      <View style={{ height: 150 }} />
    </ScrollView>
  );
};

export default GradesMaths;
