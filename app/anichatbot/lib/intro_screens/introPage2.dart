import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';

class IntroPage2 extends StatelessWidget {
  const IntroPage2({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.grey,
      child: Center(
          child: Lottie.network(
              "https://assets10.lottiefiles.com/packages/lf20_zwwwgco2.json")),
    );
  }
}
