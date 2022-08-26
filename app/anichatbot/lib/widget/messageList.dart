import 'package:anichatbot/widget/MessageWidget.dart';
import 'package:anichatbot/model/messageObj.dart';
import 'package:anichatbot/widget/messageFormWidget.dart';
import 'package:anichatbot/provider/messageProvider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
// import '';

class MessageListManager extends StatelessWidget {
  const MessageListManager({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final provider = Provider.of<MessageProvider>(context);
    final msgs = provider.message;

    return msgs.isEmpty
        ? Center(
            child: Text(
              'No todos.',
              style: TextStyle(fontSize: 10),
            ),
          )
        : ListView.separated(
            reverse: true,
            physics: BouncingScrollPhysics(),
            padding: EdgeInsets.all(4),
            separatorBuilder: (context, index) => Container(height: 2),
            itemCount: msgs.length,
            itemBuilder: (context, index) {
              final reversedIndex = msgs.length - 1 - index;
              final msgChat = msgs[reversedIndex];
              // return MyWidget(item);
              if (reversedIndex == msgs.length - 1) {
                return Column(
                  children: [
                    MessageWidget(message: msgChat),
                    SizedBox(
                      height: 63,
                    )
                  ],
                );
              }
              return MessageWidget(message: msgChat);
            },
          );
  }
}
