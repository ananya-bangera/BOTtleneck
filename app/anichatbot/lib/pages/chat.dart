import 'package:anichatbot/auth.dart';
import 'package:anichatbot/widget/addMessage.dart';
import 'package:anichatbot/pages/chatting.dart';
import 'package:anichatbot/widget/messageList.dart';
import 'package:anichatbot/pages/readdata.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_core/firebase_core.dart';

class Chat extends StatefulWidget {
  const Chat({Key? key}) : super(key: key);

  @override
  State<Chat> createState() => _ChatState();
}

class _ChatState extends State<Chat> {
  int selectedIndex = 0;
  @override
  Widget build(BuildContext context) {
    final tabs = [
      MessageListManager(),
      Container(),
    ];
    return Scaffold(
      appBar: AppBar(
        title: Text("BOTtleneck"),
        backgroundColor: Color.fromRGBO(130, 179, 229, 1),
        actions: [
          IconButton(
            onPressed: () {
              logout(context);
            },
            icon: Icon(Icons.logout),
          )
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: Color.fromRGBO(130, 179, 229, 1),
        unselectedItemColor: Colors.white.withOpacity(0.7),
        selectedItemColor: Colors.white,
        currentIndex: selectedIndex,
        onTap: (index) => setState(() {
          selectedIndex = index;
        }),
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.local_hospital),
            label: 'Hospital',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.food_bank, size: 28),
            label: 'Hotel',
          ),
        ],
      ),
      body: tabs[selectedIndex],
      floatingActionButton: FloatingActionButton(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
        ),
        backgroundColor: Color.fromRGBO(130, 179, 229, 1),
        onPressed: () => showDialog(
          context: context,
          builder: (context) => AddMessage(),
          barrierDismissible: false,
        ),
        child: Icon(Icons.send),
      ),
    );
  }

  Future<void> logout(BuildContext context) async {
    await FirebaseAuth.instance.signOut();
    Navigator.of(context)
        .pushReplacement(MaterialPageRoute(builder: (context) => SignInPage()));
  }
}
