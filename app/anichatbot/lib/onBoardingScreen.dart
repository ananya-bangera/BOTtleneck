import 'package:anichatbot/intro_screens/introPage1.dart';
import 'package:anichatbot/intro_screens/introPage2.dart';
import 'package:anichatbot/intro_screens/introPage3.dart';
import 'package:anichatbot/registration.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';

class onBoardingScreen extends StatefulWidget {
  const onBoardingScreen({Key? key}) : super(key: key);

  @override
  State<onBoardingScreen> createState() => _onBoardingScreenState();
}

class _onBoardingScreenState extends State<onBoardingScreen> {
  PageController _controller = PageController();
  bool onLastPage = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Stack(
      children: [
        PageView(
          controller: _controller,
          onPageChanged: (index) {
            setState(() {
              onLastPage = (index == 2) ? true : false;
            });
          },
          children: [IntroPage1(), IntroPage2(), IntroPage3()],
        ),
        Container(
            alignment: Alignment(0, 0.75),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                GestureDetector(
                    onTap: () {
                      _controller.jumpToPage(2);
                    },
                    child: Text(
                      "skip",
                      style: TextStyle(color: Colors.black),
                    )),
                SmoothPageIndicator(controller: _controller, count: 3),
                GestureDetector(
                    onTap: onLastPage
                        ? (() {
                            Navigator.push(context,
                                MaterialPageRoute(builder: (context) {
                              return RegisterationScreen();
                            }));
                          })
                        : (() {
                            _controller.nextPage(
                                duration: Duration(milliseconds: 500),
                                curve: Curves.easeIn);
                          }),
                    child: onLastPage
                        ? Text("done", style: TextStyle(color: Colors.black))
                        : Text("next", style: TextStyle(color: Colors.black)))
              ],
            ))
      ],
    ));
  }
}
