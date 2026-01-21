<h2 align="center">
  <a href="http://camicroscope.org/"><img src="https://avatars2.githubusercontent.com/u/12075069?s=400&v=4" style="background-color:rgba(0,0,0,0);" height=230 alt="camicroscope: a web-based image viewer optimized for large bio-medical image data viewing"></a>
</h2>

caMicroscope is a web-based biomedical image and data viewer, with a strong emphasis on cancer pathology WSI (Whole Slide Imaging).
This guide has sections for different kinds of use of the platform. [Host Locally](#host-locally) covers how to set up caMicroscope locally. [Developer Guide](#developer-guide) covers the broad strokes on how to add new functionality to caMicroscope.

# Other Resources
- **Slack:** <http://bit.ly/camicroscope>
- **Discussion mailing list:** <https://groups.google.com/g/camicroscope>

# Developer Guide
caMicroscope is open source software. Any involvement and contribution with the caMicroscope project is greatly appreciated. Feel free to get directly involved in any of the repositories in the caMicroscope organization. New developers may find the notes in [CONTRIBUTING](https://github.com/camicroscope/caMicroscope/blob/master/CONTRIBUTING.md) helpful to start contributing to caMicroscope.

## Host Locally
Follow these steps to host this locally:
- Clone [this](https://github.com/camicroscope/camicroscope.github.io) repository.
- Open the clone folder in any text editor.
- You need to create a local server to view your HTML, CSS, and JS files.
```
- You can use a tool like Live Server for this purpose.
- Open your text editor's terminal or command prompt.
- Navigate to your project directory.
- Install Live Server by running the command: npm install -g live-server.
- If using VSCode, click on the extensions option available on the left side and install live server extension.
- Run Live Server by typing live-server in the terminal.
```
- Once you've started the local server, you can view the project in your web browser by going to http://localhost:8080/ or any other port specified by the Live Server.

That's it! You should now be able to see your project locally.
