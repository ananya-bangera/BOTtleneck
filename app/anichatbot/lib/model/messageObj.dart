import 'package:flutter/cupertino.dart';

class MessageField {
  static const createdTime = 'createdTime';
}

class Message {
  DateTime createdTime;
  String msg;
  String id;
  bool isHuman;

  Message({
    required this.createdTime,
    this.msg = '',
    required this.id,
    this.isHuman = false,
  });
}
