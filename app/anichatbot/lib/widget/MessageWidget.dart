import 'package:anichatbot/model/messageObj.dart';
import 'package:anichatbot/provider/messageProvider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class MessageWidget extends StatelessWidget {
  final Message message;
  const MessageWidget({required this.message, Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) => ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: buildTodo(context),
      );

  Widget buildTodo(BuildContext context) => Container(
        // color: Colors.white,
        padding: EdgeInsets.all(10),
        child: Row(
          children: [
            // Checkbox(
            //   activeColor: Theme.of(context).primaryColor,
            //   checkColor: Colors.white,
            //   value: todo.isDone,
            //   onChanged: (_) {},
            // ),
            // const SizedBox(width: 20),
            //Column(
            //                 crossAxisAlignment: CrossAxisAlignment.start,
            //                 children: [
            //                   // Text(
            //                   //   message.msg,
            //                   //   style: TextStyle(
            //                   //     fontWeight: FontWeight.bold,
            //                   //     color: Theme.of(context).primaryColor,
            //                   //     fontSize: 22,
            //                   //   ),
            //                   // ),
            //                   if (!message.msg.isEmpty)
            //                     ClipRRect(
            //                       borderRadius: BorderRadius.circular(16),
            //                       child: Container(
            //                         color: Colors.greenAccent,
            //                         padding: EdgeInsets.all(20),
            //                         margin: EdgeInsets.only(top: 4),
            //                         child: Text(
            //                           message.msg,
            //                           style: TextStyle(fontSize: 20, height: 1.5),
            //                         ),
            //                       ),
            //                     )
            //                   else
            //                     Container(
            //                       color: Colors.grey,
            //                       padding: EdgeInsets.all(20),
            //                       child: Text("Empty message"),
            //                     )
            //                 ],
            //
            //               )
            if (message.isHuman)
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    // Text(
                    //   message.msg,
                    //   style: TextStyle(
                    //     fontWeight: FontWeight.bold,
                    //     color: Theme.of(context).primaryColor,
                    //     fontSize: 22,
                    //   ),
                    // ),
                    ClipRRect(
                      borderRadius: BorderRadius.only(
                          topLeft: Radius.circular(16),
                          topRight: Radius.circular(16),
                          bottomLeft: Radius.circular(16)),
                      child: Container(
                        color: Color.fromRGBO(227, 164, 102, 1),
                        padding: EdgeInsets.all(12),
                        // margin: EdgeInsets.only(top: 4),
                        child: Text(
                          message.msg,
                          style: TextStyle(
                              fontSize: 18, height: 1, color: Colors.black),
                        ),
                      ),
                    )
                  ],
                ),
              )
            else
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Text(
                    //   message.msg,
                    //   style: TextStyle(
                    //     fontWeight: FontWeight.bold,
                    //     color: Theme.of(context).primaryColor,
                    //     fontSize: 22,
                    //   ),
                    // ),
                    ClipRRect(
                      borderRadius: BorderRadius.only(
                          topLeft: Radius.circular(16),
                          topRight: Radius.circular(16),
                          bottomRight: Radius.circular(16)),
                      child: Container(
                        color: Colors.white,
                        padding: EdgeInsets.all(12),
                        // margin: EdgeInsets.only(top: 4),
                        child: Text(
                          message.msg,
                          style: TextStyle(
                              fontSize: 18, height: 1, color: Colors.black),
                        ),
                      ),
                    )
                  ],
                ),
              ),
          ],
        ),
      );
}
