import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import * as firebase from 'firebase';
import firebase from '../../firebase/fire';

export default function UploadPic(props) {
  const [image, setImage] = useState(null);
  // const firebaseConfig = {
  //   apiKey: 'AIzaSyB3b3oSa-zGadWW49Isi23G_9RYUmSkeMY',
  //   authDomain: 'stay-rnb-456de.firebaseapp.com',
  //   databaseURL: 'https://stay-rnb-456de-default-rtdb.firebaseio.com',
  //   projectId: 'stay-rnb-456de',
  //   storageBucket: 'stay-rnb-456de.appspot.com',
  //   messagingSenderId: '466254791780',
  //   appId: '1:466254791780:web:3c6f5b6ec46ab5771f8b71',
  //   measurementId: 'G-NM6HMTLDV7',
  // };
  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  var storage = firebase.storage();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log('About to upload!!!', result);
    var storageRef = storage.ref().child(props.firstTextInput);

    var message = result.uri;
    storageRef.putString(message, 'data_url').then((snapshot) => {
      console.log('Uploaded a data_url string!', snapshot);
      snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log('File available at', downloadURL);
        props.handlePhotoUpload(downloadURL);
      });
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  // RETURN***************************************************************
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Upload Image " onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}
