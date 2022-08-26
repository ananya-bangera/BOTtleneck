import 'package:flutter/material.dart';

class MessageFormWidget extends StatelessWidget {
  final String message;
  final ValueChanged<String> onChangedMsg;
  final VoidCallback onSavedTodo;
  const MessageFormWidget(
      {Key? key,
      this.message = '',
      required this.onChangedMsg,
      required this.onSavedTodo})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            SizedBox(height: 8),
            buildMessage(),
            SizedBox(height: 32),
            buildButton(),
          ],
        ),
      );

  Widget buildMessage() => TextFormField(
        maxLines: 10,
        initialValue: message,
        onChanged: onChangedMsg,
        decoration: InputDecoration(
          border: UnderlineInputBorder(),
          labelText: 'Message',
        ),
      );

  Widget buildButton() => SizedBox(
        width: double.infinity,
        child: ElevatedButton(
          style: ButtonStyle(
            backgroundColor:
                MaterialStateProperty.all(Color.fromRGBO(130, 179, 229, 1)),
          ),
          onPressed: onSavedTodo,
          child: Text('Send'),
        ),
      );
}
