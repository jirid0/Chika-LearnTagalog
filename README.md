# Chika-LearnTagalog

Download instructions:
1. Go to code tab and download as ZIP.
2. Open the folder into a code editor, preferebly VS Code. 
3. In VS code open the terminal and use "npm start"
4. From there you can access the app and such.

Terminal Commands:
expo init "projectname" -> makes new project
code . -> opens editor for project

VS Code Commands:
npm start -> opens browser for metro bundler, runs on simulators, publishing etc.

To Debug in vscode:
Open developer menu, start remote debugging, change vscode port to debugger port in 
settings, use debug panel and run a debug.

APIs:
Core components are cross platform, syncs with platform.
APIs give access to native functions.

UI:
Build UI using built-in components


Components:
https://reactnative.dev/

Styles:
Flex - determines flexibility, stretches views
SafeAreaView - makes sure things are not blocked by nothces in iPhone

Container:
To put things in center of container :
justifyContent: "center",
alignItems: "center",

Texts:
Always wrap text with <Text>
numberOfLines - determines number of lines for text to be displayed
onPress={()=> console.log("Text clicked"). Makes text pressable

Functions:
To make a function, use const and preface function name w/ handle
() => - Handle function

VS Code Hotkeys:
ctrl+d - edits all of highlighted text

Images: 
Found in assets folder.
Use static images, otherwise download images from internet.
Loading images in assets - <Image source={require('./assets/splash.png')} />
require function returns number that is a reference to our image.
Loading images with url: <Image source={{uri : "https://picsum.photos/200/300"}} />
Must specify photo size.

Buttons:
Making a custom button - 
      <Button 
        color = "orange"
        title= "Click Me" 
        onPress={() => Alert.alert("my title","my message",[
          {text: "Yes", onPress: () => console.log("Yes")},
          {text : "no", onPress:() => console.log("No")}
        ])}/>


    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={bPressed}>
        press to see qt
      </Text>
      <TouchableHighlight onPress={() => console.log("Text pressed")}>
        <Image 
        blurRadius={blueVar}
        source={{
          width: 166,
          height: 328,
          uri : "https://cdn.discordapp.com/attachments/211732249832325121/955638516312862720/deez.PNG"
          }} />
      </TouchableHighlight>
    </SafeAreaView>
