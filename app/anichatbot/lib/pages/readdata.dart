import 'package:anichatbot/ObjectClass/Classes.dart';
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_core/firebase_core.dart';

class ReadData extends StatelessWidget {
  const ReadData({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    List<Physician> physicians = [];
    var users = FirebaseFirestore.instance
        .collection('Physician')
        .doc('Dermatologist')
        .collection('Names');
    var datareq = "";
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

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.green,
        title: Text("geeksforgeeks"),
      ),
      body: Center(
        child: FloatingActionButton(
          backgroundColor: Colors.green,
          child: Icon(Icons.add),
          onPressed: getData,
        ),
      ),
    );
  }
}
