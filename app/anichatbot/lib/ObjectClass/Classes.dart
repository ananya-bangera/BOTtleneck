import 'package:flutter/material.dart';

class ThemeClass {
  static ThemeData lightTheme = ThemeData(
      scaffoldBackgroundColor: Colors.white,
      colorScheme: ColorScheme.light(),
      appBarTheme: AppBarTheme(
        backgroundColor: Color.fromRGBO(130, 179, 229, 1),
      ));

  static ThemeData darkTheme = ThemeData(
      scaffoldBackgroundColor: Color.fromRGBO(117, 115, 117, 1),
      colorScheme: ColorScheme.dark(),
      appBarTheme: AppBarTheme(
        backgroundColor: Color.fromRGBO(130, 179, 229, 1),
      ));
}

class Physician {
  String name;
  int startTime;
  int endTime;
  bool isAssigned;
  Physician(
      {required this.name,
      required this.startTime,
      required this.endTime,
      required this.isAssigned});
}
