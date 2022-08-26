import 'package:anichatbot/onBoardingScreen.dart';
import 'package:anichatbot/provider/messageProvider.dart';
// import 'package:anichatbot/pages/chat.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'ObjectClass/Classes.dart';

class MainChat extends StatelessWidget {
  const MainChat({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => MessageProvider(),
      builder: (context, child) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          title: "BOTtleneck",
          themeMode: ThemeMode.system,
          theme: ThemeClass.lightTheme,
          darkTheme: ThemeClass.darkTheme,
          // theme: ThemeData(
          //   primarySwatch: Colors.pink,
          //   scaffoldBackgroundColor: Color(0xFFf6f5ee),
          // ),
          home: onBoardingScreen(),
        );
      },
    );
  }
}
