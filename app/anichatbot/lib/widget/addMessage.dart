import 'package:anichatbot/model/messageObj.dart';
import 'package:anichatbot/provider/messageProvider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'messageFormWidget.dart';

class AddMessage extends StatefulWidget {
  const AddMessage({Key? key}) : super(key: key);

  @override
  State<AddMessage> createState() => _AddMessageState();
}

class _AddMessageState extends State<AddMessage> {
  final _formKey = GlobalKey<FormState>();

  String message = '';
  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      content: Form(
        key: _formKey,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'BOTtleneck',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 22,
              ),
            ),
            const SizedBox(height: 8),
            MessageFormWidget(
              onChangedMsg: (message) => setState(() => this.message = message),
              // onChangedDescription: (description) =>
              //     setState(() => this.description = description),
              onSavedTodo: addMsg,
            ),
          ],
        ),
      ),
    );
  }

  void addMsg() {
    final msgs = Message(
      id: DateTime.now().toString(),
      msg: message,
      createdTime: DateTime.now(),
      isHuman: true,
    );
    final provider = Provider.of<MessageProvider>(context, listen: false);
    provider.addMessages(msgs);

    Navigator.of(context).pop();
  }
}
