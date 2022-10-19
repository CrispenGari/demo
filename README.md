### Demo

Testing code base for:

```shell
"ios" | "android" | "windows" | "macos" | "web"
```

```shell
expo start --tunnel
```

### Tech Used

0. TypeScript
   - react native with CBC & FBC
1. Redux and React Redux
2. React Native Navigation
3. SQLite3
4. React Native Paper
5. Expo SDK
   - expo-font

### Tabs and Screens

1. Home Tab

   - Landing Screen
     - all the STEM Subjects listed when the student clicks, then we navigate to the dashboard of the selected subject
     - Each Subject will have the following:
       - Notes for the subject where.
         - For every subject the notes will have chapters listed for a specific subject.
         - After Every chapter we will have quiz and tests.
       - Exam and Tests

2. Grade Tab

   - Landing Screen
     - all the STEM Subjects listed when the student clicks, then we navigate to grades based on the from previous practices, exam quiz and tests.

3. Settings Tab

   - Themes setting
   - Font settings
   - Brightness while reading Fonts

4. Notification
   - List of notification such as reminder, todo targets and due dates.
