# Hello #FutureShaper
# video_ass
We are glad that you are interested to tackle this challenge.


## The objective:
The goal is to develop a basic media server application that exercises some fundamentals of multimedia over network. The project targets and focuses on creating the server side, not the client. It is not necessary to develop a client application. There are no constraints to choose the client software other than being able to connect to the server, obtain and reproduce the multimedia content.

The streaming server will deliver multimedia content. It will support:
- Video: H264 and VP (9, 10 or 12).
- Audio: AAC and MP3.
- Content container: MPEG.

## Stages
- Phase 1:
The content is a low-quality video with audio and locally stored.
The server guarantees content delivery to one client.
The server will feature two streaming protocols: RTP and HLS. The protocol to be used must be set (at runtime, compilation time, etc.) before starting to stream.
- Phase 2:
Stress the media server developed during Phase 1, by connecting too many client instances. At least for one of the two supported streaming protocols.
Solve the stress situation. Add the capability of supporting the same amount of client connections which stressed the server previously.
- Phase 3:
Add Live Streaming support. No longer deliver the video stored in the server. Instead, take camera video feed as video and audio input to the server.
Choose either RTP or HLS to implement this third phase functionality.


## Minimum requirements:
- The development must be incremental. Each of the described phases will be implemented, tested and evaluated to continue to next phase.
- The developer is free to choose the IDE and technologies used for this project. Developer is accountable of every single line of code.


## What we expect from you:
-    The task is simple, now is the time for you to shine and go the extra mile! Be sure to show your capabilities, if you got a great idea be sure to implement it…. Think big and make it happen.
-    We know that you may forget the way to implement certain functionalities, you can use code snippets as necessary, however, be sure to NOT PLAGIARIZE a whole solution.
-    Feel at home and use the libraries and extensions that you need. Just be sure to document and declare the dependencies needed to be used in other machines to be evaluated.



## How to submit your answer
- Create a fork with the next format: NameLastnameRole, Ie: JhonSmithSeAdv
-    Commit as much as you want, remember to show good practices.
-    Once you got the final commit, push it with title “Final Commit” and request a PR

