import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';

class IntroPage1 extends StatelessWidget {
  const IntroPage1({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Color.fromRGBO(158, 161, 247, 1),
      child: Center(
        child: Lottie.network(
            "https://assets6.lottiefiles.com/packages/lf20_0nnf0are/data.json"),
      ),
    );
  }
}
