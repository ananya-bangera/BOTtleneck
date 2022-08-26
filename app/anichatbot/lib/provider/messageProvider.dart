import 'package:anichatbot/ObjectClass/Classes.dart';
import 'package:anichatbot/model/messageObj.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';

class MessageProvider extends ChangeNotifier {
  var user = FirebaseAuth.instance.currentUser;
  // String? userName = FirebaseAuth.instance.currentUser?.displayName.toString();
  List<Message> _msgs = [
    Message(
      createdTime: DateTime.now(),
      msg: 'Hello ' + 'May I help you?',
      id: DateTime.now().toString(),
      isHuman: false,
    ),
  ];
  String disease = '';
  String physicianType = '';
  List<Message> get message => _msgs.toList();
  bool done = false;
  List<Physician> physicians = [];
  int preferableTime = 9;
  // List<Message> get message => _msgs.where((msg) => msg.isDone == false).toList();
  void addMessages(Message msgs) {
    _msgs.add(msgs);
    Future.delayed(const Duration(seconds: 1), () {
      // print('One second has passed.'); // Prints after 1 second.

      if (_msgs.length == 2) {
        _msgs.add(Message(
            createdTime: DateTime.now(),
            msg: "Let's Diagnose the disease\nDo You feel itching?",
            id: DateTime.now().toString()));
      } else if (_msgs.length == 4) {
        _msgs.add(Message(
            createdTime: DateTime.now(),
            msg: "Do you have any skin rashes?",
            id: DateTime.now().toString()));
      } else if (_msgs.length == 6) {
        _msgs.add(Message(
            createdTime: DateTime.now(),
            msg: "Do you sneeze continuously?",
            id: DateTime.now().toString()));
      } else if (_msgs.length == 8) {
        _msgs.add(Message(
            createdTime: DateTime.now(),
            msg: "Do you face chills?",
            id: DateTime.now().toString()));
      } else if (_msgs.length == 10) {
        _msgs.add(Message(
            createdTime: DateTime.now(),
            msg: "Did you have vomiting?",
            id: DateTime.now().toString()));
      } else if (_msgs.length == 12) {
        _msgs.add(Message(
            createdTime: DateTime.now(),
            msg: "Do you have sunken eyes?",
            id: DateTime.now().toString()));
      } else if (_msgs.length == 14) {
        _msgs.add(Message(
            createdTime: DateTime.now(),
            msg: "Do you feel dehydrated?",
            id: DateTime.now().toString()));
      } else if (_msgs.length == 16) {
        _msgs.add(Message(
            createdTime: DateTime.now(),
            msg: "Do you have headache?",
            id: DateTime.now().toString()));
      } else if (_msgs.length == 18) {
        _msgs.add(Message(
            createdTime: DateTime.now(),
            msg: "Do you have a pain in \nyour chest?",
            id: DateTime.now().toString()));
      } else if (!done) {
        print(
            '************************************************${disease.toString()}************************************************************************');

        if (disease.contains('11000000')) {
          physicianType = 'Dermatologist';
        } else if (disease.contains('00110000')) {
          physicianType = 'Allergist';
        } else if (disease.contains('00001110')) {
          physicianType = 'Gastroenterologist';
        } else if (disease.contains('00000001')) {
          physicianType = 'Cardiologist';
        } else {
          physicianType = 'Infectious Disease Physicians';
        }
        _msgs.add(Message(
            createdTime: DateTime.now(),
            msg:
                "You need to consult a ${physicianType}\n Wait Lemme connect you with one.\nEnter your most preferable time[9-24]",
            id: DateTime.now().toString()));

        var users = FirebaseFirestore.instance
            .collection('Physician')
            .doc(physicianType)
            .collection('Names');

        Future<void> getData() async {
          // Get docs from collection reference
          QuerySnapshot querySnapshot = await users.get();

          // Get data from docs and convert map to List
          final allData = querySnapshot.docs;
          print(
              "******************************************************************");
          for (var data in allData) {
            print(data['Name']);
            // data['Name'].toString(),data['Start'],data['End'],data['Name']
            Physician obj = Physician(
                name: data['Name'].toString(),
                startTime: data['Start'],
                endTime: data['End'],
                isAssigned: data['Assigned']);
            physicians.add(obj);
            // print(physicians);
          }
          print(physicians);
          print(
              "******************************************************************");
        }

        getData();
        done = true;
      } else if (done) {
        preferableTime = int.parse(msgs.msg.toString());
        String mesg = '';
        for (var physician in physicians) {
          if (preferableTime >= physician.startTime &&
              preferableTime <= physician.endTime) {
            mesg = mesg +
                'Dr. ${physician.name} \n Available from ${physician.startTime} - ${physician.endTime} \n';
          }
        }
        _msgs.add(Message(
            createdTime: DateTime.now(),
            msg: "${mesg}",
            id: DateTime.now().toString()));
      }
      if ((msgs.msg.contains('yes') || msgs.msg.contains('Yes')) &&
          (_msgs.length > 2)) {
        disease = disease + '1';
      } else if (_msgs.length > 2) {
        disease = disease + '0';
      }

      notifyListeners();
    });
    notifyListeners();
  }
}
